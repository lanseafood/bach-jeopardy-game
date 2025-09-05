#!/bin/bash

# Aggressive Video Compression Script - Target: ALL videos under 5MB
echo "🎬 Aggressively compressing videos over 5MB..."

# Check if ffmpeg is installed
if ! command -v ffmpeg &> /dev/null; then
    echo "❌ ffmpeg is not installed. Please install it first:"
    echo "   brew install ffmpeg  # on macOS"
    exit 1
fi

# Function to compress a video to under 5MB
compress_to_5mb() {
    local input_file="$1"
    local output_file="$2"
    
    echo "🔄 Compressing: $input_file"
    
    # Get original file size
    original_size=$(stat -f%z "$input_file" 2>/dev/null || stat -c%s "$input_file" 2>/dev/null)
    original_size_mb=$((original_size / 1024 / 1024))
    
    echo "   Original size: ${original_size_mb}MB"
    
    # If already under 5MB, skip
    if [ $original_size_mb -le 5 ]; then
        echo "   ✅ Already under 5MB, skipping"
        return
    fi
    
    # Calculate target bitrate for 5MB (conservative estimate)
    # Assuming average video length, we'll use a target bitrate
    target_bitrate="800k"
    
    # First attempt: moderate compression
    echo "   🔄 Attempt 1: Moderate compression..."
    ffmpeg -i "$input_file" \
        -c:v libx264 \
        -crf 28 \
        -preset slow \
        -c:a aac \
        -b:a 128k \
        -movflags +faststart \
        -y \
        "$output_file" 2>/dev/null
    
    # Check size after first attempt
    if [ -f "$output_file" ]; then
        new_size=$(stat -f%z "$output_file" 2>/dev/null || stat -c%s "$output_file" 2>/dev/null)
        new_size_mb=$((new_size / 1024 / 1024))
        echo "   📊 After attempt 1: ${new_size_mb}MB"
        
        # If still over 5MB, try more aggressive compression
        if [ $new_size_mb -gt 5 ]; then
            echo "   🔄 Attempt 2: More aggressive compression..."
            ffmpeg -i "$input_file" \
                -c:v libx264 \
                -crf 32 \
                -preset slow \
                -c:a aac \
                -b:a 96k \
                -movflags +faststart \
                -y \
                "$output_file" 2>/dev/null
            
            # Check size after second attempt
            if [ -f "$output_file" ]; then
                final_size=$(stat -f%z "$output_file" 2>/dev/null || stat -c%s "$output_file" 2>/dev/null)
                final_size_mb=$((final_size / 1024 / 1024))
                echo "   📊 After attempt 2: ${final_size_mb}MB"
                
                # If still over 5MB, try maximum compression
                if [ $final_size_mb -gt 5 ]; then
                    echo "   🔄 Attempt 3: Maximum compression..."
                    ffmpeg -i "$input_file" \
                        -c:v libx264 \
                        -crf 35 \
                        -preset slow \
                        -c:a aac \
                        -b:a 64k \
                        -movflags +faststart \
                        -y \
                        "$output_file" 2>/dev/null
                    
                    # Final size check
                    if [ -f "$output_file" ]; then
                        max_size=$(stat -f%z "$output_file" 2>/dev/null || stat -c%s "$output_file" 2>/dev/null)
                        max_size_mb=$((max_size / 1024 / 1024))
                        echo "   📊 After attempt 3: ${max_size_mb}MB"
                        
                        # If still over 5MB, try with lower resolution
                        if [ $max_size_mb -gt 5 ]; then
                            echo "   🔄 Attempt 4: Reducing resolution..."
                            ffmpeg -i "$input_file" \
                                -c:v libx264 \
                                -crf 35 \
                                -preset slow \
                                -vf "scale=720:-2" \
                                -c:a aac \
                                -b:a 64k \
                                -movflags +faststart \
                                -y \
                                "$output_file" 2>/dev/null
                            
                            # Final check
                            if [ -f "$output_file" ]; then
                                final_final_size=$(stat -f%z "$output_file" 2>/dev/null || stat -c%s "$output_file" 2>/dev/null)
                                final_final_size_mb=$((final_final_size / 1024 / 1024))
                                echo "   📊 After attempt 4: ${final_final_size_mb}MB"
                            fi
                        fi
                    fi
                fi
            fi
        fi
        
        # Final result
        if [ -f "$output_file" ]; then
            final_result_size=$(stat -f%z "$output_file" 2>/dev/null || stat -c%s "$output_file" 2>/dev/null)
            final_result_size_mb=$((final_result_size / 1024 / 1024))
            echo "   ✅ Final size: ${final_result_size_mb}MB"
        else
            echo "   ❌ Failed to compress $input_file"
        fi
    else
        echo "   ❌ Failed to create output file"
    fi
}

# Process all video files
echo "🚀 Starting aggressive compression..."

# Process all .mp4 files
for mp4_file in public/videos/*.mp4; do
    if [ -f "$mp4_file" ]; then
        filename=$(basename "$mp4_file")
        temp_file="public/videos/temp_${filename}"
        compress_to_5mb "$mp4_file" "$temp_file"
        
        # Replace original if compression was successful
        if [ -f "$temp_file" ]; then
            mv "$temp_file" "$mp4_file"
        fi
    fi
done

# Clean up any temp files
rm -f public/videos/temp_*

echo ""
echo "📊 Final Compression Summary:"
echo "============================="

# Show final file sizes
total_size=0
file_count=0
over_5mb_count=0

for video in public/videos/*.mp4; do
    if [ -f "$video" ]; then
        size=$(stat -f%z "$video" 2>/dev/null || stat -c%s "$video" 2>/dev/null)
        size_mb=$((size / 1024 / 1024))
        total_size=$((total_size + size))
        file_count=$((file_count + 1))
        
        if [ $size_mb -gt 5 ]; then
            echo "$(basename "$video"): ${size_mb}MB ⚠️  STILL OVER 5MB"
            over_5mb_count=$((over_5mb_count + 1))
        else
            echo "$(basename "$video"): ${size_mb}MB ✅"
        fi
    fi
done

total_size_mb=$((total_size / 1024 / 1024))
echo ""
echo "📈 Total size: ${total_size_mb}MB across ${file_count} files"
echo "⚠️  Videos still over 5MB: ${over_5mb_count}"

if [ $over_5mb_count -eq 0 ]; then
    echo "🎉 SUCCESS! All videos are now under 5MB!"
else
    echo "⚠️  ${over_5mb_count} videos are still over 5MB. Consider:"
    echo "   - Further reducing resolution"
    echo "   - Shortening video length"
    echo "   - Using different compression settings"
fi

echo ""
echo "✅ Aggressive compression complete!"
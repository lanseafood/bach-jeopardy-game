#!/bin/bash

# Video Optimization Script for Web Deployment
# This script compresses videos to be web-friendly (under 2MB each)

echo "🎬 Starting video optimization for web deployment..."

# Check if ffmpeg is installed
if ! command -v ffmpeg &> /dev/null; then
    echo "❌ ffmpeg is not installed. Please install it first:"
    echo "   brew install ffmpeg  # on macOS"
    echo "   apt install ffmpeg   # on Ubuntu/Debian"
    exit 1
fi

# Create backup directory
BACKUP_DIR="public/videos/backup-$(date +%Y%m%d-%H%M%S)"
mkdir -p "$BACKUP_DIR"

# Move original videos to backup
echo "📦 Creating backup of original videos..."
cp public/videos/*.mov "$BACKUP_DIR/" 2>/dev/null || true
cp public/videos/*.mp4 "$BACKUP_DIR/" 2>/dev/null || true

# Function to optimize a video
optimize_video() {
    local input_file="$1"
    local output_file="$2"
    local target_size_mb=5  # Target size in MB
    
    echo "🔄 Optimizing: $input_file"
    
    # Get original file size
    original_size=$(stat -f%z "$input_file" 2>/dev/null || stat -c%s "$input_file" 2>/dev/null)
    original_size_mb=$((original_size / 1024 / 1024))
    
    echo "   Original size: ${original_size_mb}MB"
    
    # If file is already small enough, just convert format if needed
    if [ $original_size_mb -le $target_size_mb ] && [[ "$input_file" == *.mp4 ]]; then
        echo "   ✅ Already optimized, copying as-is"
        cp "$input_file" "$output_file"
        return
    fi
    
    # Calculate target bitrate for 5MB target with high quality
    # For 5MB target, we'll use higher bitrates to preserve quality
    target_bitrate="2000k"
    
    # Optimize the video with high quality settings
    ffmpeg -i "$input_file" \
        -c:v libx264 \
        -crf 23 \
        -preset slow \
        -c:a aac \
        -b:a 192k \
        -movflags +faststart \
        -y \
        "$output_file" 2>/dev/null
    
    # Check if optimization was successful
    if [ -f "$output_file" ]; then
        new_size=$(stat -f%z "$output_file" 2>/dev/null || stat -c%s "$output_file" 2>/dev/null)
        new_size_mb=$((new_size / 1024 / 1024))
        echo "   ✅ Optimized size: ${new_size_mb}MB"
        
        # If still too large, try moderate compression (still preserving quality)
        if [ $new_size_mb -gt $target_size_mb ]; then
            echo "   🔄 Still too large, applying moderate compression while preserving quality..."
            ffmpeg -i "$input_file" \
                -c:v libx264 \
                -crf 26 \
                -preset slow \
                -c:a aac \
                -b:a 160k \
                -movflags +faststart \
                -y \
                "$output_file" 2>/dev/null
            
            final_size=$(stat -f%z "$output_file" 2>/dev/null || stat -c%s "$output_file" 2>/dev/null)
            final_size_mb=$((final_size / 1024 / 1024))
            echo "   ✅ Final size: ${final_size_mb}MB"
        fi
    else
        echo "   ❌ Failed to optimize $input_file"
    fi
}

# Process all video files
echo "🚀 Starting optimization process..."

# Process .mov files (convert to .mp4 and optimize)
for mov_file in public/videos/*.mov; do
    if [ -f "$mov_file" ]; then
        filename=$(basename "$mov_file" .mov)
        output_file="public/videos/${filename}.mp4"
        optimize_video "$mov_file" "$output_file"
    fi
done

# Process existing .mp4 files (optimize if needed)
for mp4_file in public/videos/*.mp4; do
    if [ -f "$mp4_file" ]; then
        filename=$(basename "$mp4_file")
        temp_file="public/videos/temp_${filename}"
        optimize_video "$mp4_file" "$temp_file"
        
        # Replace original if optimization was successful
        if [ -f "$temp_file" ]; then
            mv "$temp_file" "$mp4_file"
        fi
    fi
done

# Clean up any temp files
rm -f public/videos/temp_*

echo ""
echo "📊 Optimization Summary:"
echo "========================"

# Show file sizes after optimization
total_size=0
file_count=0

for video in public/videos/*.mp4; do
    if [ -f "$video" ]; then
        size=$(stat -f%z "$video" 2>/dev/null || stat -c%s "$video" 2>/dev/null)
        size_mb=$((size / 1024 / 1024))
        total_size=$((total_size + size))
        file_count=$((file_count + 1))
        echo "$(basename "$video"): ${size_mb}MB"
    fi
done

total_size_mb=$((total_size / 1024 / 1024))
echo ""
echo "📈 Total optimized size: ${total_size_mb}MB across ${file_count} files (target: ~5MB each)"
echo "💾 Original files backed up to: $BACKUP_DIR"
echo ""
echo "✅ Video optimization complete!"
echo ""
echo "Next steps:"
echo "1. Test the optimized videos in your application"
echo "2. If quality is acceptable, you can delete the backup folder"
echo "3. Update your code to reference .mp4 files instead of .mov files"
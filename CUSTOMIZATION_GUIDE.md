# Jeopardy Game Customization Guide

This guide shows you how to easily customize the Jeopardy game for different people by modifying just one configuration file.

## Quick Start

1. **Edit the main configuration file**: `lib/game-config.ts`
2. **Change the title, categories, questions, colors, landing page image, title color, and fonts**
3. **Save and test your changes**

## What You Can Customize

### 1. Game Title
```typescript
title: "JeaJon Jeopardy", // Change this to any title you want
```

### 2. Landing Page Image and Title Color
```typescript
landingPage: {
  image: {
    src: "/vancouver.png",    // Change this to your image file
    alt: "Vancouver",         // Change this to describe your image
    width: 850,               // Adjust size as needed
    height: 680,              // Adjust size as needed
  },
  titleColor: "text-[#F8F2FF]", // Change this to customize the title color
},
```

**To change the landing page image:**
- Add your image file to the `public/` folder
- Update the `src` path to match your file name
- Update the `alt` text to describe your image
- Adjust `width` and `height` to fit your image properly

**To change the title color:**
- Use any Tailwind CSS color class (e.g., `text-white`, `text-blue-600`)
- Use custom hex colors with `text-[#HEXCODE]` format
- Consider contrast with your background image

**Available images in your project:**
- `/vancouver.png` - Vancouver skyline
- `/eiffletower.png` - Eiffel Tower
- `/dc.jpeg` - DC monument
- `/placeholder.jpg` - Generic placeholder

**Popular title color options:**
- `text-white` - White text
- `text-[#F8F2FF]` - Light cream (current)
- `text-black` - Black text
- `text-blue-600` - Blue text
- `text-purple-600` - Purple text
- `text-pink-600` - Pink text

### 3. Fonts and Typography
```typescript
fonts: {
  // Main title font (landing page and game board)
  title: {
    family: "font-classyvogue", // Change to any font family
    size: "text-[6rem]", // Change size as needed
  },
  // Category title font (game board categories)
  category: {
    family: "font-mogilte", // Change to any font family
    size: "text-lg md:text-1.2xl lg:text-1.5xl", // Responsive sizing
  },
  // Question text font
  question: {
    family: "font-sans", // Change to any font family
    size: "text-2xl", // Change size as needed
  },
  // Button text font
  button: {
    family: "font-sans", // Change to any font family
    size: "text-lg md:text-xl lg:text-2xl", // Responsive sizing
  },
},
```

**Available font families:**
- `font-classyvogue` - Classy Vogue (elegant script)
- `font-waltograph` - Waltograph (Disney-style)
- `font-mogilte` - Mogilte (modern sans-serif)
- `font-sans` - System sans-serif
- `font-serif` - System serif
- `font-mono` - Monospace

**Font size options:**
- **Small**: `text-sm`, `text-base`, `text-lg`
- **Medium**: `text-xl`, `text-2xl`, `text-3xl`
- **Large**: `text-4xl`, `text-5xl`, `text-6xl`
- **Extra Large**: `text-7xl`, `text-8xl`, `text-9xl`
- **Custom**: `text-[6rem]`, `text-[8rem]`, etc.
- **Responsive**: `text-lg md:text-xl lg:text-2xl`

**Font combination examples:**
- **Elegant**: `font-classyvogue` for titles, `font-mogilte` for categories
- **Playful**: `font-waltograph` for titles, `font-sans` for categories
- **Modern**: `font-mogilte` for titles, `font-sans` for categories
- **Classic**: `font-serif` for titles, `font-sans` for categories

### 4. Categories and Questions
```typescript
categories: {
  "The Firsts 🥇": {
    100: {
      question: "Where did you go on the first date?",
      answer: {
        type: "video",
        content: "/videos/FIRSTS_100.mp4",
      },
    },
    // Add more questions...
  },
  // Add more categories...
}
```

**To add/remove categories:**
- Add new category objects to the `categories` object
- Remove category objects you don't want
- Make sure your video files match the content paths

**To add/remove questions:**
- Add new point values (100, 200, 300, etc.) to each category
- Remove point values you don't want
- Update the `pointValues` array to match

### 5. Point Values
```typescript
pointValues: [100, 200, 300, 400, 500, 600, 700], // Add or remove values
```

### 6. Color Themes
```typescript
colors: {
  // Background gradients
  landingPage: "from-sunset-orange via-sunset-cream to-sunset-green",
  gamePage: "from-sunset-cream to-sunset-orange",
  questionPage: "from-sunset-cream to-sunset-green",
  
  // Button colors
  primaryButton: {
    background: "bg-sunset-green",
    text: "text-sunset-cream",
    hover: "hover:bg-sunset-yellow",
  },
  secondaryButton: {
    background: "bg-sunset-cream",
    text: "text-sunset-charcoal",
    hover: "hover:bg-sunset-yellow",
  },
  
  // Text colors
  title: "text-sunset-green",
  categoryTitle: "text-sunset-darkgreen",
  questionText: "text-sunset-charcoal",
  
  // Border colors
  border: "border-[#7C6E8D]",
}
```

### 7. Game Settings
```typescript
settings: {
  showFloatingObjects: true,   // Set to false to hide floating objects
  showFloatingHeads: true,     // Set to false to hide floating heads
  showCherryBlossoms: true,    // Set to false to hide cherry blossoms
  showFireworks: true,         // Set to false to hide fireworks
  showShootingStars: true,     // Set to false to hide shooting stars
  showStaticTwinkles: true,    // Set to false to hide static twinkles
}
```

## Floating Elements Configuration

The game now supports fully customizable floating elements including floating objects and floating heads.

### Floating Objects Configuration

```typescript
floatingElements: {
  floatingObjects: {
    image: "/corgi.png", // Change this to any image in your public folder
    count: 8, // Number of floating objects to display
    sizes: {
      mobile: 65, // Size on mobile devices
      tablet: 80, // Size on tablet devices  
      desktop: 95, // Size on desktop devices
    },
    rotationSpeed: {
      min: -2, // Minimum rotation speed
      max: 2,  // Maximum rotation speed
    },
    movementSpeed: {
      min: -1, // Minimum movement speed
      max: 1,  // Maximum movement speed
    },
  },
}
```

**Customization Options:**
- **`image`**: Path to the image file in your `public` folder (e.g., `/my-image.png`)
- **`count`**: Number of floating objects to display on screen
- **`sizes`**: Different sizes for different screen sizes
- **`rotationSpeed`**: How fast the objects rotate (negative = counter-clockwise, positive = clockwise)
- **`movementSpeed`**: How fast the objects move around the screen

### Floating Heads Configuration

```typescript
floatingHeads: {
  images: [
    {
      src: "/fh1.png", // First head image
      size: 85,
    },
    {
      src: "/fh2.png", // Second head image
      size: 75,
    },
    {
      src: "/fh3.png", // Third head image
      size: 65,
    },
    {
      src: "/fh4.png", // Fourth head image
      size: 65,
    },
    {
      src: "/fh5.png", // Fifth head image
      size: 75,
    },
  ],
  rotationSpeed: {
    min: -1, // Minimum rotation speed
    max: 1,  // Maximum rotation speed
  },
  movementSpeed: {
    min: -1, // Minimum movement speed
    max: 1,  // Maximum movement speed
  },
}
```

**Customization Options:**
- **`images`**: Array of head images with their individual sizes
- **`src`**: Path to each head image file
- **`size`**: Individual size for each head image
- **`rotationSpeed`**: How fast the heads rotate
- **`movementSpeed`**: How fast the heads move around the screen

### Examples

**Change floating objects to hearts:**
```typescript
floatingObjects: {
  image: "/heart.png", // Make sure heart.png exists in your public folder
  count: 12, // More hearts
  sizes: {
    mobile: 50,
    tablet: 65,
    desktop: 80,
  },
  // ... rest of config
}
```

**Add more head images:**
```typescript
floatingHeads: {
  images: [
    {
      src: "/head1.png",
      size: 90,
    },
    {
      src: "/head2.png",
      size: 80,
    },
    {
      src: "/head3.png",
      size: 70,
    },
    // Add as many as you want
  ],
  // ... rest of config
}
```

**Make elements move faster:**
```typescript
movementSpeed: {
  min: -3, // Faster minimum speed
  max: 3,  // Faster maximum speed
}
```

**Disable rotation:**
```typescript
rotationSpeed: {
  min: 0, // No rotation
  max: 0,
}
```

## Color Scheme Examples

### Sunset Theme (Current)
```typescript
landingPage: "from-sunset-orange via-sunset-cream to-sunset-green",
gamePage: "from-sunset-cream to-sunset-orange",
questionPage: "from-sunset-cream to-sunset-green",
titleColor: "text-[#F8F2FF]", // Light cream for good contrast
fonts: {
  title: { family: "font-classyvogue", size: "text-[6rem]" },
  category: { family: "font-mogilte", size: "text-lg md:text-1.2xl lg:text-1.5xl" },
}
```

### Blue/Purple Theme
```typescript
landingPage: "from-blue-400 via-purple-400 to-pink-400",
gamePage: "from-purple-200 to-pink-200",
questionPage: "from-blue-200 to-purple-200",
titleColor: "text-white", // White for good contrast on dark backgrounds
fonts: {
  title: { family: "font-waltograph", size: "text-5xl md:text-7xl lg:text-8xl" },
  category: { family: "font-classyvogue", size: "text-xl md:text-2xl lg:text-3xl" },
}
```

### Green/Nature Theme
```typescript
landingPage: "from-green-400 via-emerald-400 to-teal-400",
gamePage: "from-emerald-200 to-teal-200",
questionPage: "from-green-200 to-emerald-200",
titleColor: "text-white", // White for good contrast
fonts: {
  title: { family: "font-mogilte", size: "text-6xl md:text-8xl lg:text-9xl" },
  category: { family: "font-sans", size: "text-lg md:text-xl lg:text-2xl" },
}
```

### Pink/Romantic Theme
```typescript
landingPage: "from-pink-400 via-rose-400 to-red-400",
gamePage: "from-rose-200 to-red-200",
questionPage: "from-pink-200 to-rose-200",
titleColor: "text-white", // White for good contrast
fonts: {
  title: { family: "font-classyvogue", size: "text-7xl md:text-8xl lg:text-9xl" },
  category: { family: "font-waltograph", size: "text-lg md:text-xl lg:text-2xl" },
}
```

## Step-by-Step Customization

### For a New Couple (e.g., "Sarah & Mike")

1. **Copy the example config**:
   ```bash
   cp lib/game-config-example.ts lib/game-config.ts
   ```

2. **Update the title**:
   ```typescript
   title: "Sarah & Mike's Jeopardy",
   ```

3. **Change the landing page image and title color**:
   ```typescript
   landingPage: {
     image: {
       src: "/eiffletower.png", // Use Eiffel Tower for Paris theme
       alt: "Eiffel Tower",
       width: 1000,
       height: 800,
     },
     titleColor: "text-white", // White text for good contrast
   },
   ```

4. **Customize fonts**:
   ```typescript
   fonts: {
     title: {
       family: "font-waltograph", // Disney-style font for fun
       size: "text-5xl md:text-7xl lg:text-8xl",
     },
     category: {
       family: "font-classyvogue", // Elegant font for categories
       size: "text-xl md:text-2xl lg:text-3xl",
     },
     question: {
       family: "font-serif", // Classic serif for questions
       size: "text-xl",
     },
     button: {
       family: "font-sans", // Clean sans-serif for buttons
       size: "text-lg md:text-xl lg:text-2xl",
     },
   },
   ```

5. **Change categories and questions**:
   ```typescript
   categories: {
     "First Dates 💕": {
       100: {
         question: "Where did you go on your first date?",
         answer: {
           type: "video",
           content: "/videos/SARAH_MIKE_100.mp4",
         },
       },
       // Add more questions...
     },
     // Add more categories...
   }
   ```

6. **Choose a color theme**:
   ```typescript
   colors: {
     landingPage: "from-blue-400 via-purple-400 to-pink-400",
     // ... rest of colors
   }
   ```

7. **Update video files**:
   - Add your video files to the `public/videos/` folder
   - Make sure the file names match the content paths in your config

## Tips for Easy Customization

1. **Keep a template**: Save your current `game-config.ts` as a template for future use
2. **Use emojis**: Add emojis to category names for visual appeal
3. **Test incrementally**: Make small changes and test frequently
4. **Backup your work**: Keep backups of different configurations
5. **Image sizing**: Test your landing page image at different screen sizes
6. **Image formats**: Use PNG or JPG files for best compatibility
7. **Title contrast**: Make sure your title color contrasts well with your background image
8. **Color harmony**: Choose title colors that complement your overall color scheme
9. **Font readability**: Test fonts at different sizes to ensure readability
10. **Font combinations**: Mix different font families for visual hierarchy
11. **Responsive design**: Use responsive font sizes for better mobile experience

## File Structure

```
lib/
├── game-config.ts          # Main configuration (edit this)
├── game-config-example.ts  # Example configuration
└── utils.ts               # Utility functions

components/
├── main-game.tsx          # Uses gameConfig
├── landing-page.tsx       # Uses gameConfig
└── ...

app/
├── question/[category]/[points]/
│   ├── page.tsx           # Uses gameConfig
│   └── question-client.tsx # Uses gameConfig
└── ...

public/
├── vancouver.png          # Available landing page images
├── eiffletower.png
├── dc.jpeg
├── placeholder.jpg
└── videos/               # Video files
```

## Troubleshooting

- **Colors not updating**: Make sure you're using valid Tailwind CSS classes
- **Questions not showing**: Check that your video files exist and paths are correct
- **Categories not appearing**: Verify the category names match exactly in your config
- **Image not showing**: Check that the image file exists in the public folder
- **Image too big/small**: Adjust the width and height values in the config
- **Title not visible**: Check that your title color contrasts with the background image
- **Title color not changing**: Make sure you're using the correct Tailwind CSS class format
- **Fonts not changing**: Verify the font family names are correct
- **Font too small/large**: Adjust the font size values in the config
- **Font not loading**: Check that the font files exist in the public/fonts folder

## Need Help?

If you need help customizing the game, you can:
1. Check the example configuration file
2. Look at the current working configuration
3. Test changes incrementally
4. Use the browser's developer tools to see what's happening 
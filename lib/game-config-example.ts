// Example Configuration for "Sarah & Mike's Jeopardy"
// Copy this file to game-config.ts and customize for different people

export const gameConfig = {
  // Game Title
  title: "Sarah & Mike's Jeopardy",
  
  // Landing page image - Easy to customize for different people
  landingPage: {
    image: {
      src: "/eiffletower.png", // Change this to your image file
      alt: "Eiffel Tower",     // Change this to describe your image
      width: 1000,             // Adjust size as needed
      height: 800,             // Adjust size as needed
    },
    titleColor: "text-white",  // Change this to customize the title color
  },

  // Font configuration - Easy to customize for different people
  fonts: {
    // Main title font (landing page and game board)
    title: {
      family: "font-waltograph", // Change to: font-classyvogue, font-mogilte, font-sans, font-serif, font-mono
      size: "text-5xl md:text-7xl lg:text-8xl", // Change size as needed: text-4xl, text-5xl, text-6xl, text-7xl, text-8xl, text-[6rem], etc.
    },
    // Category title font (game board categories)
    category: {
      family: "font-classyvogue", // Change to: font-waltograph, font-mogilte, font-sans, font-serif, font-mono
      size: "text-xl md:text-2xl lg:text-3xl", // Responsive sizing
    },
    // Question text font
    question: {
      family: "font-serif", // Change to: font-sans, font-mono, font-classyvogue, font-waltograph, font-mogilte
      size: "text-xl", // Change size as needed
    },
    // Button text font
    button: {
      family: "font-sans", // Change to: font-serif, font-mono, font-classyvogue, font-waltograph, font-mogilte
      size: "text-lg md:text-xl lg:text-2xl", // Responsive sizing
    },
  },
  
  // Categories and their questions
  categories: {
    "First Dates 💕": {
      100: {
        question: "Where did you go on your first date?",
        answer: {
          type: "video",
          content: "/videos/SARAH_MIKE_100.mp4",
        },
      },
      200: {
        question: "What was your first impression of each other?",
        answer: {
          type: "video",
          content: "/videos/SARAH_MIKE_200.mp4",
        },
      },
      // Add more questions...
    },
    "Travel Adventures ✈️": {
      100: {
        question: "What's the most adventurous trip you've taken together?",
        answer: {
          type: "video",
          content: "/videos/TRAVEL_100.mp4",
        },
      },
      // Add more questions...
    },
    // Add more categories...
  },

  // Point values for the game board
  pointValues: [100, 200, 300, 400, 500], // Remove 600, 700 if you want fewer questions

  // Color themes - Easy to customize for different people
  colors: {
    // Background gradients - Change these for different color schemes
    landingPage: "from-blue-400 via-purple-400 to-pink-400", // Blue/purple theme
    gamePage: "from-purple-200 to-pink-200",
    questionPage: "from-blue-200 to-purple-200",
    
    // Button colors
    primaryButton: {
      background: "bg-blue-600",
      text: "text-white",
      hover: "hover:bg-blue-700",
    },
    secondaryButton: {
      background: "bg-purple-200",
      text: "text-purple-800",
      hover: "hover:bg-purple-300",
    },
    
    // Text colors
    title: "text-blue-600",
    categoryTitle: "text-purple-700",
    questionText: "text-gray-800",
    
    // Border colors
    border: "border-purple-400",
  },

  // Game settings
  settings: {
    showFloatingObjects: false, // Change to false if you don't want floating objects
    showFloatingHeads: true,
    showCherryBlossoms: true,
    showFireworks: true,
    showShootingStars: true,
    showStaticTwinkles: true,
  },

  // Floating elements configuration
  floatingElements: {
    // Floating objects (previously corgis)
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
    // Floating heads
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
    },
  },
}

// Helper functions remain the same
export const getCategoryNames = () => Object.keys(gameConfig.categories)
export const getAllQuestions = () => gameConfig.categories
export const getPointValues = () => gameConfig.pointValues 
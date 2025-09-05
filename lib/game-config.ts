// Game Configuration - Easy to customize for different people
export const gameConfig = {
  // Game Title
  title: "JeaJon Jeopardy",
  
  // Landing page image
  landingPage: {
    image: {
      src: "/vancouver.png",
      alt: "Vancouver",
      width: 850,
      height: 680,
    },
    titleColor: "sunset-cream",
    backgroundGradient: {
      from: "sunset-orange", // sunset-
      via: "sunset-cream", // sunset-cream
      to: "sunset-green", // sunset-
    },
  },
  
  // Font configuration - Easy to customize for different people
  fonts: {
    // Default site font (used across the entire site unless overridden)
    default: {
      family: "font-mogilte",
    },
    // Main title font (landing page and game board main titles only)
    mainTitle: {
      family: "font-classyvogue",
      size: "6rem",
    },
    // Category title font (game board categories)
    category: {
      family: "font-mogilte",
      size: "text-md md:text-md lg:text-md",
    },
    // Question text font
    question: {
      family: "font-mogilte",
      size: "text-2xl",
    },
    // Button text font
    button: {
      family: "font-mogilte",
      size: "text-lg md:text-xl lg:text-2xl",
    },
  },

  // Color themes - Easy to customize for different people
  colors: {
    // Background gradients
    gamePage: {
      from: "sunset-cream", 
      to: "sunset-green", 
    },
    questionPage: {
      from: "sunset-cream", 
      to: "sunset-green", 
    },
    
    // Button colors
    primaryButton: {
      background: "sunset-orange",
      text: "sunset-charcoal", 
      hover: "sunset-yellow",   
    },
    secondaryButton: {
      background: "sunset-cream", 
      text: "sunset-charcoal", 
      hover: "sunset-yellow", 
    },
    pointsButton: {
      background: "sunset-cream", 
      text: "sunset-charcoal", 
      hover: "sunset-yellow", 
      border: "sunset-charcoal", 
    },
    
    // Text colors
    gameTitle: "sunset-darkgreen", 
    categoryTitle: "sunset-charcoal", 
    questionText: "sunset-charcoal", 
    
    // Border colors
    border: "sunset-charcoal",
  },

  // Game settings
  settings: {
    showFloatingObjects: true,
    showFloatingHeads: true,
    showLandingPageFloatingHeads: true,
    showCherryBlossoms: false,
    showFireworks: true,
    showShootingStars: false,
    showStaticTwinkles: true,
  },

  // Point values for the game board
  pointValues: [100, 200, 300, 400, 500],

  // Categories and their questions
  categories: {
    "Jeannie-ology 🧪": {
      100: {
        question: "What app does Jeannie check religiously every morning?",
        answer: {
          type: "video",
          content: "/videos/JEANNIE_100.mp4",
        },
      },
      200: {
        question: "What color does Jeannie wear the most (and looks 🔥 in)?",
        answer: {
          type: "video",
          content: "/videos/JEANNIE_200.mp4",
        },
      },
      300: {
        question: "What is Jeannie's biggest \"ick\" in dating or relationships?",
        answer: {
          type: "video",
          content: "/videos/JEANNIE_300.mp4",
        },
      },
      400: {
        question: "If Luna could talk, what's the first thing she'd roast Jeannie about?",
        answer: {
          type: "video",
          content: "/videos/JEANNIE_400.mp4",
        },
      },
      500: {
        question: "What does Jeannie always say she's \"going to stop doing\" but never does?",
        answer: {
          type: "video",
          content: "/videos/JEANNIE_500.mp4",
        },
      },
    },
    "The Pits 🧻": {
      100: {
        question: "How many sheets of TP does she use per poo",
        answer: {
          type: "video",
          content: "/videos/PITS_100.mp4",
        },
      },
      200: {
        question: "Longest time she went without pooing",
        answer: {
          type: "video",
          content: "/videos/PITS_200.mp4",
        },
      },
      300: {
        question: "Which Formula 1 driver would Jon risk it all for?",
        answer: {
          type: "video",
          content: "/videos/PITS_300.mp4",
        },
      },
      400: {
        question: "Longest poop Jeannie has ever done?",
        answer: {
          type: "video",
          content: "/videos/PITS_400.mp4",
        },
      },
      500: {
        question: "What unhinged Jeannie quote belongs on a t-shirt?",
        answer: {
          type: "video",
          content: "/videos/PITS_500.mp4",
        },
      },
    },
    "Meet-Cute Moments 💞": {
      100: {
        question: "What's a personality trait of hers that you admire the most?",
        answer: {
          type: "video",
          content: "/videos/MEET_100.mp4",
        },
      },
      200: {
        question: "If you had met in high school, would you have dated him or put him in the \"friend zone\"?",
        answer: {
          type: "video",
          content: "/videos/MEET_200.mp4",
        },
      },
      300: {
        question: "What was Jeannie's first impression of Jon?",
        answer: {
          type: "video",
          content: "/videos/MEET_300.mp4",
        },
      },
      400: {
        question: "What's his favorite way to show affection when no one is watching?",
        answer: {
          type: "video",
          content: "/videos/MEET_400.mp4",
        },
      },
      500: {
        question: "What's a challenge you both faced early on that made your relationship stronger?",
        answer: {
          type: "video",
          content: "/videos/MEET_500.mp4",
        },
      },
    },
    "Future Forecast 📈": {
      100: {
        question: "Where are Jeannie and Jon planning to go for their honeymoon?",
        answer: {
          type: "video",
          content: "/videos/FUTURE_100.mp4",
        },
      },
      200: {
        question: "What's the one parenting rule he will swear he'll follow… but totally won't?",
        answer: {
          type: "video",
          content: "/videos/FUTURE_200.mp4",
        },
      },
      300: {
        question: "What's your ideal weekend routine as a married couple?",
        answer: {
          type: "video",
          content: "/videos/FUTURE_300.mp4",
        },
      },
      400: {
        question: "If you could predict one ridiculous argument you'll have as a married couple, what will it be about?",
        answer: {
          type: "video",
          content: "/videos/FUTURE_400.mp4",
        },
      },
      500: {
        question: "What are you most looking forward to in your future together?",
        answer: {
          type: "video",
          content: "/videos/FUTURE_500.mp4",
        },
      },
    },
  },

  // Floating elements configuration
  floatingElements: {
    // Floating objects (previously corgis)
    floatingObjects: {
      image: "/corgi.png",
      count: 6,
      sizes: {
        mobile: 65,
        tablet: 80,
        desktop: 95,
      },
      rotationSpeed: {
        min: -2,
        max: 2,
      },
      movementSpeed: {
        min: -1,
        max: 1,
      },
    },
    // Floating heads for game page
    floatingHeads: {
      images: [
        {
          src: "/fh1.png",
          size: 85,
        },
        {
          src: "/fh2.png", 
          size: 75,
        },
        {
          src: "/fh3.png",
          size: 65,
        },
        {
          src: "/fh4.png",
          size: 65,
        },
        {
          src: "/fh5.png",
          size: 75,
        },
        {
          src: "/fh6.png",
          size: 70,
        },
        {
          src: "/fh7.png",
          size: 80,
        },
        {
          src: "/fh8.png",
          size: 60,
        },
      ],
      rotationSpeed: {
        min: -1,
        max: 1,
      },
      movementSpeed: {
        min: -1,
        max: 1,
      },
    },
    // Floating heads for landing page (separate images)
    landingPageFloatingHeads: {
      images: [
        {
          src: "/landing_fh1.png",
          size: 80,
        },
        {
          src: "/landing_fh2.png", 
          size: 70,
        },
        {
          src: "/landing_fh3.png",
          size: 75,
        },
        {
          src: "/landing_fh4.png",
          size: 65,
        },
      ],
      rotationSpeed: {
        min: -1,
        max: 1,
      },
      movementSpeed: {
        min: -1,
        max: 1,
      },
    },
  },
}

// Helper function to get category names as an array
export const getCategoryNames = () => Object.keys(gameConfig.categories)

// Helper function to get all questions
export const getAllQuestions = () => gameConfig.categories

// Helper function to get point values
export const getPointValues = () => gameConfig.pointValues
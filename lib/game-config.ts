// Game Configuration - Easy to customize for different people
export const gameConfig = {
  // Game Title
  title: "Sophia & Anhang's \n Safari Jeopardy",
  
  // Landing page image
  landingPage: {
    image: {
      src: "/safari.png",
      alt: "Safari",
      width: 800,
      height: 600,
    },
    titleColor: "sunset-darkergreen",
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
      size: "4rem",
    },
    // Category title font (game board categories)
    category: {
      family: "font-mogilte",
      size: "text-md md:text-sm lg:text-sm",
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
    "🐾 Born to Be Wild": {
      100: {
        question: "What's the baby's gender?",
        answer: "A Boy!",
      },
      200: {
        question: "What will the baby's name be?",
        answer: "Kaisel",
      },
      300: {
        question: "What will the baby's nickname be?",
        answer: "Kai",
      },
      400: {
        question: "Where did the baby's name come from?",
        answer: "Anime / Solo Leveling",
      },
      500: {
        question: "Who suggested the baby's name?",
        answer: "Sophia!",
      },
    },
    "👑 Future King of the Jungle": {
      100: {
        question: "What's the baby's zodiac sign going to be?",
        answer: "Aquarius",
      },
      200: {
        question: "What will the baby's Chinese zodiac be?",
        answer: "Snake",
      },
      300: {
        question: "What will the baby's birthstone be?",
        answer: "Garnet",
      },
      400: {
        question: "How many weeks old is the baby today?",
        answer: "32",
      },
      500: {
        question: "What vegetable or fruit size is the baby today?",
        answer: "Cabbage or cantaloupe",
      },
    },
    "🤰 Belly of the Beast": {
      100: {
        question: "What food did Sophia crave during pregnancy?",
        answer: "Orange juice or steak/beef",
      },
      200: {
        question: "What has been the worst pregnancy symptom for Sophia?",
        answer: "Leg cramps (\"charley horse\")",
      },
      300: {
        question: "What food aversion has Sophia had?",
        answer: "None",
      },
      400: {
        question: "What movie do baby kicks remind Sophia of?",
        answer: "Alien",
      },
      500: {
        question: "How much sympathy weight did Anhang put on before dieting?",
        answer: "7 lbs!!",
      },
    },
    "🧹 Zookeeper Duties & Doo-Doo-ties": {
      100: {
        question: "Who will be better at assembling baby gear?",
        answer: "Anhang",
      },
      200: {
        question: "What's the color theme for the baby room?",
        answer: "Green",
      },
      300: {
        question: "What is Anhang's home project for the baby room?",
        answer: "Building a closet",
      },
      400: {
        question: "What was the first baby item bought?",
        answer: "Crib",
      },
      500: {
        question: "Who will change more diapers?",
        answer: "Sophia",
      },
    },
    "🌍 Roam Sweet Roam": {
      100: {
        question: "Who is the baby's cousin?",
        answer: "Alina",
      },
      200: {
        question: "What classes has Sophia been taking for exercise?",
        answer: "Barre",
      },
      300: {
        question: "Where was the first babymoon?",
        answer: "Banff",
      },
      400: {
        question: "Where was the second babymoon?",
        answer: "Big Sur",
      },
      500: {
        question: "Where was the third babymoon?",
        answer: "Japan",
      },
    },
  },

  // Floating elements configuration
  floatingElements: {
    // Floating objects (previously corgis)
    floatingObjects: {
      image: "/aji.png",
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
          src: "/anhang1.png",
          size: 85,
        },
        {
          src: "/anhang2.png", 
          size: 75,
        },
        {
          src: "/anhang3.png",
          size: 65,
        },
        {
          src: "/sophia1.png",
          size: 65,
        },
        {
          src: "/sophia2.png",
          size: 75,
        },
        {
          src: "/sophia3.png",
          size: 70,
        },
        {
          src: "/tira.png",
          size: 80,
        },
        {
          src: "/tira.png",
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
          src: "/tira.png",
          size: 80,
        },
        {
          src: "/tira.png", 
          size: 70,
        },
        {
          src: "/tira.png",
          size: 75,
        },
        {
          src: "/tira.png",
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
// Game Configuration - Easy to customize for different people
export const gameConfig = {
  // Game Title
  title: "[Name] Jeopardy",
  
  // Landing page image
  landingPage: {
    image: {
      src: "/eiffletower.png",
      alt: "Eiffel Tower",
      width: 850,
      height: 680,
    },
    titleColor: "text-[#F8F2FF]",
  },
  
  // Font configuration - Easy to customize for different people
  fonts: {
    // Main title font (landing page and game board)
    title: {
      family: "font-classyvogue",
      size: "text-[6rem]",
    },
    // Category title font (game board categories)
    category: {
      family: "font-mogilte",
      size: "text-lg md:text-1.2xl lg:text-1.5xl",
    },
    // Question text font
    question: {
      family: "font-sans",
      size: "text-2xl",
    },
    // Button text font
    button: {
      family: "font-sans",
      size: "text-lg md:text-xl lg:text-2xl",
    },
  },
  
  // Categories and their questions
  categories: {
    "The Firsts 🥇": {
      100: {
        question: "Where did you go on the first date?",
        answer: {
          type: "video",
          content: "/videos/FIRSTS_100.mp4",
        },
      },
      200: {
        question: "How long after meeting did you become 'official'?",
        answer: {
          type: "video",
          content: "/videos/FIRSTS_200.mp4",
        },
      },
      300: {
        question: "Who made the first move?",
        answer: {
          type: "video",
          content: "/videos/FIRSTS_300.mp4",
        },
      },
      400: {
        question: "Who said I love you first?",
        answer: {
          type: "video",
          content: "/videos/FIRSTS_400.mp4",
        },
      },
      500: {
        question: "What was the first trip you took together?",
        answer: {
          type: "video",
          content: "/videos/FIRSTS_500.mp4",
        },
      },
      600: {
        question: "What was the first meal you cooked together?",
        answer: {
          type: "video",
          content: "/videos/FIRSTS_600.mp4",
        },
      },
      700: {
        question: "What was the first impression?",
        answer: {
          type: "video",
          content: "/videos/FIRSTS_700.mp4",
        },
      },
    },
    "Dates 💑": {
      100: {
        question: "What has been the most extravagant date so far?",
        answer: {
          type: "video",
          content: "/videos/DATES_100.mp4",
        },
      },
      200: {
        question: "What's the funniest thing that's happened on a date?",
        answer: {
          type: "video",
          content: "/videos/DATES_200.mp4",
        },
      },
      300: {
        question: "What is Lewin's ideal date night?",
        answer: {
          type: "video",
          content: "/videos/DATES_300.mp4",
        },
      },
      400: {
        question: "What was Lewin's thought about your first date?",
        answer: {
          type: "video",
          content: "/videos/DATES_400.mp4",
        },
      },
      500: {
        question: "Who plans the dates most of the time?",
        answer: {
          type: "video",
          content: "/videos/DATES_500.mp4",
        },
      },
      600: {
        question: "What's the most spontaneous thing you've done during a date?",
        answer: {
          type: "video",
          content: "/videos/DATES_600.mp4",
        },
      },
      700: {
        question: "What's your go to date night activity?",
        answer: {
          type: "video",
          content: "/videos/DATES_700.mp4",
        },
      },
    },
    "The Love Birds 🕊️": {
      100: {
        question: "What is Lewin's favorite quality about you?",
        answer: {
          type: "video",
          content: "/videos/LOVEBIRDS_100.mp4",
        },
      },
      200: {
        question: "What is the one food you both love or hate?",
        answer: {
          type: "video",
          content: "/videos/LOVEBIRDS_200.mp4",
        },
      },
      300: {
        question: "How would you describe you as a couple in three words?",
        answer: {
          type: "video",
          content: "/videos/LOVEBIRDS_300.mp4",
        },
      },
      400: {
        question: "What is Lewin's love language?",
        answer: {
          type: "video",
          content: "/videos/LOVEBIRDS_400.mp4",
        },
      },
      500: {
        question: "What's a quirky habit of yours that Lewin secretly adores?",
        answer: {
          type: "video",
          content: "/videos/LOVEBIRDS_500.mp4",
        },
      },
      600: {
        question: "What is one thing that made Lewin realize you were the one?",
        answer: {
          type: "video",
          content: "/videos/LOVEBIRDS_600.mp4",
        },
      },
      700: {
        question: "Who is the better cook?",
        answer: {
          type: "video",
          content: "/videos/LOVEBIRDS_700.mp4",
        },
      },
    },
    "The Future 🔮": {
      100: {
        question: "What's one dream or goal you're excited to pursue together as a couple?",
        answer: {
          type: "video",
          content: "/videos/FUTURE_100.mp4",
        },
      },
      200: {
        question: "What kind of pet do you want to have together if any?",
        answer: {
          type: "video",
          content: "/videos/FUTURE_200.mp4",
        },
      },
      300: {
        question: "What is a new tradition you'd like to start together?",
        answer: {
          type: "video",
          content: "/videos/FUTURE_300.mp4",
        },
      },
      400: {
        question: "Where is Lewin's ideal honeymoon spot?",
        answer: {
          type: "video",
          content: "/videos/FUTURE_400.mp4",
        },
      },
      500: {
        question: "How many kids do you want together if any?",
        answer: {
          type: "video",
          content: "/videos/FUTURE_500.mp4",
        },
      },
      600: {
        question: "Who will be the stricter parent (if you want kids)?",
        answer: {
          type: "video",
          content: "/videos/FUTURE_600.mp4",
        },
      },
      700: {
        question: "What is one thing that Lewin will never want to change about the relationship?",
        answer: {
          type: "video",
          content: "/videos/FUTURE_700.mp4",
        },
      },
    },
  },

  // Point values for the game board
  pointValues: [100, 200, 300, 400, 500, 600, 700],

  // Color themes - Easy to customize for different people
  colors: {
    // Background gradients
    landingPage: "from-sunset-orange via-sunset-cream to-sunset-green",
    gamePage: "from-sunset-cream to-sunset-orange",
    questionPage: "from-sunset-cream to-sunset-green",
    
    // Button colors
    primaryButton: {
      background: "bg-sunset-pink",
      text: "text-sunset-charcoal",
      hover: "hover:bg-sunset-yellow",
    },
    secondaryButton: {
      background: "bg-sunset-cream",
      text: "text-sunset-charcoal",
      hover: "hover:bg-sunset-yellow",
    },
    
    // Text colors
    title: "text-sunset-charcoal",
    categoryTitle: "text-sunset-charcoal",
    questionText: "text-sunset-charcoal",
    
    // Border colors
    border: "border-[#7C6E8D]",
  },

  // Game settings
  settings: {
    showFloatingObjects: true,
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
      image: "/corgi.png",
      count: 8,
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
    // Floating heads
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
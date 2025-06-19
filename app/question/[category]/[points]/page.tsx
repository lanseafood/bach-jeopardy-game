import QuestionClient from './question-client'

const questions: Record<string, Record<number, { question: string; answer: string | { type: string; content: string } }>> = {
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
      question: "What's one thing you hope never changes about your relationship?",
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
      question: "What is one hobby you'd like to learn together?",
      answer: {
        type: "video",
        content: "/videos/FUTURE_600.mp4",
      },
    },
    700: {
      question: "Who will be the stricter parent (if you want kids)?",
      answer: {
        type: "video",
        content: "/videos/FUTURE_700.mp4",
      },
    },
  },
}

export default function QuestionPage({ params }: { params: Promise<{ category: string; points: string }> }) {
  return <QuestionClient params={params} questions={questions} />
}

export function generateStaticParams() {
  const staticParams: { category: string; points: string }[] = []

  Object.keys(questions).forEach((category) => {
    Object.keys(questions[category]).forEach((points) => {
      staticParams.push({
        category: encodeURIComponent(category),
        points: points,
      })
    })
  })

  return staticParams
}
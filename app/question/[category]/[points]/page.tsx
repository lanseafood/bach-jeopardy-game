import QuestionClient from './question-client'

const questions: Record<string, Record<number, { question: string; answer: string | { type: string; content: string } }>> = {
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
        content: "/videos/MEETCUTE_100.mp4",
      },
    },
    200: {
      question: "If you had met in high school, would you have dated him or put him in the \"friend zone\"?",
      answer: {
        type: "video",
        content: "/videos/MEETCUTE_200.mp4",
      },
    },
    300: {
      question: "What was Jeannie's first impression of Jon?",
      answer: {
        type: "video",
        content: "/videos/MEETCUTE_300.mp4",
      },
    },
    400: {
      question: "What's his favorite way to show affection when no one is watching?",
      answer: {
        type: "video",
        content: "/videos/MEETCUTE_400.mp4",
      },
    },
    500: {
      question: "What's a challenge you both faced early on that made your relationship stronger?",
      answer: {
        type: "video",
        content: "/videos/MEETCUTE_500.mp4",
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
"use client"

import { useState, useEffect, useRef, use } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import FloatingImages from "@/components/floating-images"

const questions: Record<string, Record<number, { question: string; answer: string | { type: string; content: string } }>> = {
  "⏳ THE PAST": {
    100: {
      question: "What was your first impression of him, and was it accurate?",
      answer:
        "Sylvia and I first met purely in a work context. It was an intro meeting since I was the Eng Manager for the Messenger Growth team - the team where she was coming to do her second RPM rotation. \n\nI remember my first impression quite well. I remember being somewhere between incredulous and skeptical - since she was \"working\" remotely that week - either at EDC or ComiCon. She was curled up in some dark corner of the hotel, and I remember my initial thought was that there was no way that she was actually getting any real work done. Later on, I found out that I was indeed correct that this was a regular thing for her to work from a variety of destinations to squeeze more travel in while not dipping too much into time off. But I was incorrect in the assumption that she wasn't getting work done. I'm still not totally sure how she manages to get work done with all the travel she does.\n\nHer very first impression, though, I have less of a good sense. I have to imagine it was something like being direct and professional. I remember telling her about the engineers on the team and the engineer who was shifting into being the EM on that team. I do think that evolved over time, in a work context, where I came off as precise and exacting - having strong opinions - but also still supportive in trying to help people succeed and solve problems.",
    },
    200: {
      question: "What was the most embarrassing thing that happened on your first date?",
      answer: {
        type: "video",
        content: "/videos/past_2.mov",
      },
    },
    300: {
      question: 'When did you realize he was "the one"? (And how much wine was involved?)',
      answer: {
        type: "video",
        content: "/videos/past_3.mov",
      },
    },
    400: {
      question: "If he had to describe his flirting style back then, what would he say?",
      answer: {
        type: "video",
        content: "/videos/past_4.mov",
      },
    },
    500: {
      question: "What's one thing he did to try to impress you that totally failed?",
      answer:
        "So, the original intent wasn't to specifically impress Sylvia, but I still think this counts.\n\nThere was a Tuesday where we were on the Mission shuttle, heading to some bar as a group, with drinks in hand and just chatting as a group. We passed one of my favorite dive bars in the city - Clooney's.\n\nNow, for those who haven't been - Clooney's is a bonafide dive bar. Closes at 2am, opens back up at 6am for people who work the graveyard shift. They have a pool table and a jukebox. You saddle up to a horseshoe bar and the bartenders will play Liar's Dice with you. And on multiple occasions, I've seen the bartender need to break up a few fights. It also helped that I lived only a couple blocks away from it, so it was incredibly easy to get to, and for a while, it tended to be the 2nd location when we wanted to continue a Tuesday Night.\n\nSo I mention that this is my favorite dive bar, and Sylvia responds that if it's my favorite, then it must be good. So we set a plan to go to Clooney's at some point.\n\nThis is where our perspectives diverge.\n\nFor me - we set a plan for a different weekday and head to this dive bar. There wasn't romantic intent at the time - a first date at a dive bar would be quite a shot to take. It was a comfortable place to get simple drinks with activities like dice and pool to keep us busy as we chatted. I also wasn't a stranger to going to bars with people and just chatting.\n\nFor Sylvia - she turns up at the bar, and after 10-15 minutes asks me when other people were turning up. I told her I didn't invite anyone. She immediately became skeptical and I assume she thought I was trying to back-door a first date. So now she's stuck with some coworker that she wasn't interested in, at the time, at some divebar where she doesn't really drink (a fact I didn't realize at the time). So I'm certain she went from being excited for the night to starting to plan exit options. If I had been trying to impress her, this wasn't the way to do it.\n\nBut, there is charm to Clooney's. We got a few rounds. Played some pool and Liar's Dice. And just talked for a couple of hours. I think most importantly - we talked about things other than work. Which I later found out is a big thing for her - and she has typically found that not to be an attribute from most of the other engineers she knew.\n\nAnd so while it wasn't something I intentionally did to impress her, I think I obviously did something that failed spectacularly, but then somehow managed to salvage it by having the night be just getting to know each other on a personal level - without other ulterior motives.",
    },
    600: {
      question: 'If you had met in high school, would you have dated him or put him in the "friend zone"?',
      answer:
        "Good question.\n\nIf you ask her, she would probably say she would have dated me.\n\nIf you ask me? I absolutely would have dated her.\n\nIn fact, a joke I make is that she was:\n• Attractive.\n• Smart.\n• A cheerleader.\n• Also crazy nerdy—played video games, went to Comic-Con, had weird hobbies.\n\nHigh school me would have thought he hit the jackpot.\n\nBut her, on the other hand?\n\nI was still finding myself in high school.\n\nI was a very quiet kid up through middle school. Then I switched schools for high school and started trying on a new personality.\n\nI was much louder, a lot more boisterous—which isn't inherently bad. But it was also less refined than it is now.\n\nSylvia needs balance, and back then, I didn't have much of it.\n\nShe also likes people with a broad, diverse set of interests. That wasn't me back then. I was pretty nerdy, liked video games, and listened to some music—but I didn't have many other notable hobbies.\n\nSo, I think I'm lucky that we met when we did—because I had time to mature, even out, and grow into the person I am now.",
    },
    700: {
      question: 'Who said "I love you" first, and how long did it take?',
      answer: {
        type: "video",
        content: "/videos/past_7.mov",
      },
    },
    800: {
      question: "What's a challenge you both faced early on that made your relationship stronger?",
      answer: {
        type: "video",
        content: "/videos/past_8.mov",
      },
    },
  },
  "🎁 THE PRESENT": {
    100: {
      question: "What's his most endearing yet slightly annoying habit?",
      answer:
        "If the question were reversed, I'd have an immediate answer—Sylvia's most endearing yet slightly annoying habit is her need to talk during TV and movies.\n\nIt's a regular occurrence. She'll turn to me and either:\n• Express some theory she has,\n• Ask me what's going on,\n• And then, because we both missed something, say: \"Wait, wait—what? Now what's going on?\"\n\nDefinitely annoying. But also… kind of endearing.\n\nFor me, I think my most endearing yet slightly annoying habit is my commitment to going out for drinks on Tuesday nights.\n\nI think it's annoying because it takes away a night of the week for planning things together. There have been pop-ups, concerts, events that Sylvia wanted to go to that I had to miss because they were on a Tuesday.\n\nBut I also think she finds it endearing because part of what she loves about me is my loyalty to my friend group and my tenacity in keeping up these connections.\n\nIf you're looking for my habit that annoys her most - and she probably doesn't find it endearing - it's my challenge in keeping up with the rate of messages she sends me on Instagram. There's so much good content there - but I open it way less frequently than she does - so I end up missing things.",
    },
    200: {
      question: "Daily Double!!",
      answer: {
        type: "video",
        content: "/videos/ily.mov",
      },
    },
    300: {
      question: "What's the one chore he thinks he does well but really doesn't?",
      answer: {
        type: "video",
        content: "/videos/present_3.mov",
      },
    },
    400: {
      question: "What's his go-to excuse when he doesn't want to do something?",
      answer: {
        type: "video",
        content: "/videos/present_4.mov",
      },
    },
    500: {
      question: "What's the weirdest thing he's ever bought that made you question his decision-making skills?",
      answer:
        "In my office, there's a box.\n\nIt's from The Boring Company.\n\nIt's a flamethrower.\n\n(Well, really, it's a \"not a flamethrower.\")\n\nI think it baffles her even more because… I have never used it.\n\nIt just sits there, in the packaging, collecting dust.\n\nIt also doesn't help that it's an Elon Musk product - but in my defense, I got it when he was a weirdo who wanted to make the world generally better compared to whatever he's doing now…",
    },
    600: {
      question: "What's the one thing you do that instantly makes him laugh?",
      answer:
        "My goal with Sylvia is not just to make her laugh—my real goal is to get the scrunched-up face, the head tilt, or the eye roll when I tell a terrible joke.\n\nShe finds it endlessly amusing when I make awful, dad-level jokes.\n\nBut I think what really gets her to laugh is when I do something goofy.\n\nShe sees me as a very serious person, and I don't do goofy things that often. Over time, she's rubbed off on me, and I do more goofy things than I used to—which always gets a chuckle out of her.",
    },
    700: {
      question: "What's his favorite way to show affection when no one is watching?",
      answer: {
        type: "video",
        content: "/videos/present_7.mov",
      },
    },
    800: {
      question: "What's a personality trait of his that you admire the most?",
      answer: {
        type: "video",
        content: "/videos/present_8.mov",
      },
    },
  },
  "💫 THE FUTURE": {
    100: {
      question: "Who will be the first to break a household rule, and what will it be?",
      answer:
        "We're a pretty rules-light household.\n\nBut if I had to pick… I think we'd both break different rules:\n• Sylvia is the one who—when we're trying to eat healthy—is most likely to bring back sweets, pastries, and delicious things.\n• Me? I am the one most likely to finish them all.\n\nShe has this thing where she'll take a single spoonful of ice cream, then leave the pint in the freezer for weeks.\n\nMeanwhile, I will eventually notice we have ice cream in the freezer and proceed to eat all but a spoonful or two.\n\nI could just finish the pint and throw it away.\n\nBut I learned my lesson early in the pandemic, when we were sharing a dessert, and I took the last bite—Sylvia was furious.\n\nSo now I always leave one last bite for her… even if it means she gets mad at me for finishing the whole thing except a spoonful.",
    },
    200: {
      question: "What's one thing about your relationship that you hope never changes?",
      answer: {
        type: "video",
        content: "/videos/future_2.mov",
      },
    },
    300: {
      question: "What's the one parenting rule he will swear he'll follow… but totally won't?",
      answer:
        "Sylvia envisions talented children.\n\nShe will want them to:\n• Speak multiple languages\n• Learn to play an instrument\n• Have lots of extracurricular activities\n\nAnd I think all of those things are good. I fully agree with expanding our children's horizons.\n\nBut I also know that I am more likely to be the parent who gives them a pass if they want to skip a lesson or play hooky for a day.\n\nI feel like sometimes, kids need a little space to decompress, and I think I'll be more inclined to allow that than Sylvia will.",
    },
    400: {
      question: "If you could predict one ridiculous argument you'll have as a married couple, what will it be about?",
      answer: {
        type: "video",
        content: "/videos/future_4.mov",
      },
    },
    500: {
      question: "What's a tradition you can't wait to start together?",
      answer: {
        type: "video",
        content: "/videos/future_5.mov",
      },
    },
    600: {
      question: "If he planned a surprise date night for you, what would it involve?",
      answer: {
        type: "video",
        content: "/videos/future_6.mov",
      },
    },
    700: {
      question: "What's one thing you'll love about him even when you're both old and gray?",
      answer:
        "I don't know… maybe loyalty?\n\nNo—not my sense of humor.\n\nI think she'll love a lot of things about me when I'm old and gray.\n\nWe both feel very secure in our relationship.\n\nI think she will still love that we support each other, make each other feel secure, and prioritize each other's happiness.\n\nBut I'll probably come back to this one.",
    },
    800: {
      question: "What are you most looking forward to in your future together?",
      answer: {
        type: "video",
        content: "/videos/future_8.mov",
      },
    },
  },
}

export default function QuestionPage({ params }: { params: Promise<{ category: string; points: string }> }) {
  const [showAnswer, setShowAnswer] = useState(false)
  const { category, points } = use(params)
  const decodedCategory = decodeURIComponent(category)
  const questionKey = `${decodedCategory}-${points}`
  const videoRef = useRef<HTMLVideoElement>(null)

  // When the answer is shown, update localStorage and play video if it's a video answer
  useEffect(() => {
    if (showAnswer && typeof window !== "undefined") {
      // Get current shown answers from localStorage
      const storedShowAnswers = localStorage.getItem("showAnswers")
      let showAnswers: string[] = []

      if (storedShowAnswers) {
        try {
          showAnswers = JSON.parse(storedShowAnswers)
        } catch (e) {
          console.error("Error parsing showAnswers from localStorage", e)
        }
      }

      // Add this question to the shown answers if not already there
      if (!showAnswers.includes(questionKey)) {
        showAnswers.push(questionKey)

        // Save back to localStorage
        localStorage.setItem("showAnswers", JSON.stringify(showAnswers))
      }

      // Play video if it's a video answer
      const questionData = questions[decodedCategory]?.[Number.parseInt(points)]
      if (questionData && typeof questionData.answer !== "string" && videoRef.current) {
        videoRef.current.play()
      }
    }
  }, [showAnswer, questionKey, decodedCategory, points])

  // Add error handling to prevent crashes
  const questionData = questions[decodedCategory]?.[Number.parseInt(points)]

  // If question data is not found, show an error message
  if (!questionData) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-sunset-pink p-4">
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-4xl w-full text-center border-2 border-sunset-blue">
          <h1 className="text-3xl font-bold mb-8 text-sunset-blue">Question Not Found</h1>
          <p className="text-xl mb-8 text-sunset-charcoal">Sorry, we couldn't find this question.</p>
          <Link href="/game">
            <Button className="ml-8 mr-8 text-lg px-8 py-6 bg-sunset-lavender text-sunset-charcoal hover:bg-sunset-yellow">
              Return to Board
            </Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-sunset-pink to-[#FF6F91] p-4 relative">
      <FloatingImages background={true} />
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-4xl w-full text-center border-2 border-sunset-blue relative z-10">
        <h1 className="text-3xl font-bold mb-8 text-sunset-blue">
          {decodedCategory} - Question {points}
        </h1>
        <div className="text-2xl mb-8 text-sunset-charcoal">{questionData.question}</div>
        {!showAnswer && (
          <Button
            onClick={() => setShowAnswer(true)}
            className="ml-8 mr-8 mb-12 text-lg px-8 py-6 bg-[#FF6F91] text-white hover:bg-[#FF8FA3]"
          >
            Show Answer
          </Button>
        )}
        {showAnswer && (
          <div className="mb-12 bg-sunset-cream p-6 rounded-lg border-2 border-sunset-blue">
            {typeof questionData.answer === "string" ? (
              <div className="text-xl text-left whitespace-pre-line text-sunset-charcoal">{questionData.answer}</div>
            ) : (
              <div className="flex justify-center">
                <video 
                  ref={videoRef}
                  controls 
                  autoPlay 
                  className="w-full max-w-2xl border-2 border-sunset-blue rounded-lg"
                >
                  <source src={questionData.answer.content} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            )}
          </div>
        )}
        <Link href="/game">
          <Button className="ml-8 mr-8 text-lg px-8 py-6 bg-sunset-lavender text-sunset-charcoal hover:bg-sunset-yellow">
            Return to Board
          </Button>
        </Link>
      </div>
    </div>
  )
}


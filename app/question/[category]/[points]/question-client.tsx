"use client"

import { useState, useEffect, useRef, use } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import FloatingImages from "@/components/floating-images"

interface QuestionClientProps {
  params: Promise<{ category: string; points: string }>
  questions: Record<string, Record<number, { question: string; answer: string | { type: string; content: string } }>>
}

export default function QuestionClient({ params, questions }: QuestionClientProps) {
  const [showAnswer, setShowAnswer] = useState(false)
  const [isVideoLoading, setIsVideoLoading] = useState(true)
  const [isVideoReady, setIsVideoReady] = useState(false)
  const [videoError, setVideoError] = useState(false)
  const [retryCount, setRetryCount] = useState(0)
  const maxRetries = 3
  const { category, points } = use(params)
  const decodedCategory = decodeURIComponent(decodeURIComponent(category))
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
  }, [showAnswer, questionKey, decodedCategory, points, questions])

  // Add error handling to prevent crashes
  const questionData = questions[decodedCategory]?.[Number.parseInt(points)]

  // If question data is not found, show an error message
  if (!questionData) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-sunset-pink p-4">
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-4xl w-full text-center border-2 border-[#7C6E8D]">
          <h1 className="text-3xl font-bold mb-8 text-[#7C6E8D]">Question Not Found</h1>
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

  const handleVideoLoad = () => {
    setIsVideoLoading(false)
    setIsVideoReady(true)
  }

  const handleVideoError = () => {
    setVideoError(true)
    if (retryCount < maxRetries) {
      setRetryCount(prev => prev + 1)
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-[#FFD1DC] to-[#FFE5B4] p-4 relative">
      <FloatingImages background={true} />
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-4xl w-full text-center border-2 border-[#7C6E8D] relative z-10">
        <h1 className="text-3xl font-bold mb-8 text-[#7C6E8D]">
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
          <div className="mb-12 bg-sunset-cream p-6 rounded-lg border-2 border-[#7C6E8D]">
            {typeof questionData.answer === "string" ? (
              <div className="text-xl text-left whitespace-pre-line text-sunset-charcoal">{questionData.answer}</div>
            ) : (
              <div className="flex justify-center">
                <div className="relative">
                  {isVideoLoading && (
                    <div className="absolute inset-0 flex items-center justify-center bg-sunset-cream/80">
                      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#7C6E8D]"></div>
                    </div>
                  )}
                  {videoError && retryCount < maxRetries && (
                    <div className="absolute inset-0 flex items-center justify-center bg-sunset-cream/80">
                      <div className="text-center">
                        <p className="text-sunset-charcoal mb-4">Loading video... Attempt {retryCount + 1} of {maxRetries}</p>
                        <Button
                          onClick={() => {
                            setVideoError(false)
                            setIsVideoLoading(true)
                            setIsVideoReady(false)
                          }}
                          className="bg-sunset-lavender text-sunset-charcoal hover:bg-sunset-yellow"
                        >
                          Retry
                        </Button>
                      </div>
                    </div>
                  )}
                  <video 
                    ref={videoRef}
                    controls 
                    autoPlay 
                    className="w-full max-w-2xl border-2 border-[#7C6E8D] rounded-lg"
                    onLoadedData={handleVideoLoad}
                    onError={handleVideoError}
                    preload="metadata"
                  >
                    <source src={questionData.answer.content} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            )}
          </div>
        )}
        <Link href="/game?state=preserved">
          <Button className="ml-8 mr-8 text-lg px-8 py-6 bg-sunset-lavender text-sunset-charcoal hover:bg-sunset-yellow">
            Return to Board
          </Button>
        </Link>
      </div>
    </div>
  )
} 
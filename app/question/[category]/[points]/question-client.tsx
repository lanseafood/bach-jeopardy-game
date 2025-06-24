"use client"

import { useState, useEffect, useRef, use } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import FloatingImages from "@/components/floating-images"
import { gameConfig } from "@/lib/game-config"

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

  // Set CSS variables from game-config
  useEffect(() => {
    const root = document.documentElement
    
    // Title and text colors
    root.style.setProperty('--question-text-color', gameConfig.colors.questionText)
    root.style.setProperty('--category-title-color', gameConfig.colors.categoryTitle)
    
    // Button colors
    root.style.setProperty('--primary-bg', gameConfig.colors.primaryButton.background)
    root.style.setProperty('--primary-text', gameConfig.colors.primaryButton.text)
    root.style.setProperty('--primary-hover', gameConfig.colors.primaryButton.hover)
    
    root.style.setProperty('--secondary-bg', gameConfig.colors.secondaryButton.background)
    root.style.setProperty('--secondary-text', gameConfig.colors.secondaryButton.text)
    root.style.setProperty('--secondary-hover', gameConfig.colors.secondaryButton.hover)
  }, [])

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

      // Play video if it's a video answer with error handling
      const questionData = questions[decodedCategory]?.[Number.parseInt(points)]
      if (questionData && typeof questionData.answer !== "string" && videoRef.current) {
        const playPromise = videoRef.current.play()
        if (playPromise !== undefined) {
          playPromise.catch((error) => {
            // Ignore play interruption errors when navigating away
            if (error.name !== 'AbortError') {
              console.error('Video play error:', error)
            }
          })
        }
      }
    }
  }, [showAnswer, questionKey, decodedCategory, points, questions])

  // Add error handling to prevent crashes
  const questionData = questions[decodedCategory]?.[Number.parseInt(points)]

  const questionPageStyle = {
    background: `linear-gradient(to bottom, ${gameConfig.colors.questionPage.from}, ${gameConfig.colors.questionPage.to})`
  }

  const primaryButtonStyle = {
    backgroundColor: gameConfig.colors.primaryButton.background,
    color: gameConfig.colors.primaryButton.text,
  }

  const secondaryButtonStyle = {
    backgroundColor: gameConfig.colors.secondaryButton.background,
    color: gameConfig.colors.secondaryButton.text,
  }

  // If question data is not found, show an error message
  if (!questionData) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-4" style={questionPageStyle}>
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-4xl w-full text-center" style={{ border: `2px solid ${gameConfig.colors.border}` }}>
          <h1 className={`text-3xl font-bold mb-8 category-title ${gameConfig.fonts.category.family}`}>Question Not Found</h1>
          <p className={`text-xl mb-8 question-text ${gameConfig.fonts.question.family}`}>Sorry, we couldn't find this question.</p>
          <div className="mt-8">
            <Link href="/game">
              <Button 
                className={`${gameConfig.fonts.button.size} px-8 py-6 ${gameConfig.fonts.button.family} font-semibold rounded-lg hover:scale-105 hover:shadow-lg transition-all duration-300`}
                style={secondaryButtonStyle}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = gameConfig.colors.secondaryButton.hover
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = gameConfig.colors.secondaryButton.background
                }}
              >
                Return to Board
              </Button>
            </Link>
          </div>
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

  // Cleanup function to handle video when component unmounts
  useEffect(() => {
    return () => {
      if (videoRef.current) {
        videoRef.current.pause()
        videoRef.current.currentTime = 0
      }
    }
  }, [])

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 relative" style={questionPageStyle}>
      <FloatingImages background={true} showFloatingObjects={gameConfig.settings.showFloatingObjects} showFloatingHeads={gameConfig.settings.showFloatingHeads} />
      <div className="bg-white rounded-lg shadow-lg p-12 max-w-4xl w-full text-center relative z-10" style={{ border: `2px solid ${gameConfig.colors.border}` }}>
        <h1 className={`text-3xl font-bold mb-8 category-title ${gameConfig.fonts.category.family}`}>
          {decodedCategory} - Question {points}
        </h1>
        
        <div className={`${gameConfig.fonts.question.size} mb-12 question-text ${gameConfig.fonts.question.family}`}>
          {questionData.question}
        </div>
        
        {!showAnswer && (
          <div className="mb-16 flex justify-center gap-8">
            <Button
              onClick={() => setShowAnswer(true)}
              className={`${gameConfig.fonts.button.size} px-10 py-6 ${gameConfig.fonts.button.family} font-semibold rounded-lg hover:scale-105 hover:shadow-lg transition-all duration-300`}
              style={primaryButtonStyle}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = gameConfig.colors.primaryButton.hover
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = gameConfig.colors.primaryButton.background
              }}
            >
              Show Answer
            </Button>
            <Link href="/game?state=preserved">
              <Button 
                className={`${gameConfig.fonts.button.size} px-10 py-6 ${gameConfig.fonts.button.family} font-semibold rounded-lg hover:scale-105 hover:shadow-lg transition-all duration-300`}
                style={secondaryButtonStyle}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = gameConfig.colors.secondaryButton.hover
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = gameConfig.colors.secondaryButton.background
                }}
              >
                Return to Board
              </Button>
            </Link>
          </div>
        )}
        
        {showAnswer && (
          <div className="mb-16 answer-box p-8">
            {typeof questionData.answer === "string" ? (
              <div className={`text-xl text-left whitespace-pre-line question-text ${gameConfig.fonts.question.family}`}>{questionData.answer}</div>
            ) : (
              <div className="flex justify-center">
                <div className="relative">
                  {isVideoLoading && (
                    <div className="absolute inset-0 flex items-center justify-center bg-white/80 rounded-lg">
                      <div className="animate-spin rounded-full h-12 w-12 border-b-2" style={{ borderColor: gameConfig.colors.border }}></div>
                    </div>
                  )}
                  {videoError && retryCount < maxRetries && (
                    <div className="absolute inset-0 flex items-center justify-center bg-white/80 rounded-lg">
                      <div className="text-center">
                        <p className={`question-text mb-6 ${gameConfig.fonts.question.family}`}>Loading video... Attempt {retryCount + 1} of {maxRetries}</p>
                        <Button
                          onClick={() => {
                            setVideoError(false)
                            setIsVideoLoading(true)
                            setIsVideoReady(false)
                          }}
                          className={`${gameConfig.fonts.button.family} px-6 py-3 rounded-lg hover:scale-105 transition-all duration-300`}
                          style={secondaryButtonStyle}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = gameConfig.colors.secondaryButton.hover
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = gameConfig.colors.secondaryButton.background
                          }}
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
                    className="w-full max-w-2xl rounded-lg"
                    style={{ border: `2px solid ${gameConfig.colors.border}` }}
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
        
        {showAnswer && (
          <div className="mt-8 flex justify-center">
            <Link href="/game?state=preserved">
              <Button 
                className={`${gameConfig.fonts.button.size} px-10 py-6 ${gameConfig.fonts.button.family} font-semibold rounded-lg hover:scale-105 hover:shadow-lg transition-all duration-300`}
                style={secondaryButtonStyle}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = gameConfig.colors.secondaryButton.hover
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = gameConfig.colors.secondaryButton.background
                }}
              >
                Return to Board
              </Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  )
} 
"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import FloatingImages from "@/components/floating-images"
import { useSearchParams } from "next/navigation"
import { gameConfig, getCategoryNames, getPointValues } from "@/lib/game-config"

export default function JeopardyBoard() {
  const [showAnswers, setShowAnswers] = useState<Set<string>>(new Set())
  const [isHydrated, setIsHydrated] = useState(false)
  const searchParams = useSearchParams()
  const categories = getCategoryNames()
  const pointValues = getPointValues()

  // Mark as hydrated after first render
  useEffect(() => {
    setIsHydrated(true)
  }, [])

  // Load answered questions from localStorage on component mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Only reset on fresh visits (no search params)
      const isFreshVisit = !searchParams.toString()
      
      if (isFreshVisit) {
        // Clear localStorage for fresh visits
        localStorage.removeItem("showAnswers")
        setShowAnswers(new Set())
      } else {
        // Load state for normal navigation
        const storedShowAnswers = localStorage.getItem("showAnswers")
        if (storedShowAnswers) {
          try {
            setShowAnswers(new Set(JSON.parse(storedShowAnswers)))
          } catch (e) {
            console.error("Error parsing showAnswers from localStorage", e)
          }
        }
      }
    }
  }, [searchParams])

  return (
    <div className={`min-h-screen bg-gradient-to-b ${gameConfig.colors.gamePage} text-sunset-charcoal`}>
      {/* Floating Images */}
      <FloatingImages showFloatingObjects={gameConfig.settings.showFloatingObjects} showFloatingHeads={gameConfig.settings.showFloatingHeads} />

      <div className="container mx-auto flex-1 flex flex-col">
        <div className="flex justify-between items-center mb-8 mt-12 px-6">
          <Link href="/?state=preserved">
            <Button 
              className={`${gameConfig.fonts.button.size} ${gameConfig.fonts.button.family} ${gameConfig.colors.secondaryButton.background} ${gameConfig.colors.secondaryButton.text} ${gameConfig.colors.secondaryButton.hover}`}
            >
              Back to Home
            </Button>
          </Link>
          <h1 className={`${gameConfig.fonts.title.size} ${gameConfig.fonts.title.family} text-center ${gameConfig.colors.title} pt-4`}>{gameConfig.title}</h1>
          <div className="w-[100px]"></div> {/* Spacer for alignment */}
        </div>
        <div className="px-6 flex-1">
          <div className="grid grid-cols-4 gap-4 md:gap-6 lg:gap-8 w-full h-full">
            {categories.map((category) => (
              <div key={category} className="text-center flex flex-col h-full">
                <h2 className={`${gameConfig.fonts.category.size} ${gameConfig.fonts.category.family} font-semibold mb-4 md:mb-6 ${gameConfig.colors.categoryTitle} bg-white/30 py-2 px-4 rounded-lg shadow-sm`}>{category}</h2>
                {pointValues.map((points) => {
                  const questionKey = `${category}-${points}`
                  const isAnswered = isHydrated && showAnswers.has(questionKey)

                  return (
                    <Link
                      href={`/question/${encodeURIComponent(category)}/${points}`}
                      key={questionKey}
                      className="block mb-2"
                    >
                      {isAnswered ? (
                        <div className={`w-full h-8 md:h-10 lg:h-12 flex items-center justify-center bg-sunset-lightcream rounded-md border-2 ${gameConfig.colors.border} shadow-sm transition-all duration-500 animate-fade-in-scale`}>
                          <div className="flex items-center gap-1">
                            {points.toString().split('').map((digit, index) => (
                              digit === '0' ? (
                                <Image
                                  key={index}
                                  src="/corgi.png"
                                  alt="0"
                                  width={20}
                                  height={20}
                                  className="object-contain animate-bounce-subtle md:w-6 md:h-6 lg:w-8 lg:h-8"
                                  priority
                                />
                              ) : (
                                <span key={index} className={`${gameConfig.fonts.button.size} ${gameConfig.fonts.button.family} font-semibold ${gameConfig.colors.questionText}`}>
                                  {digit}
                                </span>
                              )
                            ))}
                          </div>
                        </div>
                      ) : (
                        <Button
                          className={`w-full h-8 md:h-10 lg:h-12 border-2 ${gameConfig.colors.border} ${gameConfig.colors.secondaryButton.background} ${gameConfig.colors.secondaryButton.text} ${gameConfig.colors.secondaryButton.hover} ${gameConfig.fonts.button.size} ${gameConfig.fonts.button.family} font-semibold transition-all duration-200 hover:scale-105 hover:shadow-md`}
                          variant="outline"
                        >
                          {points}
                        </Button>
                      )}
                    </Link>
                  )
                })}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
} 
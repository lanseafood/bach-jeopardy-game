"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import FloatingImages from "@/components/floating-images"
import { useSearchParams } from "next/navigation"
import { gameConfig, getCategoryNames, getPointValues } from "@/lib/game-config"
import { tailwindColorMap } from "@/lib/tailwind-colors"

export default function JeopardyBoard() {
  const [showAnswers, setShowAnswers] = useState<Set<string>>(new Set())
  const [isHydrated, setIsHydrated] = useState(false)
  const searchParams = useSearchParams()
  const categories = getCategoryNames()
  const pointValues = getPointValues()

  // Set CSS variables from game-config
  useEffect(() => {
    const root = document.documentElement
    
    // Title and text colors
    root.style.setProperty('--landing-title-color', gameConfig.landingPage.titleColor)
    root.style.setProperty('--game-title-color', gameConfig.colors.gameTitle)
    root.style.setProperty('--category-title-color', gameConfig.colors.categoryTitle)
    root.style.setProperty('--question-text-color', gameConfig.colors.questionText)
    
    // Button colors
    root.style.setProperty('--points-bg', gameConfig.colors.pointsButton.background)
    root.style.setProperty('--points-text', gameConfig.colors.pointsButton.text)
    root.style.setProperty('--points-border', gameConfig.colors.pointsButton.border)
    root.style.setProperty('--points-hover', gameConfig.colors.pointsButton.hover)
    
    root.style.setProperty('--secondary-bg', gameConfig.colors.secondaryButton.background)
    root.style.setProperty('--secondary-text', gameConfig.colors.secondaryButton.text)
    root.style.setProperty('--secondary-hover', gameConfig.colors.secondaryButton.hover)
    
    root.style.setProperty('--primary-bg', gameConfig.colors.primaryButton.background)
    root.style.setProperty('--primary-text', gameConfig.colors.primaryButton.text)
    root.style.setProperty('--primary-hover', gameConfig.colors.primaryButton.hover)
  }, [])

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

  // Resolve color names to hex codes
  const fromColor = tailwindColorMap[gameConfig.colors.gamePage.from] || gameConfig.colors.gamePage.from
  const toColor = tailwindColorMap[gameConfig.colors.gamePage.to] || gameConfig.colors.gamePage.to

  const gamePageStyle = {
    background: `linear-gradient(to bottom, ${fromColor}, ${toColor})`
  }

  const pointsButtonStyle = {
    backgroundColor: gameConfig.colors.pointsButton.background,
    color: gameConfig.colors.pointsButton.text,
    border: `2px solid ${gameConfig.colors.pointsButton.border}`,
    borderRadius: '0.375rem',
    transition: 'all 0.2s ease-in-out',
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '2rem',
    fontSize: '1.125rem',
    fontWeight: '600',
  }

  const answeredButtonStyle = {
    backgroundColor: gameConfig.colors.secondaryButton.background,
    color: gameConfig.colors.secondaryButton.text,
    border: `2px solid ${gameConfig.colors.pointsButton.border}`,
    borderRadius: '0.375rem',
    transition: 'all 0.2s ease-in-out',
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '2rem',
    fontSize: '1.125rem',
    fontWeight: '600',
    opacity: 0.8,
  }

  const secondaryButtonStyle = {
    backgroundColor: gameConfig.colors.secondaryButton.background,
    color: gameConfig.colors.secondaryButton.text,
  }

  const gameTitleStyle = {
    fontSize: gameConfig.fonts.mainTitle.size,
    fontFamily: '"ClassyVogue", sans-serif',
  }

  return (
    <div className="min-h-screen" style={gamePageStyle}>
      {/* Floating Images */}
      <FloatingImages 
        showFloatingObjects={gameConfig.settings.showFloatingObjects} 
        showFloatingHeads={gameConfig.settings.showFloatingHeads} 
      />

      <div className="container mx-auto flex-1 flex flex-col">
        <div className="flex justify-between items-center mb-8 mt-12 px-6">
          <Link href="/?state=preserved">
            <Button 
              className={`${gameConfig.fonts.button.size} ${gameConfig.fonts.button.family} px-6 py-3 rounded-lg font-semibold hover:scale-105 hover:shadow-lg transition-all duration-300`}
              style={secondaryButtonStyle}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = gameConfig.colors.secondaryButton.hover
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = gameConfig.colors.secondaryButton.background
              }}
            >
              Back to Home
            </Button>
          </Link>
          <h1 className="text-center game-title pt-4" style={gameTitleStyle}>
            {gameConfig.title}
          </h1>
          <div className="w-[100px]"></div> {/* Spacer for alignment */}
        </div>
        
        <div className="px-6 flex-1">
          <div className="grid grid-cols-4 gap-4 md:gap-6 lg:gap-8 w-full h-full">
            {categories.map((category) => (
              <div key={category} className="text-center flex flex-col h-full">
                <h2 className={`${gameConfig.fonts.category.size} ${gameConfig.fonts.category.family} font-semibold mb-4 md:mb-6 category-title bg-white/30 py-2 px-4 rounded-lg shadow-sm`}>
                  {category}
                </h2>
                {pointValues.map((points) => {
                  const questionKey = `${category}-${points}`
                  const isAnswered = isHydrated && showAnswers.has(questionKey)

                  return (
                    <div key={questionKey} className="mb-2">
                      {isAnswered ? (
                        <Link 
                          href={`/question/${encodeURIComponent(category)}/${points}`} 
                          style={answeredButtonStyle}
                          className="md:h-10 lg:h-12 md:text-xl lg:text-2xl relative"
                          onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = gameConfig.colors.secondaryButton.hover
                            e.currentTarget.style.transform = 'scale(1.02)'
                            e.currentTarget.style.opacity = '1'
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = gameConfig.colors.secondaryButton.background
                            e.currentTarget.style.transform = 'scale(1)'
                            e.currentTarget.style.opacity = '0.8'
                          }}
                        >
                          <div className="flex items-center gap-1">
                            {points.toString().split('').map((digit, index) => (
                              digit === '0' ? (
                                <Image
                                  key={index}
                                  src="/corgi.png"
                                  alt="0"
                                  width={16}
                                  height={16}
                                  className="object-contain animate-bounce-subtle md:w-5 md:h-5 lg:w-6 lg:h-6"
                                  priority
                                />
                              ) : (
                                <span key={index} className="text-sm md:text-base lg:text-lg font-semibold">
                                  {digit}
                                </span>
                              )
                            ))}
                          </div>
                        </Link>
                      ) : (
                        <Link 
                          href={`/question/${encodeURIComponent(category)}/${points}`} 
                          style={pointsButtonStyle}
                          className="md:h-10 lg:h-12 md:text-xl lg:text-2xl"
                          onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = gameConfig.colors.pointsButton.hover
                            e.currentTarget.style.transform = 'scale(1.05)'
                            e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)'
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = gameConfig.colors.pointsButton.background
                            e.currentTarget.style.transform = 'scale(1)'
                            e.currentTarget.style.boxShadow = 'none'
                          }}
                        >
                          {points}
                        </Link>
                      )}
                    </div>
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
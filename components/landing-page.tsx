"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import FloatingImages from "@/components/floating-images"
import StaticTwinkles from "@/components/static-twinkles"
import Fireworks from "@/components/fireworks"
import { FallingGreenLeaves } from "@/components/falling-green-leaves"
import CherryBlossoms from "@/components/cherry-blossoms"
import ShootingStar from "@/components/shooting-star"
import { useSearchParams } from "next/navigation"
import { gameConfig } from "@/lib/game-config"
import { tailwindColorMap } from "@/lib/tailwind-colors"
import { useEffect } from "react"

export default function LandingPage() {
  const searchParams = useSearchParams()
  const state = searchParams.get('state')
  const gameLink = state === 'preserved' ? '/game?state=preserved' : '/game'

  // Set CSS variables from game-config
  useEffect(() => {
    const root = document.documentElement
    
    // Title and text colors
    root.style.setProperty('--landing-title-color', gameConfig.landingPage.titleColor)
    
    // Button colors
    root.style.setProperty('--secondary-bg', gameConfig.colors.secondaryButton.background)
    root.style.setProperty('--secondary-text', gameConfig.colors.secondaryButton.text)
    root.style.setProperty('--secondary-hover', gameConfig.colors.secondaryButton.hover)
  }, [])

  // Resolve color names to hex codes
  const fromColor = tailwindColorMap[gameConfig.landingPage.backgroundGradient.from] || gameConfig.landingPage.backgroundGradient.from
  const viaColor = tailwindColorMap[gameConfig.landingPage.backgroundGradient.via] || gameConfig.landingPage.backgroundGradient.via
  const toColor = tailwindColorMap[gameConfig.landingPage.backgroundGradient.to] || gameConfig.landingPage.backgroundGradient.to

  const landingPageStyle = {
    background: `linear-gradient(to bottom, ${fromColor} 0%, ${viaColor} 50%, ${toColor} 100%)`
  }

  const titleStyle = {
    color: gameConfig.landingPage.titleColor,
    fontSize: gameConfig.fonts.mainTitle.size,
    fontFamily: '"ClassyVogue", sans-serif',
    lineHeight: 1,
  }

  const secondaryButtonStyle = {
    backgroundColor: gameConfig.colors.secondaryButton.background,
    color: gameConfig.colors.secondaryButton.text,
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative" style={landingPageStyle}>
      <FloatingImages showFloatingHeads={false} showFloatingObjects={gameConfig.settings.showFloatingObjects} />
      <StaticTwinkles />
      <Fireworks />
      <FallingGreenLeaves />

      {/* <CherryBlossoms /> */}
      {gameConfig.settings.showCherryBlossoms && <CherryBlossoms />}
      {gameConfig.settings.showShootingStars && <ShootingStar />}
      
      {/* Landing page image - positioned independently */}
      <div className="absolute inset-0 flex items-center justify-center z-0">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/30 rounded-full"></div>
          <Image
            src={gameConfig.landingPage.image.src}
            alt={gameConfig.landingPage.image.alt}
            width={gameConfig.landingPage.image.width}
            height={gameConfig.landingPage.image.height}
            className="opacity-100 object-contain"
            priority
            unoptimized
          />
        </div>
      </div>

      {/* Title and Button - positioned independently */}
      <div className="text-center z-10 relative">
        <h1 
          className="drop-shadow-[0_5px_5px_rgba(0,0,0,0.2)] mb-8"
          style={titleStyle}
        >
          {gameConfig.title}
        </h1>
        <Link href={gameLink}>
          <Button 
            className={`${gameConfig.fonts.button.size} px-12 py-6 ${gameConfig.fonts.button.family} font-semibold transition-all duration-300 hover:scale-110 hover:shadow-lg rounded-lg`}
            style={secondaryButtonStyle}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = gameConfig.colors.secondaryButton.hover
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = gameConfig.colors.secondaryButton.background
            }}
          >
            Let's Play!
          </Button>
        </Link>
      </div>
    </div>
  )
}


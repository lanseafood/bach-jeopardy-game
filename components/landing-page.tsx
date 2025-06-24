"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import FloatingImages from "@/components/floating-images"
import StaticTwinkles from "@/components/static-twinkles"
import Fireworks from "@/components/fireworks"
import CherryBlossoms from "@/components/cherry-blossoms"
import ShootingStar from "@/components/shooting-star"
import { useSearchParams } from "next/navigation"
import { gameConfig } from "@/lib/game-config"

export default function LandingPage() {
  const searchParams = useSearchParams()
  const state = searchParams.get('state')
  const gameLink = state === 'preserved' ? '/game?state=preserved' : '/game'

  return (
    <div className={`min-h-screen bg-gradient-to-b ${gameConfig.colors.landingPage} text-sunset-charcoal flex flex-col items-center justify-center relative`}>
      <FloatingImages showFloatingHeads={false} showFloatingObjects={gameConfig.settings.showFloatingObjects} />
      <StaticTwinkles />
      <Fireworks />
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
        <h1 className={`${gameConfig.fonts.title.size} ${gameConfig.fonts.title.family} ${gameConfig.landingPage.titleColor} drop-shadow-[0_5px_5px_rgba(0,0,0,0.2)] mb-8`}>
          {gameConfig.title}
        </h1>
        <Link href={gameLink}>
          <Button 
            className={`${gameConfig.fonts.button.size} px-12 py-6 ${gameConfig.colors.secondaryButton.background} ${gameConfig.colors.secondaryButton.text} ${gameConfig.colors.secondaryButton.hover} ${gameConfig.fonts.button.family} transition-all duration-300 hover:scale-110 hover:shadow-lg`}
          >
            Let's Play!
          </Button>
        </Link>
      </div>
    </div>
  )
}


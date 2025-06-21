"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import FloatingImages from "@/components/floating-images"
import StaticTwinkles from "@/components/static-twinkles"
import Fireworks from "@/components/fireworks"
import { FallingGreenLeaves } from "@/components/falling-green-leaves"
import { useSearchParams } from "next/navigation"

export default function LandingPage() {
  const searchParams = useSearchParams()
  const state = searchParams.get('state')
  const gameLink = state === 'preserved' ? '/game?state=preserved' : '/game'

  return (
    <div className="min-h-screen bg-gradient-to-b from-sunset-orange via-sunset-cream to-sunset-green text-sunset-charcoal flex flex-col items-center justify-center relative">
      <FloatingImages showFloatingHeads={false} />
      <StaticTwinkles />
      <Fireworks />
      <FallingGreenLeaves />
      
      {/* Vancouver Image - positioned independently */}
      <div className="absolute inset-0 flex items-center justify-center z-0">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/30 rounded-full"></div>
          <Image
            src="/vancouver.png"
            alt="Vancouver"
            width={850}
            height={680}
            className="opacity-100 object-contain"
            priority
            unoptimized
          />
        </div>
      </div>

      {/* Title and Button - positioned independently */}
      <div className="text-center z-10 relative">
        <h1 className="text-[6rem] font-classyvogue text-[#F8F2FF] drop-shadow-[0_5px_5px_rgba(0,0,0,0.2)] mb-8">
          JeaJon Jeopardy
        </h1>
        <Link href={gameLink}>
          <Button 
            className="text-2xl px-12 py-6 bg-sunset-cream text-sunset-charcoal hover:bg-sunset-yellow transition-all duration-300 hover:scale-110 hover:shadow-lg"
          >
            Let's Play!
          </Button>
        </Link>
      </div>
    </div>
  )
}


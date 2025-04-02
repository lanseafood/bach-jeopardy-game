"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import FloatingImages from "@/components/floating-images"
import ShootingStar from "@/components/shooting-star"
import StaticTwinkles from "@/components/static-twinkles"
import Fireworks from "@/components/fireworks"
import { useSearchParams } from "next/navigation"

export default function LandingPage() {
  const searchParams = useSearchParams()
  const state = searchParams.get('state')
  const gameLink = state === 'preserved' ? '/game?state=preserved' : '/game'

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-300 via-blue-400 to-indigo-600 text-sunset-charcoal flex flex-col items-center justify-center">
      <FloatingImages showFloatingHeads={false} />
      <StaticTwinkles />
      <Fireworks />
      
      <div className="text-center z-10 relative">
        <ShootingStar />
        <div className="absolute inset-0 flex items-center justify-center -z-10 -mt-[20%]">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/30 rounded-full"></div>
            <Image
              src="/dc.jpeg"
              alt="Disney Castle"
              width={800}
              height={600}
              className="opacity-100 object-contain"
              priority
              unoptimized
            />
          </div>
        </div>
        <h1 className="text-[12rem] font-waltograph text-transparent bg-clip-text bg-gradient-to-b from-gray-50 via-gray-400 to-gray-900 animate-fade-in mt-[100px] drop-shadow-[0_5px_5px_rgba(0,0,0,0.2)] [text-shadow:_0_5px_0_rgb(0_0_0_/_40%)]">
          Sylaron Jeopardy
        </h1>
        <Link href={gameLink}>
          <Button 
            className="text-2xl px-12 py-6 bg-sunset-lavender text-sunset-charcoal hover:bg-sunset-yellow transition-all duration-300 hover:scale-110 hover:shadow-lg"
          >
            Let's Play!
          </Button>
        </Link>
      </div>
    </div>
  )
}


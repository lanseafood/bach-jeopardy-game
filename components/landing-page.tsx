"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import FloatingImages from "@/components/floating-images"
import ShootingStar from "@/components/shooting-star"
import StaticTwinkles from "@/components/static-twinkles"
import Fireworks from "@/components/fireworks"
import CherryBlossoms from "@/components/cherry-blossoms"
import { useSearchParams } from "next/navigation"

export default function LandingPage() {
  const searchParams = useSearchParams()
  const state = searchParams.get('state')
  const gameLink = state === 'preserved' ? '/game?state=preserved' : '/game'

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FFD1DC] via-[#FFE5B4] to-[#F8F4F9] text-sunset-charcoal flex flex-col items-center justify-center">
      <FloatingImages showFloatingHeads={false} />
      <StaticTwinkles />
      <Fireworks />
      <CherryBlossoms />
      
      <div className="text-center z-10 relative">
        <ShootingStar />
        <div className="absolute inset-0 flex items-center justify-center -z-10 -mt-[20%]">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/30 rounded-full"></div>
            <Image
              src="/eiffletower.png"
              alt="Eiffle Tower"
              width={1000}
              height={800}
              className="opacity-100 object-contain"
              priority
              unoptimized
            />
          </div>
        </div>
        <h1 className="text-[7rem] font-classyvogue text-[#F8F2FF] mt-[100px] drop-shadow-[0_5px_5px_rgba(0,0,0,0.2)] ">
          Ayawin Jeopardy
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


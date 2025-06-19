"use client"

import { useEffect, useState } from "react"

interface CherryBlossom {
  id: number
  x: number
  y: number
  size: number
  rotation: number
  delay: number
  duration: number
  opacity: number
  startTime: number
}

export default function CherryBlossoms() {
  const [blossoms, setBlossoms] = useState<CherryBlossom[]>([])
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return

    // Create initial cherry blossoms
    const initialBlossoms: CherryBlossom[] = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * 100, // Random horizontal position (0-100%)
      y: Math.random() * 100, // Random vertical position (0-100%)
      size: Math.random() * 15 + 8, // Random size between 8-23px
      rotation: Math.random() * 360, // Random rotation
      delay: Math.random() * 5, // Random delay for staggered animation
      duration: Math.random() * 15 + 10, // Random duration between 10-25s
      opacity: Math.random() * 0.6 + 0.4, // Random opacity between 0.4-1.0
      startTime: Date.now(),
    }))

    setBlossoms(initialBlossoms)

    // Add new blossoms periodically
    const interval = setInterval(() => {
      setBlossoms(prev => {
        const newBlossom: CherryBlossom = {
          id: Date.now() + Math.random(),
          x: Math.random() * 100,
          y: -5, // Start above the viewport
          size: Math.random() * 15 + 8,
          rotation: Math.random() * 360,
          delay: 0,
          duration: Math.random() * 15 + 10,
          opacity: Math.random() * 0.6 + 0.4,
          startTime: Date.now(),
        }
        return [...prev.slice(-20), newBlossom] // Keep max 20 petals
      })
    }, 1500) // Add new petal every 1.5 seconds

    // Cleanup old blossoms periodically
    const cleanupInterval = setInterval(() => {
      setBlossoms(prev => {
        const now = Date.now()
        return prev.filter(blossom => {
          const elapsed = now - blossom.startTime
          return elapsed < (blossom.duration * 1000) + 5000 // Keep blossoms for duration + 5 seconds buffer
        })
      })
    }, 5000) // Clean up every 5 seconds

    return () => {
      clearInterval(interval)
      clearInterval(cleanupInterval)
    }
  }, [mounted])

  // Don't render anything until mounted to prevent hydration mismatch
  if (!mounted) {
    return null
  }

  return (
    <div className="fixed inset-0 pointer-events-none z-20 overflow-hidden">
      {blossoms.map((blossom) => (
        <div
          key={blossom.id}
          className="absolute"
          style={{
            left: `${blossom.x}%`,
            top: `${blossom.y}%`,
            width: `${blossom.size}px`,
            height: `${blossom.size * 1.5}px`, // Make petals slightly taller than wide
            transform: `rotate(${blossom.rotation}deg)`,
            opacity: blossom.opacity,
            animation: `float ${blossom.duration}s linear ${blossom.delay}s infinite`,
          }}
        >
          {/* Single cherry blossom petal */}
          <div className="w-full h-full relative">
            {/* Main petal shape - teardrop/oval shape */}
            <div 
              className="absolute inset-0 bg-gradient-to-br from-pink-200 via-pink-100 to-white"
              style={{
                borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%', // Creates a teardrop/oval shape
                transform: 'rotate(45deg)', // Rotate to make it look more natural
              }}
            ></div>
            
            {/* Petal vein detail */}
            <div 
              className="absolute inset-0 bg-gradient-to-b from-pink-300/30 to-transparent"
              style={{
                borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%',
                transform: 'rotate(45deg) scale(0.7)',
                top: '15%',
                left: '15%',
              }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  )
} 
"use client"

import { useEffect, useState } from "react"

interface Firework {
  id: number
  x: number
  y: number
  particles: Array<{
    angle: number
    distance: number
    color: string
    size: number
  }>
}

export default function Fireworks() {
  const [fireworks, setFireworks] = useState<Firework[]>([])

  useEffect(() => {
    const colors = [
      "#FF6F4F", // sunset-orange
      "#FDB813", // sunset-yellow
      "#FFBA8B", // sunset-pink
      "#FF69B4", // Pink (keeping for variety)
      "#FFA500", // Orange (keeping for variety)
      "#FFD700", // Gold (keeping for variety)
      "#FFFFFF", // White (keeping for variety)
    ]

    const createFirework = () => {
      const x = Math.random() * window.innerWidth
      const y = Math.random() * (window.innerHeight * 0.6) // Only in top 60% of screen
      const particleCount = 36 // Number of particles per firework
      
      const particles = Array.from({ length: particleCount }, (_, i) => ({
        angle: (i * 360) / particleCount,
        distance: 100 + Math.random() * 50, // Random distance between 100-150px
        color: colors[Math.floor(Math.random() * colors.length)],
        size: 3 + Math.random() * 3 // Random size between 3-5px
      }))

      return {
        id: Date.now(),
        x,
        y,
        particles
      }
    }

    const interval = setInterval(() => {
      const newFireworks = Array.from(
        { length: 2 + Math.floor(Math.random() * 2) }, // 2-3 fireworks
        () => createFirework()
      )
      setFireworks(newFireworks)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {fireworks.map((firework) => (
        <div key={firework.id} className="absolute" style={{ left: firework.x, top: firework.y }}>
          {firework.particles.map((particle, i) => {
            const radian = (particle.angle * Math.PI) / 180
            const x = Math.cos(radian) * particle.distance
            const y = Math.sin(radian) * particle.distance

            return (
              <div
                key={i}
                className="absolute rounded-full animate-firework"
                style={{
                  backgroundColor: particle.color,
                  "--x": `${x}px`,
                  "--y": `${y}px`,
                  width: `${particle.size}px`,
                  height: `${particle.size}px`,
                  boxShadow: `0 0 8px ${particle.color}40, 0 0 16px ${particle.color}20`,
                } as React.CSSProperties}
              />
            )
          })}
        </div>
      ))}
    </div>
  )
} 
'use client'

import React, { useState, useEffect } from 'react'
import { LeafIcon } from './leaf-icon'

interface Leaf {
  id: number
  x: number
  y: number
  size: number
  rotation: number
  delay: number
  duration: number
  opacity: number
}

export const FallingGreenLeaves: React.FC = () => {
  const [leaves, setLeaves] = useState<Leaf[]>([])
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
    
    // Create 20 leaves with different properties
    const newLeaves: Leaf[] = Array(20)
      .fill(0)
      .map((_, i) => ({
        id: i,
        x: Math.random() * 100, // Random horizontal position
        y: Math.random() * 100, // Random vertical position
        size: Math.random() * 15 + 20, // Size between 20-35px
        rotation: Math.random() * 360, // Random rotation
        delay: Math.random() * 10, // Random delay
        duration: Math.random() * 8 + 12, // Duration between 12-20s
        opacity: Math.random() * 0.4 + 0.4, // Opacity between 0.4-0.8
      }))

    setLeaves(newLeaves)
  }, [])

  if (!isClient) return null

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {leaves.map((leaf) => (
        <div
          key={leaf.id}
          className="absolute"
          style={{
            left: `${leaf.x}%`,
            top: `${leaf.y}%`,
            opacity: leaf.opacity,
            animation: `fall ${leaf.duration}s ${leaf.delay}s infinite linear`,
            transform: `rotate(${leaf.rotation}deg)`,
          }}
        >
          <LeafIcon size={leaf.size} />
        </div>
      ))}
      
      <style jsx>{`
        @keyframes fall {
          0% {
            transform: translateY(-100px) rotate(${Math.random() * 360}deg);
          }
          100% {
            transform: translateY(100vh) rotate(${(Math.random() * 360) + 360}deg);
          }
        }
      `}</style>
    </div>
  )
} 
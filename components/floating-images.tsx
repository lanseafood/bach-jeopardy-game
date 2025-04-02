"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"

interface FloatingItem {
  id: number
  type: "head" | "croissant"
  x: number
  y: number
  vx: number
  vy: number
  rotation: number
  rotationSpeed: number
  size: number
  imageIndex?: number // For different head images
}

interface FloatingImagesProps {
  background?: boolean
  showFloatingHeads?: boolean
}

export default function FloatingImages({ background = false, showFloatingHeads = true }: FloatingImagesProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const itemsRef = useRef<FloatingItem[]>([])
  const animationRef = useRef<number>(0)
  const lastTimeRef = useRef<number>(0)

  useEffect(() => {
    // Initialize floating items
    const heads1 = Array(1)
      .fill(0)
      .map((_, i) => ({
        id: i,
        type: "head" as const,
        x: Math.random() * (window.innerWidth - 110),
        y: Math.random() * (window.innerHeight - 110),
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 2,
        size: 110,
        imageIndex: 0, // First head image
      }))

    const heads2 = Array(1)
      .fill(0)
      .map((_, i) => ({
        id: i + 1, // Start IDs after the first set of heads
        type: "head" as const,
        x: Math.random() * (window.innerWidth - 100),
        y: Math.random() * (window.innerHeight - 100),
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 2,
        size: 100,
        imageIndex: 1, // Second head image
      }))

    const heads3 = Array(1)
      .fill(0)
      .map((_, i) => ({
        id: i + 2, // Start IDs after both sets of heads
        type: "head" as const,
        x: Math.random() * (window.innerWidth - 90),
        y: Math.random() * (window.innerHeight - 90),
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 2,
        size: 100,              
        imageIndex: 2, // Second head image
      }))

    const heads4 = Array(1)
      .fill(0)
      .map((_, i) => ({
        id: i + 3, // Start IDs after both sets of heads
        type: "head" as const,
        x: Math.random() * (window.innerWidth - 90),
        y: Math.random() * (window.innerHeight - 90),
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 2,
        size: 100,
        imageIndex: 3, // Second head image
      }))

    const heads5 = Array(1)
      .fill(0)
      .map((_, i) => ({
        id: i + 4, // Start IDs after both sets of heads
        type: "head" as const,
        x: Math.random() * (window.innerWidth - 100),
        y: Math.random() * (window.innerHeight - 100),
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 2,
        size: 100,
        imageIndex: 4, // Second head image
      }))

    const croissants = Array(8)
      .fill(0)
      .map((_, i) => ({
        id: i + 5, // Start IDs after both sets of heads
        type: "croissant" as const,
        x: Math.random() * (window.innerWidth - 80),
        y: Math.random() * (window.innerHeight - 80),
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 4, // More rotation
        size: 80, // Smaller size
      }))

    // Combine all floating items
    itemsRef.current = [...heads1, ...heads2, ...heads3, ...heads4, ...heads5, ...croissants]

    // Animation function
    const animate = (timestamp: number) => {
      if (!lastTimeRef.current) lastTimeRef.current = timestamp
      const deltaTime = timestamp - lastTimeRef.current
      lastTimeRef.current = timestamp

      // Update positions
      itemsRef.current.forEach((item) => {
        // Move
        item.x += item.vx
        item.y += item.vy
        item.rotation += item.rotationSpeed

        // Bounce off walls
        if (item.x <= 0 || item.x >= window.innerWidth - item.size) {
          item.vx *= -1
        }
        if (item.y <= 0 || item.y >= window.innerHeight - item.size) {
          item.vy *= -1
        }

        // Update DOM elements
        const itemElement = document.getElementById(`floating-${item.type}-${item.id}`)
        if (itemElement) {
          itemElement.style.transform = `translate(${item.x}px, ${item.y}px) rotate(${item.rotation}deg)`
        }
      })

      animationRef.current = requestAnimationFrame(animate)
    }

    // Start animation
    animationRef.current = requestAnimationFrame(animate)

    // Handle window resize
    const handleResize = () => {
      itemsRef.current.forEach((item) => {
        // Keep items within bounds after resize
        item.x = Math.min(item.x, window.innerWidth - item.size)
        item.y = Math.min(item.y, window.innerHeight - item.size)
      })
    }
    window.addEventListener("resize", handleResize)

    // Cleanup
    return () => {
      cancelAnimationFrame(animationRef.current)
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <div ref={containerRef} className={`fixed inset-0 pointer-events-none ${background ? 'z-0' : 'z-50'} overflow-hidden`}>
      {/* Render first set of floating heads */}
      {showFloatingHeads && Array(1)
        .fill(0)
        .map((_, id) => (
          <div
            key={`head-${id}`}
            id={`floating-head-${id}`}
            className="absolute"
            style={{
              width: "110px",
              height: "110px",
              willChange: "transform",
            }}
          >
            <Image
              src="/fh1.png"
              alt="Floating head"
              width={110}
              height={110}
              className="w-full h-full object-contain md:scale-125 lg:scale-150"
            />
          </div>
        ))}

      {/* Render second set of floating heads */}
      {showFloatingHeads && Array(1)
        .fill(0)
        .map((_, id) => (
          <div
            key={`head-2-${id}`}
            id={`floating-head-${id + 1}`}
            className="absolute"
            style={{
              width: "100px",
              height: "100px",
              willChange: "transform",
            }}
          >
            <Image
              src="/fh2.png"
              alt="Floating head"
              width={100}
              height={100}
              className="w-full h-full object-contain md:scale-125 lg:scale-150"
            />
          </div>
        ))}
        {showFloatingHeads && Array(1)
        .fill(0)
        .map((_, id) => (
          <div
            key={`head-3-${id}`}
            id={`floating-head-${id + 2}`}
            className="absolute"
            style={{
              width: "90px",
              height: "90px",
              willChange: "transform",
            }}
          >
            <Image
              src="/fh3.png"
              alt="Floating head"
              width={100}
              height={100}
              className="w-full h-full object-contain md:scale-125 lg:scale-150"
            />
          </div>
        ))}
        {showFloatingHeads && Array(1)
        .fill(0)
        .map((_, id) => (
          <div
            key={`head-4-${id}`}
            id={`floating-head-${id + 3}`}
            className="absolute"
            style={{
              width: "90px",
              height: "90px",
              willChange: "transform",
            }}
          >
            <Image
              src="/fh4.png"
              alt="Floating head"
              width={100}
              height={100}
              className="w-full h-full object-contain md:scale-125 lg:scale-150"
            />
          </div>
        ))}

        {showFloatingHeads && Array(1)
        .fill(0)
        .map((_, id) => (
          <div
            key={`head-5-${id}`}
            id={`floating-head-${id + 4}`}
            className="absolute"
            style={{
              width: "100px",
              height: "100px",
              willChange: "transform",
            }}
          >
            <Image
              src="/fh5.png"
              alt="Floating head"
              width={100}
              height={100}
              className="w-full h-full object-contain md:scale-125 lg:scale-150"
            />
          </div>
        ))}

      {/* Render floating croissants */}
      {Array(8)
        .fill(0)
        .map((_, id) => (
          <div
            key={`croissant-${id}`}
            id={`floating-croissant-${id + 5}`}
            className="absolute"
            style={{
              width: "80px",
              height: "80px",
              willChange: "transform",
            }}
          >
            <Image
              src="/croissant.png"
              alt="Floating croissant"
              width={80}
              height={80}
              className="w-full h-full object-contain md:scale-125 lg:scale-150"
            />
          </div>
        ))}
    </div>
  )
}


"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { gameConfig } from "@/lib/game-config"

interface FloatingImagesProps {
  background?: boolean
  showFloatingHeads?: boolean
  showFloatingObjects?: boolean
  isLandingPage?: boolean
}

interface FloatingItem {
  id: number
  type: "head" | "floatingObject"
  x: number
  y: number
  vx: number
  vy: number
  rotation: number
  rotationSpeed: number
  size: number
  imageIndex?: number // For different head images
  imageSrc?: string // For floating objects
}

export default function FloatingImages({ background = false, showFloatingHeads = true, showFloatingObjects = true, isLandingPage = false }: FloatingImagesProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const itemsRef = useRef<FloatingItem[]>([])
  const animationRef = useRef<number>(0)
  const lastTimeRef = useRef<number>(0)

  useEffect(() => {
    const floatingConfig = gameConfig.floatingElements
    const items: FloatingItem[] = []

    // Initialize floating heads
    if (showFloatingHeads) {
      // Use landing page heads if on landing page, otherwise use game page heads
      const headsConfig = isLandingPage ? floatingConfig.landingPageFloatingHeads : floatingConfig.floatingHeads
      
      headsConfig.images.forEach((headImage, index) => {
        items.push({
          id: index,
          type: "head" as const,
          x: Math.random() * (window.innerWidth - headImage.size),
          y: Math.random() * (window.innerHeight - headImage.size),
          vx: (Math.random() - 0.5) * 2 * (headsConfig.movementSpeed.max - headsConfig.movementSpeed.min) + headsConfig.movementSpeed.min,
          vy: (Math.random() - 0.5) * 2 * (headsConfig.movementSpeed.max - headsConfig.movementSpeed.min) + headsConfig.movementSpeed.min,
          rotation: Math.random() * 360,
          rotationSpeed: (Math.random() - 0.5) * 2 * (headsConfig.rotationSpeed.max - headsConfig.rotationSpeed.min) + headsConfig.rotationSpeed.min,
          size: headImage.size,
          imageIndex: index,
        })
      })
    }

    // Initialize floating objects
    if (showFloatingObjects) {
      const objectConfig = floatingConfig.floatingObjects
      for (let i = 0; i < objectConfig.count; i++) {
        items.push({
          id: i + floatingConfig.floatingHeads.images.length,
          type: "floatingObject" as const,
          x: Math.random() * (window.innerWidth - objectConfig.sizes.mobile),
          y: Math.random() * (window.innerHeight - objectConfig.sizes.mobile),
          vx: (Math.random() - 0.5) * 2 * (objectConfig.movementSpeed.max - objectConfig.movementSpeed.min) + objectConfig.movementSpeed.min,
          vy: (Math.random() - 0.5) * 2 * (objectConfig.movementSpeed.max - objectConfig.movementSpeed.min) + objectConfig.movementSpeed.min,
          rotation: Math.random() * 360,
          rotationSpeed: (Math.random() - 0.5) * 2 * (objectConfig.rotationSpeed.max - objectConfig.rotationSpeed.min) + objectConfig.rotationSpeed.min,
          size: objectConfig.sizes.mobile,
          imageSrc: objectConfig.image,
        })
      }
    }

    itemsRef.current = items

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
  }, [showFloatingHeads, showFloatingObjects])

  const floatingConfig = gameConfig.floatingElements

  return (
    <div ref={containerRef} className={`fixed inset-0 pointer-events-none ${background ? 'z-0' : 'z-50'} overflow-hidden`}>
      {/* Render floating heads */}
      {showFloatingHeads && (isLandingPage ? floatingConfig.landingPageFloatingHeads : floatingConfig.floatingHeads).images.map((headImage, index) => (
        <div
          key={`head-${index}`}
          id={`floating-head-${index}`}
          className="absolute"
          style={{
            width: `${headImage.size}px`,
            height: `${headImage.size}px`,
            willChange: "transform",
          }}
        >
          <Image
            src={headImage.src}
            alt="Floating head"
            width={headImage.size}
            height={headImage.size}
            className="w-full h-full object-contain md:scale-125 lg:scale-150"
          />
        </div>
      ))}

      {/* Render floating objects */}
      {showFloatingObjects && Array(floatingConfig.floatingObjects.count)
        .fill(0)
        .map((_, id) => (
          <div
            key={`floatingObject-${id}`}
            id={`floating-floatingObject-${id + floatingConfig.floatingHeads.images.length}`}
            className="absolute"
            style={{
              width: `${floatingConfig.floatingObjects.sizes.mobile}px`,
              height: `${floatingConfig.floatingObjects.sizes.mobile}px`,
              willChange: "transform",
            }}
          >
            <Image
              src={floatingConfig.floatingObjects.image}
              alt="Floating object"
              width={floatingConfig.floatingObjects.sizes.mobile}
              height={floatingConfig.floatingObjects.sizes.mobile}
              className="w-full h-full object-contain md:scale-125 lg:scale-150"
            />
          </div>
        ))}
    </div>
  )
}


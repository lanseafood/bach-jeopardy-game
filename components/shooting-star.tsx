"use client"

import { useEffect, useState } from "react"

export default function ShootingStar() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setShow(true)
      setTimeout(() => setShow(false), 3000) // Animation duration
    }, 4000) // Repeat every 3 seconds

    return () => clearInterval(interval)
  }, [])

  if (!show) return null

  return (
    <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-40 h-40">
      <div className="absolute inset-0 animate-shooting-star">
        <div className="w-1 h-1 bg-white rounded-full shadow-[0_0_10px_2px_rgba(255,255,255,0.8)]"></div>
      </div>
    </div>
  )
} 
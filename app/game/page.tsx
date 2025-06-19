// /app/game/page.tsx
import { Suspense } from "react"
import JeopardyBoard from "@/components/main-game"

export default function GamePage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-gradient-to-b from-[#FFD1DC] to-[#FFE5B4]"></div>}>
      <JeopardyBoard />
    </Suspense>
  )
}


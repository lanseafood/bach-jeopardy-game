// app/page.tsx
import { Suspense } from "react"
import LandingPage from "@/components/landing-page"

export default function Page() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-pink-300"></div>}>
      <LandingPage />
    </Suspense>
  )
}

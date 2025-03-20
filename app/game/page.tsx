"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import FloatingImages from "@/components/floating-images"

const categories = ["⏳ THE PAST", "🎁 THE PRESENT", "💫 THE FUTURE"]
const pointValues = [100, 200, 300, 400, 500, 600, 700, 800]

export default function JeopardyBoard() {
  const [showAnswers, setShowAnswers] = useState<Set<string>>(new Set())
  const [isClient, setIsClient] = useState(false)

  // Set isClient to true once component mounts
  useEffect(() => {
    setIsClient(true)
  }, [])

  // Load answered questions from localStorage on component mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedShowAnswers = localStorage.getItem("showAnswers")

      if (storedShowAnswers) {
        try {
          setShowAnswers(new Set(JSON.parse(storedShowAnswers)))
        } catch (e) {
          console.error("Error parsing showAnswers from localStorage", e)
        }
      }
    }
  }, [])

  // Only render client-side content after hydration
  if (!isClient) {
    return <div className="min-h-screen bg-sunset-pink"></div>
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-sunset-pink to-[#FF6F91] text-sunset-charcoal">
      {/* Floating Images */}
      <FloatingImages />

      <div className="container mx-auto flex-1 flex flex-col">
        <div className="flex justify-between items-center mb-8 mt-12 px-6">
          <Link href="/">
            <Button 
              className="bg-sunset-lavender text-sunset-charcoal hover:bg-sunset-yellow"
            >
              Back to Home
            </Button>
          </Link>
          <h1 className="text-7xl font-waltograph text-center text-sunset-blue pt-4">Sylaron Jeopardy</h1>
          <div className="w-[100px]"></div> {/* Spacer for alignment */}
        </div>
        <div className="px-6 flex-1">
          <div className="grid grid-cols-3 gap-6 w-full h-full">
            {categories.map((category) => (
              <div key={category} className="text-center flex flex-col h-full">
                <h2 className="text-3xl font-mouse font-semibold mb-6 text-sunset-blue bg-white/30 py-2 px-4 rounded-lg shadow-sm">{category}</h2>
                {pointValues.map((points) => {
                  const questionKey = `${category}-${points}`
                  const isAnswered = showAnswers.has(questionKey)

                  return (
                    <Link
                      href={`/question/${encodeURIComponent(category)}/${points}`}
                      key={questionKey}
                      className="block mb-2"
                    >
                      {isAnswered ? (
                        <div className="w-full h-10 flex items-center justify-center bg-sunset-cream rounded-md border-2 border-sunset-blue shadow-sm transition-all duration-500 animate-fade-in-scale">
                          <Image
                            src="/croissant.png"
                            alt="Answered"
                            width={35}
                            height={25}
                            className="object-contain animate-bounce-subtle"
                            priority
                          />
                        </div>
                      ) : (
                        <Button
                          className="w-full border-2 border-sunset-blue bg-sunset-lavender text-sunset-charcoal hover:bg-sunset-yellow text-xl font-semibold transition-all duration-200 hover:scale-105 hover:shadow-md"
                          variant="outline"
                        >
                          {points}
                        </Button>
                      )}
                    </Link>
                  )
                })}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
} 
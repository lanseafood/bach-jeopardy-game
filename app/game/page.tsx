// /app/game/page.tsx
import { Suspense } from "react"
import JeopardyBoard from "@/components/main-game"

export default function GamePage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-gradient-to-b from-sunset-pink to-[#FF6F91]"></div>}>
      <JeopardyBoard />
    </Suspense>
  )
}


// "use client"

// import { useState, useEffect } from "react"
// import Link from "next/link"
// import Image from "next/image"
// import { Button } from "@/components/ui/button"
// import FloatingImages from "@/components/floating-images"
// import { useSearchParams } from "next/navigation"

// const categories = ["⏳ THE PAST", "🎁 THE PRESENT", "💫 THE FUTURE"]
// const pointValues = [100, 200, 300, 400, 500, 600, 700, 800]


// export default function JeopardyBoard() {
//   const [showAnswers, setShowAnswers] = useState<Set<string>>(new Set())
//   const [isClient, setIsClient] = useState(false)
//   const searchParams = useSearchParams()

//   // Set isClient to true once component mounts
//   useEffect(() => {
//     setIsClient(true)
//   }, [])

//   // Load answered questions from localStorage on component mount
//   useEffect(() => {
//     if (typeof window !== "undefined") {
//       // Only reset on fresh visits (no search params)
//       const isFreshVisit = !searchParams.toString()
      
//       if (isFreshVisit) {
//         // Clear localStorage for fresh visits
//         localStorage.removeItem("showAnswers")
//         setShowAnswers(new Set())
//       } else {
//         // Load state for normal navigation
//         const storedShowAnswers = localStorage.getItem("showAnswers")
//         if (storedShowAnswers) {
//           try {
//             setShowAnswers(new Set(JSON.parse(storedShowAnswers)))
//           } catch (e) {
//             console.error("Error parsing showAnswers from localStorage", e)
//           }
//         }
//       }
//     }
//   }, [searchParams])

//   // Only render client-side content after hydration
//   if (!isClient) {
//     return <div className="min-h-screen bg-sunset-pink"></div>
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-sunset-pink to-[#FF6F91] text-sunset-charcoal">
//       {/* Floating Images */}
//       <FloatingImages />

//       <div className="container mx-auto flex-1 flex flex-col">
//         <div className="flex justify-between items-center mb-8 mt-12 px-6">
//           <Link href="/?state=preserved">
//             <Button 
//               className="bg-sunset-lavender text-sunset-charcoal hover:bg-sunset-yellow"
//             >
//               Back to Home
//             </Button>
//           </Link>
//           <h1 className="text-5xl md:text-7xl lg:text-8xl font-waltograph text-center text-sunset-blue pt-4">Sylaron Jeopardy</h1>
//           <div className="w-[100px]"></div> {/* Spacer for alignment */}
//         </div>
//         <div className="px-6 flex-1">
//           <div className="grid grid-cols-3 gap-4 md:gap-6 lg:gap-8 w-full h-full">
//             {categories.map((category) => (
//               <div key={category} className="text-center flex flex-col h-full">
//                 <h2 className="text-2xl md:text-3xl lg:text-4xl font-mouse font-semibold mb-4 md:mb-6 text-sunset-blue bg-white/30 py-2 px-4 rounded-lg shadow-sm">{category}</h2>
//                 {pointValues.map((points) => {
//                   const questionKey = `${category}-${points}`
//                   const isAnswered = showAnswers.has(questionKey)

//                   return (
//                     <Link
//                       href={`/question/${encodeURIComponent(category)}/${points}`}
//                       key={questionKey}
//                       className="block mb-2"
//                     >
//                       {isAnswered ? (
//                         <div className="w-full h-8 md:h-10 lg:h-12 flex items-center justify-center bg-sunset-cream rounded-md border-2 border-sunset-blue shadow-sm transition-all duration-500 animate-fade-in-scale">
//                           <div className="flex items-center gap-1">
//                             {points.toString().split('').map((digit, index) => (
//                               digit === '0' ? (
//                                 <Image
//                                   key={index}
//                                   src="/croissant.png"
//                                   alt="0"
//                                   width={16}
//                                   height={16}
//                                   className="object-contain animate-bounce-subtle md:w-5 md:h-5 lg:w-6 lg:h-6"
//                                   priority
//                                 />
//                               ) : (
//                                 <span key={index} className="text-lg md:text-xl lg:text-2xl font-semibold text-sunset-charcoal">
//                                   {digit}
//                                 </span>
//                               )
//                             ))}
//                           </div>
//                         </div>
//                       ) : (
//                         <Button
//                           className="w-full h-8 md:h-10 lg:h-12 border-2 border-sunset-blue bg-sunset-lavender text-sunset-charcoal hover:bg-sunset-yellow text-lg md:text-xl lg:text-2xl font-semibold transition-all duration-200 hover:scale-105 hover:shadow-md"
//                           variant="outline"
//                         >
//                           {points}
//                         </Button>
//                       )}
//                     </Link>
//                   )
//                 })}
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// } 
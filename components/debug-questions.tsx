"use client"

import { gameConfig } from "@/lib/game-config"

export default function DebugQuestions() {
  const categories = Object.keys(gameConfig.categories)
  
  return (
    <div className="p-4 bg-gray-100 rounded-lg m-4">
      <h3 className="font-bold mb-2">Debug: Available Categories</h3>
      <ul className="text-sm">
        {categories.map((category, index) => (
          <li key={index} className="mb-1">
            <strong>Category {index + 1}:</strong> "{category}"
            <br />
            <strong>Encoded:</strong> {encodeURIComponent(category)}
            <br />
            <strong>Decoded:</strong> {decodeURIComponent(encodeURIComponent(category))}
            <br />
            <strong>Points:</strong> {Object.keys(gameConfig.categories[category]).join(", ")}
            <hr className="my-2" />
          </li>
        ))}
      </ul>
    </div>
  )
}
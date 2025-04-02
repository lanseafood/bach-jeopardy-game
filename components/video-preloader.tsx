"use client"

import { useEffect } from 'react'

const videoPaths = [
  "/videos/past_2.mov",
  "/videos/past_3.mp4",
  "/videos/past_4.mp4",
  "/videos/past_7.mov",
  "/videos/past_8.mov",
  "/videos/ily.mov",
  "/videos/present_3.mp4",
  "/videos/present_4.mov",
  "/videos/present_7.mov",
  "/videos/present_8.mov",
  "/videos/future_2.mov",
  "/videos/future_4.mov",
  "/videos/future_5.mov",
  "/videos/future_6.mov",
  "/videos/future_8.mov"
]

export default function VideoPreloader() {
  useEffect(() => {
    // Create a queue of videos to preload
    const preloadQueue = [...videoPaths]
    let currentIndex = 0

    // Function to preload a single video
    const preloadVideo = (src: string) => {
      return new Promise((resolve, reject) => {
        const video = document.createElement('video')
        video.preload = 'auto'
        video.src = src
        
        video.onloadeddata = () => {
          resolve(src)
        }
        
        video.onerror = () => {
          reject(src)
        }
        
        // Start loading the video
        video.load()
      })
    }

    // Function to process the queue
    const processQueue = async () => {
      if (currentIndex < preloadQueue.length) {
        try {
          await preloadVideo(preloadQueue[currentIndex])
          currentIndex++
          // Process next video after a small delay to prevent overwhelming the network
          setTimeout(processQueue, 100)
        } catch (error) {
          console.error(`Failed to preload video: ${preloadQueue[currentIndex]}`)
          currentIndex++
          setTimeout(processQueue, 100)
        }
      }
    }

    // Start preloading
    processQueue()
  }, [])

  return null // This component doesn't render anything
} 
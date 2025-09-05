"use client"

import { useEffect } from 'react'

export default function SuppressHydrationWarning() {
  useEffect(() => {
    // Suppress hydration warnings for the body element
    // This is needed because browser extensions (like Grammarly) modify the DOM
    // after the initial render, causing hydration mismatches
    const body = document.body
    if (body) {
      // Remove any Grammarly attributes that might cause hydration issues
      body.removeAttribute('data-new-gr-c-s-check-loaded')
      body.removeAttribute('data-gr-ext-installed')
    }
  }, [])

  return null
}
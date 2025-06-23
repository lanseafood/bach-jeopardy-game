import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Bachelorette Jeopardy Game - Fun Party Game for Bachelorette Parties',
  description: 'A fun and interactive Jeopardy-style game perfect for bachelorette parties! Custom questions about the couple, video answers, and beautiful animations. Created for memorable bachelorette celebrations.',
  keywords: 'bachelorette party, jeopardy game, party games, bachelorette activities, couple trivia, wedding games, bachelorette entertainment, interactive games, party planning, bachelorette party ideas',
  authors: [{ name: 'Lanssie Ma' }],
  creator: 'Lanssie Ma',
  publisher: 'Lanssie Ma',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://jeopardy-bach.vercel.app/'), 
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: '/bjlogo.png',
    shortcut: '/bjlogo.png',
    apple: '/bjlogo.png',
  },
  openGraph: {
    title: 'Bachelorette Jeopardy Game - Fun Party Game',
    description: 'A fun and interactive Jeopardy-style game perfect for bachelorette parties!',
    url: 'https://jeopardy-bach.vercel.app/', 
    siteName: 'Bachelorette Jeopardy',
    images: [
      {
        url: '/bjlogo.png', 
        width: 1200,
        height: 630,
        alt: 'Bachelorette Jeopardy Game',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bachelorette Jeopardy Game - Fun Party Game',
    description: 'A fun and interactive Jeopardy-style game perfect for bachelorette parties!',
    images: ['/bjlogo.png'], 
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-mogilte">{children}</body>
    </html>
  )
}

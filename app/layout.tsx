import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'bachelorette jeopardy',
  description: 'Created by Lanssie Ma for all her friends bachelorette parties',
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

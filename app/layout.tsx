import type { Metadata } from 'next'
import { Mouse_Memoirs } from 'next/font/google'
import './globals.css'

const mouseMemoirs = Mouse_Memoirs({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

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
      <body className={mouseMemoirs.className}>{children}</body>
    </html>
  )
}

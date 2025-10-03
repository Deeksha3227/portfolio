import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import CursorFX from "@/components/cursor-fx"
import ScrollTint from "@/components/scroll-tint"
import { ScrollRevealProvider } from "@/components/scroll-reveal"
import { Suspense } from "react"

export const metadata: Metadata = {
  title: "DEEKSHA|PORTFOLIO",
  description: "Created with v0",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={null}>
          <CursorFX />
          <ScrollTint />
          <ScrollRevealProvider />
          {children}
        </Suspense>
        <Analytics />
      </body>
    </html>
  )
}

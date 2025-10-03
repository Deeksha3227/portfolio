"use client"

import { useEffect, useRef } from "react"

export default function ScrollTint() {
  const rafRef = useRef<number | null>(null)

  useEffect(() => {
    if (typeof window === "undefined") return
    const root = document.documentElement
    let ticking = false

    const update = () => {
      const max = document.documentElement.scrollHeight - document.documentElement.clientHeight || 1
      const y = window.scrollY || window.pageYOffset || 0
      const t = Math.max(0, Math.min(1, y / max))
      root.style.setProperty("--scroll-t", t.toString())
      ticking = false
    }

    const onScroll = () => {
      if (ticking) return
      ticking = true
      rafRef.current = window.requestAnimationFrame(update)
    }

    update()
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onScroll)
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onScroll)
    }
  }, [])

  return <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-30 scroll-tint" />
}

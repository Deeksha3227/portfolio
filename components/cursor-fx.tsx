"use client"
import { useEffect, useRef } from "react"

export default function CursorFX() {
  const dotRef = useRef<HTMLDivElement | null>(null)
  const ringRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (typeof window === "undefined") return
    const dot = dotRef.current!
    const ring = ringRef.current!
    if (!dot || !ring) return

    let mouseX = -9999,
      mouseY = -9999
    let ringX = mouseX,
      ringY = mouseY
    let raf: number | null = null

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
      // move the dot instantly
      dot.style.transform = `translate3d(${mouseX - 3}px, ${mouseY - 3}px, 0)`
    }

    const loop = () => {
      // simple lerp for the ring
      ringX += (mouseX - ringX) * 0.12
      ringY += (mouseY - ringY) * 0.12
      ring.style.transform = `translate3d(${ringX - 12}px, ${ringY - 12}px, 0)`
      raf = requestAnimationFrame(loop)
    }

    window.addEventListener("mousemove", onMove, { passive: true })
    raf = requestAnimationFrame(loop)

    // scale ring on click for feedback
    const onDown = () => {
      ring.style.transition = "transform 120ms ease"
      ring.style.transform += " scale(0.9)"
    }
    const onUp = () => {
      ring.style.transition = "transform 180ms ease"
      ring.style.transform = ring.style.transform.replace(" scale(0.9)", "")
    }
    window.addEventListener("mousedown", onDown)
    window.addEventListener("mouseup", onUp)

    return () => {
      window.removeEventListener("mousemove", onMove)
      window.removeEventListener("mousedown", onDown)
      window.removeEventListener("mouseup", onUp)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <>
      <div aria-hidden className="cursor-dot" ref={dotRef} />
      <div aria-hidden className="cursor-ring" ref={ringRef} />
    </>
  )
}

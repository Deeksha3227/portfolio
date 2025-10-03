"use client"
import { useEffect } from "react"

export function ScrollRevealProvider() {
  useEffect(() => {
    if (typeof window === "undefined" || !("IntersectionObserver" in window)) return

    const reveal = (el: Element) => el.classList.add("is-revealed")
    const reset = (el: Element) => el.classList.remove("is-revealed")

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) reveal(entry.target)
        }
      },
      { root: null, rootMargin: "0px 0px -10% 0px", threshold: 0.12 },
    )

    const observeAll = () => {
      document.querySelectorAll<HTMLElement>(".reveal").forEach((el) => io.observe(el))
    }

    observeAll()

    // also watch for newly added nodes (navigations, client components)
    const mo = new MutationObserver((mutations) => {
      for (const m of mutations) {
        m.addedNodes.forEach((node) => {
          if (!(node instanceof HTMLElement)) return
          if (node.matches?.(".reveal")) io.observe(node)
          node.querySelectorAll?.(".reveal").forEach((el) => io.observe(el))
        })
      }
    })
    mo.observe(document.body, { childList: true, subtree: true })

    // optional: remove reveal state on route changes if needed
    const handleVisibilityChange = () => {
      if (document.hidden) {
        document.querySelectorAll(".reveal.is-revealed").forEach(reset)
      }
    }
    document.addEventListener("visibilitychange", handleVisibilityChange)

    return () => {
      io.disconnect()
      mo.disconnect()
      document.removeEventListener("visibilitychange", handleVisibilityChange)
    }
  }, [])

  return null
}

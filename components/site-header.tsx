import Link from "next/link"
import { ThemeToggle } from "./theme-toggle"

export function SiteHeader() {
  return (
    <header className="sticky top-4 z-50">
      <nav className="container mx-auto px-4">
        <div className="flex items-center justify-between rounded-full border bg-card/60 backdrop-blur px-3 py-2">
          {/* Brand */}
          <Link
            href="/"
            className="inline-flex h-8 w-8 items-center justify-center rounded-full border font-mono text-sm font-semibold text-primary"
            aria-label="Home"
          >
            D
          </Link>

          {/* Links */}
          <div className="hidden md:flex items-center gap-1 rounded-full border bg-muted/60 px-1 py-1">
            <Link href="/" className="rounded-full px-3 py-1 text-xs font-medium text-primary hover:bg-accent">
              Home
            </Link>
            <Link href="/skills" className="rounded-full px-3 py-1 text-xs font-medium hover:bg-accent">
              Skills
            </Link>
            <Link href="/projects" className="rounded-full px-3 py-1 text-xs font-medium hover:bg-accent">
              Projects
            </Link>
            <Link href="/certifications" className="rounded-full px-3 py-1 text-xs font-medium hover:bg-accent">
              Certifications
            </Link>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-2">
            <ThemeToggle />
          </div>
        </div>
      </nav>
    </header>
  )
}

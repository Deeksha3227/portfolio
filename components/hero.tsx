export function Hero() {
  return (
    <div className="max-w-3xl">
      <h1 className="mt-2 text-balance text-4xl font-bold leading-tight text-primary md:text-6xl">Deeksha G</h1>
      <p className="mt-2 text-pretty text-muted-foreground">
        CSE Undergrad | Frontend Developer | UI/UX & Product Design
      </p>
      <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
        Hi, I’m Deeksha G, a computer science engineering student at AJ Institute of Engineering and Technology. I bring
        ideas to life by blending creativity with code—building smooth, animated, and user-friendly web and mobile
        experiences.
      </p>

      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
        With skills in Figma, React Native, Next.js, Tailwind, and Typescript, I love crafting fluid interfaces,
        exploring design systems, and adding that extra motion to make designs feel alive. Always learning, always
        building—let’s connect and create something dynamic together!
      </p>

      <div className="mt-4 flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
        <a
          href="mailto:deeksha.g2794@gmail.com"
          className="rounded-full border px-3 py-1 hover:bg-accent"
          aria-label="Gmail"
        >
          Gmail
        </a>
        <a
          href="https://github.com/Deeksha3227"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border px-3 py-1 hover:bg-accent"
          aria-label="GitHub"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/deeksha-g-458a672a1/"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border px-3 py-1 hover:bg-accent"
          aria-label="LinkedIn"
        >
          LinkedIn
        </a>
      </div>

      {/* CTAs */}
      <div className="mt-6 flex items-center gap-3">
        <a href="/projects" className="rounded-full border px-4 py-2 text-xs font-medium hover:bg-accent">
          View Projects
        </a>
      </div>
    </div>
  )
}

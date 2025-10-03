type Project = {
  id: number
  title: string
  tags: string[]
  hrefs?: { label: string; href: string }[]
  bullets?: string[]
}

const projects: Project[] = [
  {
    id: 1,
    title: "Kalavedika",
    tags: ["Next.js", "React Native", "Prisma", "Neon", "PostgreSQL", "Tailwind", "TypeScript"],
    hrefs: [{ label: "GitHub", href: "https://github.com/Deeksha3227/kalavedika" }],
    bullets: [
      "All‑in‑One Platform: Streamlines event registration and management.",
      "Inclusive & Instant Updates: Real‑time email/SMS alerts (in progress).",
      "Secure & Scalable: Safe login, easy profile control, future‑ready design.",
    ],
  },
  {
    id: 2,
    title: "AppDev",
    tags: ["Figma", "Flutter", "React Native", "TypeScript"],
    hrefs: [{ label: "Figma", href: "https://www.figma.com/design/qapRY0giUrvsuyRPmNSOCb/AppDev?node-id=0-1&p=f" }],
    bullets: [
      "Feature‑Rich Communication: Secure messaging, media sharing, and calling.",
      "Seamless UI/UX Flow: Intuitive journey from onboarding to chatting and settings.",
      "Interactive Core Modules: AR camera, avatar creation, rich chat tools, and customizable settings.",
    ],
  },
  {
    id: 3,
    title: "React Native Epic Trails Design System",
    tags: ["Figma", "React Native", "Next.js", "TypeScript", "JavaScript", "Tailwind"],
    hrefs: [
      { label: "GitHub", href: "https://github.com/gaureshpai/reactnativeepictrailsds" },
      {
        label: "Figma",
        href: "https://www.figma.com/design/2vy2LGunM7TEJ195auFVBf/Epic-Trails?node-id=0-1&p=f&t=wUQoBoDyojpDNI8o-0",
      },
    ],
    bullets: [
      "Consistent & Reusable UI: Modular components with shared visual foundation.",
      "Platform‑Adaptive & Accessible: iOS‑native elements with inclusive visuals.",
      "Efficient Workflow: Grid‑based layouts, tested components, Figma handoff ready.",
    ],
  },
]

export function Projects() {
  return (
    <div>
      <h2 className="text-balance text-xl font-semibold">Featured Projects</h2>

      <ol className="mt-6 space-y-6">
        {projects.map((p) => (
          <li key={p.id} className="group reveal hover-pop">
            <div className="flex items-baseline gap-3">
              <span className="text-primary font-semibold">{p.id}.</span>
              <span className="text-lg font-semibold">{p.title}</span>
            </div>
            <p className="mt-1 text-xs text-muted-foreground">{p.tags.map((t) => `#${t}`).join(" ")}</p>

            {p.bullets && (
              <ul className="mt-2 list-disc pl-6 text-sm text-muted-foreground">
                {p.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            )}

            {p.hrefs && p.hrefs.length > 0 && (
              <div className="mt-2 flex flex-wrap gap-3">
                {p.hrefs.map((h) => (
                  <a
                    key={h.label}
                    href={h.href}
                    className="inline-flex items-center gap-2 text-xs font-medium underline-offset-4 hover:underline"
                  >
                    {h.label}
                  </a>
                ))}
              </div>
            )}
          </li>
        ))}
      </ol>

      <div className="mt-6 flex items-center gap-4">
        {/* Removed 'See more projects' */}
        <a
          href="/certifications"
          className="inline-flex items-center gap-2 text-xs font-medium underline-offset-4 hover:underline"
        >
          View certifications
        </a>
      </div>
    </div>
  )
}

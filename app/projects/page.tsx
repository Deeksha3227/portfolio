import { SiteHeader } from "@/components/site-header"
import { Projects } from "@/components/projects"

export default function ProjectsPage() {
  return (
    <main className="min-h-dvh">
      <SiteHeader />
      <section className="container mx-auto px-4 pt-16 md:pt-24 pb-24">
        <Projects />
      </section>
    </main>
  )
}

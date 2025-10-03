import { SiteHeader } from "@/components/site-header"
import { Skills } from "@/components/skills"

export default function SkillsPage() {
  return (
    <main className="min-h-dvh">
      <SiteHeader />
      <section className="container mx-auto px-4 pt-16 md:pt-24 pb-24">
        <Skills />
      </section>
    </main>
  )
}

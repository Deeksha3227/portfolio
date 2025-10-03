import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { Education } from "@/components/education"

export default function Page() {
  return (
    <main className="min-h-dvh">
      <SiteHeader />
      <section className="container mx-auto px-4 pt-16 md:pt-24">
        <Hero />
      </section>

      <section id="education" className="container mx-auto px-4 pt-16 md:pt-24 pb-24">
        <Education />
      </section>
    </main>
  )
}

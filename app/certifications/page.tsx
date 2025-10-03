import { SiteHeader } from "@/components/site-header"
import { Certifications } from "@/components/certifications"

export default function CertificationsPage() {
  return (
    <main className="min-h-dvh">
      <SiteHeader />
      <section className="container mx-auto px-4 pt-16 md:pt-24 pb-24">
        <Certifications />
      </section>
    </main>
  )
}

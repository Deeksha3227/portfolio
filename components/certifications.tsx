import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

type Cert = {
  title: string
  image: string
  alt: string
}

const certs: Cert[] = [
  {
    title: "BASIC OF PYTHON",
    image: "/images/certs/basics-of-python.png",
    alt: "Infosys Basics of Python certificate",
  },
  {
    title: "JAVA PROGRAMMING 2022",
    image: "/images/certs/java-programming-2022.png",
    alt: "Infosys Java Programming 2022 certificate",
  },
  {
    title: "CAREER ESSENTIALS IN DATA ANALYSIS",
    image: "/images/certs/career-essentials-data-analysis.png",
    alt: "LinkedIn Learning Career Essentials in Data Analysis certificate",
  },
  {
    title: "AINNOVATION 2025 : Microsoft Azure Learning Challenge",
    image: "/images/certs/ainnovation-2025.png",
    alt: "Microsoft Azure Learning Challenge certificate 2025",
  },
]

export function Certifications() {
  return (
    <div>
      <h2 className="text-balance text-xl font-semibold">Certifications & Courses</h2>
      <div className="mt-4 grid gap-4">
        {certs.map((c, idx) => (
          <Card key={idx} className="reveal hover-pop border bg-card/60">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm">{c.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <img
                src={c.image || "/placeholder.svg"}
                alt={c.alt}
                className="w-full h-auto rounded-md border object-cover"
              />
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const groups: { title: string; items: string[] }[] = [
  { title: "Programming Languages", items: ["C", "JavaScript", "TypeScript", "Python", "Java"] },
  { title: "Design & Prototyping", items: ["Figma", "Canva", "Photoshop", "UI/UX Principles"] },
  { title: "Frontend Development", items: ["HTML", "CSS", "Tailwind CSS", "React", "React Native", "Next.js"] },
  { title: "Backend & Databases", items: ["Node.js", "Express.js", "PostgreSQL", "Neon", "Prisma"] },
  { title: "Mobile App Development", items: ["React Native", "Flutter"] },
  { title: "Version Control", items: ["Git", "GitHub"] },
  { title: "Data Skills", items: ["Data Analysis", "Data Cleaning", "Visualization", "Problem Solving"] },
  { title: "Soft Skills", items: ["Leadership", "Communication", "Critical Thinking", "Teamwork", "Creativity"] },
]

export function Skills() {
  return (
    <div>
      <h2 className="text-balance text-xl font-semibold">Skills</h2>
      <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {groups.map((g) => (
          <Card key={g.title} className="reveal hover-pop border bg-card/60">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm">{g.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              {g.items.map((it) => (
                <Badge key={it} variant="secondary" className="rounded-full">
                  {it}
                </Badge>
              ))}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

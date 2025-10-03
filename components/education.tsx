import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

type Edu = {
  institution: string
  details: string
  period: string
}

const education: Edu[] = [
  {
    institution: "AJ Institute of Engineering and Technology, Mangalore",
    details: "B.E. in Computer Science Engineering · CGPA: 8.1 (currently in 5th Semester)",
    period: "2023 — 2027",
  },
  {
    institution: "Sharadha Vidyalaya, Kodiyalbail Mangalore (State)",
    details: "Class XII · Aggregate: 75%",
    period: "2021 — 2022",
  },
  {
    institution: "Kendriya Vidyalaya No:1 Panambur, Mangalore (CBSE)",
    details: "Class X · Aggregate: 89.5%",
    period: "2011 — 2020",
  },
]

export function Education() {
  return (
    <div>
      <h2 className="text-balance text-xl font-semibold">Education</h2>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        {education.map((e) => (
          <Card key={e.institution} className="border bg-card/60">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm">{e.institution}</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              <p>{e.details}</p>
              <p className="mt-1 text-xs">{e.period}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

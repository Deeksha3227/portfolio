import { Card, CardContent } from "@/components/ui/card"

const roles = [
  {
    org: "Devnation (AJIET)",
    role: "Community Member",
    details: "Focused on software development and collaboration.",
  },
  {
    org: "Google Developer Group (AJIET)",
    role: "Core Member — Editorial",
    details: "Editorial contributor for campus GDG activities.",
  },
]

export function Roles() {
  return (
    <div>
      <h2 className="text-balance text-xl font-semibold">Roles & Responsibility</h2>
      <ul className="mt-4 grid gap-4 sm:grid-cols-2">
        {roles.map((r) => (
          <li key={r.org}>
            <Card className="border bg-card/60">
              <CardContent className="pt-4">
                <p className="text-sm font-medium">{r.org}</p>
                <p className="text-sm text-muted-foreground">{r.role}</p>
                <p className="mt-1 text-sm text-muted-foreground">{r.details}</p>
              </CardContent>
            </Card>
          </li>
        ))}
      </ul>
    </div>
  )
}

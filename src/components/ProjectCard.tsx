import { ArrowUpRight } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface Project {
  id: string
  title: string
  description: string
  tags: Array<string>
  year: string
}

interface ProjectCardProps {
  project: Project
  className?: string
}

export function ProjectCard({ project, className }: ProjectCardProps) {
  return (
    <Card
      className={cn(
        "group relative overflow-hidden border-border bg-card transition-colors hover:border-foreground/20",
        className
      )}
    >
      <CardContent className="p-0">
        <div className="flex flex-col">
          <div className="flex items-start justify-between border-b border-border p-6">
            <div className="flex items-center gap-4">
              <span className="font-mono text-xs text-muted-foreground">
                {project.id}
              </span>
              <h3 className="text-lg font-medium">{project.title}</h3>
            </div>
            <ArrowUpRight className="size-5 text-muted-foreground transition-colors group-hover:text-foreground" />
          </div>

          <div className="p-6">
            <p className="text-sm leading-relaxed text-muted-foreground">
              {project.description}
            </p>
          </div>

          <div className="flex items-center justify-between border-t border-border px-6 py-4">
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
            <span className="font-mono text-xs text-muted-foreground">
              {project.year}
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

import { ArrowUpRight } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface Project {
  id: string
  title: string
  description: string
  tags: Array<string>
  year: string
  image?: string
  color?: string
}

interface ProjectCardProps {
  project: Project
  className?: string
}

export function ProjectCard({ project, className }: ProjectCardProps) {
  return (
    <Card
      className={cn(
        "group relative overflow-hidden border-border bg-card transition-all duration-300 hover:border-foreground/20 hover:shadow-lg",
        className
      )}
    >
      <CardContent className="p-0">
        <div className="flex flex-col">
          {/* Screenshot/Image Section */}
          <div className="relative aspect-video w-full overflow-hidden bg-gradient-to-br from-muted to-muted/50">
            {project.image ? (
              <img
                src={project.image}
                alt={`${project.title} screenshot`}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            ) : (
              <div
                className={cn(
                  "flex h-full w-full items-center justify-center",
                  project.color ||
                    "bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900"
                )}
              >
                <div className="text-center">
                  <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/80 shadow-sm dark:bg-black/40">
                    <span className="font-mono text-2xl font-bold text-muted-foreground">
                      {project.id}
                    </span>
                  </div>
                  <span className="text-sm font-medium text-muted-foreground">
                    {project.title}
                  </span>
                </div>
              </div>
            )}
            {/* Overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </div>

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

import { cn } from "@/lib/utils"

interface SectionHeaderProps {
  label?: string
  title: string
  description?: string
  align?: "left" | "center"
  className?: string
}

export function SectionHeader({
  label,
  title,
  description,
  align = "left",
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn("mb-16", align === "center" && "text-center", className)}
    >
      {label && (
        <span className="mb-4 inline-block font-mono text-xs tracking-wider text-muted-foreground uppercase">
          {label}
        </span>
      )}
      <h2
        className={cn(
          "text-3xl font-medium tracking-tight sm:text-4xl",
          align === "center" && "mx-auto max-w-2xl"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-4 text-base text-muted-foreground",
            align === "center" ? "mx-auto max-w-xl" : "max-w-lg"
          )}
        >
          {description}
        </p>
      )}
    </div>
  )
}

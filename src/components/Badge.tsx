import { cn } from "@/lib/utils"

interface BadgeProps {
  children: React.ReactNode
  variant?: "default" | "outline" | "secondary"
  className?: string
}

export function Badge({
  children,
  variant = "default",
  className,
}: BadgeProps) {
  const variants = {
    default: "bg-primary text-primary-foreground",
    outline: "border border-border bg-transparent text-foreground",
    secondary: "bg-secondary text-secondary-foreground",
  }

  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1.5 text-xs font-medium",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  )
}

import type { VariantProps } from "class-variance-authority"
import { cva } from "class-variance-authority"

import { cn } from "@/lib/utils"

const sectionVariants = cva("w-full", {
  variants: {
    variant: {
      default: "",
      muted: "bg-muted",
      primary: "bg-primary text-primary-foreground",
      card: "bg-card",
    },
    spacing: {
      default: "py-16 md:py-24",
      sm: "py-12 md:py-16",
      lg: "py-20 md:py-32 lg:py-48",
    },
  },
  defaultVariants: {
    variant: "default",
    spacing: "default",
  },
})

interface SectionProps extends VariantProps<typeof sectionVariants> {
  children: React.ReactNode
  className?: string
  id?: string
}

export function Section({
  children,
  variant,
  spacing,
  className,
  id,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(sectionVariants({ variant, spacing }), className)}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  )
}

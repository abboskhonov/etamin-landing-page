import { useState } from "react"
import { ChevronDown } from "lucide-react"

import { cn } from "@/lib/utils"

interface FAQItem {
  question: string
  answer: string
}

interface FAQSectionProps {
  items: Array<FAQItem>
  className?: string
}

export function FAQSection({ items, className }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className={cn("space-y-4", className)}>
      {items.map((item, index) => (
        <div
          key={index}
          className="border border-border bg-background transition-colors hover:bg-muted/50"
        >
          <button
            onClick={() => toggleItem(index)}
            className="flex w-full items-center justify-between p-6 text-left"
            aria-expanded={openIndex === index}
          >
            <span className="text-base font-medium">{item.question}</span>
            <ChevronDown
              className={cn(
                "size-5 shrink-0 text-muted-foreground transition-transform duration-200",
                openIndex === index && "rotate-180"
              )}
            />
          </button>
          <div
            className={cn(
              "overflow-hidden transition-all duration-200",
              openIndex === index ? "max-h-96" : "max-h-0"
            )}
          >
            <div className="border-t border-border px-6 pt-4 pb-6">
              <p className="text-sm leading-relaxed text-muted-foreground">
                {item.answer}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

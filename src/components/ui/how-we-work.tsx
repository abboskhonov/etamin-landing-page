import { useState } from "react"
import { ChevronRight, MessageSquare, Code, Rocket, Wrench } from "lucide-react"
import { Container } from "@/components/Container"
import { cn } from "@/lib/utils"

const steps = [
  {
    step: "01",
    icon: MessageSquare,
    title: "Discovery",
    description:
      "We dive deep into your business, goals, and technical requirements. Understanding the full picture is crucial.",
  },
  {
    step: "02",
    icon: Code,
    title: "Design & Development",
    description:
      "Agile sprints with daily standups. You see progress every week, not months later.",
  },
  {
    step: "03",
    icon: Rocket,
    title: "Launch",
    description:
      "Production-ready code, comprehensive documentation, and a smooth handoff process.",
  },
  {
    step: "04",
    icon: Wrench,
    title: "Support",
    description:
      "We're with you post-launch. Bug fixes, updates, and ongoing optimization.",
  },
]

const PlusIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    width={20}
    height={20}
    strokeWidth="1"
    stroke="currentColor"
    className={cn("size-5 text-[#111]", className)}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
  </svg>
)

export function HowWeWorkSection() {
  const [activeStep, setActiveStep] = useState(0)

  return (
    <section className="w-full border-t border-[#e5e5e5] py-20 md:py-32">
      <Container>
        {/* Header */}
        <div className="mb-16 text-center">
          <span className="text-sm font-medium text-[#2563eb]">
            Our Process
          </span>
          <h2 className="mt-4 text-3xl font-bold text-[#111] md:text-4xl">
            How we work
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[#666]">
            A proven methodology refined over 10+ years. Transparent, efficient,
            and designed to deliver results.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((item, index) => (
            <div
              key={item.step}
              className={cn(
                "relative rounded-xl border border-dashed border-[#d4d4d4] bg-white p-8",
                "group cursor-pointer transition-all",
                activeStep === index
                  ? "border-[#2563eb] shadow-lg ring-1 ring-[#2563eb]"
                  : "hover:border-[#2563eb]"
              )}
              onClick={() => setActiveStep(index)}
            >
              <PlusIcon className="absolute -top-2.5 -left-2.5" />
              <PlusIcon className="absolute -top-2.5 -right-2.5" />
              <PlusIcon className="absolute -bottom-2.5 -left-2.5" />
              <PlusIcon className="absolute -right-2.5 -bottom-2.5" />

              <div className="mb-4 flex items-center gap-3">
                <span
                  className={cn(
                    "text-4xl font-bold",
                    activeStep === index ? "text-[#2563eb]" : "text-[#e5e5e5]"
                  )}
                >
                  {item.step}
                </span>
                <div className="h-px flex-1 bg-[#e5e5e5]" />
                <div
                  className={cn(
                    "flex h-10 w-10 items-center justify-center rounded-lg",
                    activeStep === index ? "bg-[#2563eb]/10" : "bg-[#f5f5f5]"
                  )}
                >
                  <item.icon
                    className={cn(
                      "size-5",
                      activeStep === index ? "text-[#2563eb]" : "text-[#666]"
                    )}
                  />
                </div>
              </div>

              <h3 className="mb-2 text-lg font-bold text-[#111]">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-[#666]">
                {item.description}
              </p>

              {index < steps.length - 1 && (
                <div className="absolute top-1/2 -right-3 z-10 hidden translate-x-full lg:block">
                  <ChevronRight className="size-6 text-[#d4d4d4]" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Connection line for desktop */}
        <div className="relative mt-8 hidden lg:block">
          <div className="absolute top-0 right-[12.5%] left-[12.5%] h-px bg-[#e5e5e5]" />
          <div
            className="absolute top-0 left-[12.5%] h-px bg-[#2563eb] transition-all duration-500"
            style={{ width: `${(activeStep + 1) * 25}%` }}
          />
        </div>
      </Container>
    </section>
  )
}

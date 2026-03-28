import { useState } from "react"
import { ChevronDown, HelpCircle } from "lucide-react"
import { Container } from "@/components/Container"
import { cn } from "@/lib/utils"

const faqs = [
  {
    question: "What types of projects do you specialize in?",
    answer:
      "We specialize in enterprise web applications, fintech platforms, healthcare systems, AI/ML integrations, and complex data platforms. Our expertise spans React, Node.js, Python, cloud infrastructure (AWS, GCP, Azure), and modern databases.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Project timelines vary based on scope and complexity. A typical MVP takes 8-12 weeks, while full enterprise applications range from 4-6 months. We work in agile sprints with weekly deliverables so you see progress continuously.",
  },
  {
    question: "What is your pricing model?",
    answer:
      "We offer both fixed-price projects and retainer-based engagements. Fixed-price works well for defined scope projects, while retainers are ideal for ongoing development needs. We provide detailed estimates after the discovery phase.",
  },
  {
    question: "Do you provide ongoing support and maintenance?",
    answer:
      "Absolutely. We offer comprehensive support packages including bug fixes, security updates, performance optimization, and feature development. Many clients continue working with us long after the initial launch.",
  },
  {
    question: "How do you handle project communication?",
    answer:
      "Transparency is key. You'll have a dedicated project manager, daily standups (if desired), weekly progress reports, and access to our project management tools. We use Slack, Notion, and regular video calls to keep you in the loop.",
  },
  {
    question: "Can you work with our existing team?",
    answer:
      "Yes, we excel at collaborative development. Whether you need us to augment your team, lead development, or work independently, we adapt to your workflow and integrate seamlessly with your processes.",
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

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="w-full border-t border-[#e5e5e5] py-20 md:py-32">
      <Container>
        <div className="grid gap-12 lg:grid-cols-5">
          {/* Left side - Header */}
          <div className="lg:col-span-2">
            <div
              className={cn(
                "relative rounded-xl border border-dashed border-[#d4d4d4] bg-white p-8",
                "transition-all hover:border-[#2563eb]"
              )}
            >
              <PlusIcon className="absolute -top-2.5 -left-2.5" />
              <PlusIcon className="absolute -top-2.5 -right-2.5" />
              <PlusIcon className="absolute -bottom-2.5 -left-2.5" />
              <PlusIcon className="absolute -right-2.5 -bottom-2.5" />

              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-[#2563eb]/10">
                <HelpCircle className="size-6 text-[#2563eb]" />
              </div>

              <span className="text-sm font-medium text-[#2563eb]">FAQ</span>
              <h2 className="mt-4 text-3xl font-bold text-[#111]">
                Frequently asked questions
              </h2>
              <p className="mt-4 text-[#666]">
                Everything you need to know about working with us. Can't find
                what you're looking for? Feel free to reach out.
              </p>
            </div>
          </div>

          {/* Right side - Accordion */}
          <div className="space-y-4 lg:col-span-3">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={cn(
                  "relative overflow-hidden rounded-xl border border-dashed bg-white",
                  openIndex === index
                    ? "border-[#2563eb]"
                    : "border-[#d4d4d4] hover:border-[#2563eb]",
                  "transition-all"
                )}
              >
                <PlusIcon
                  className={cn(
                    "absolute -top-2.5 -left-2.5 z-10",
                    openIndex === index && "text-[#2563eb]"
                  )}
                />
                <PlusIcon
                  className={cn(
                    "absolute -top-2.5 -right-2.5 z-10",
                    openIndex === index && "text-[#2563eb]"
                  )}
                />
                <PlusIcon
                  className={cn(
                    "absolute -bottom-2.5 -left-2.5 z-10",
                    openIndex === index && "text-[#2563eb]"
                  )}
                />
                <PlusIcon
                  className={cn(
                    "absolute -right-2.5 -bottom-2.5 z-10",
                    openIndex === index && "text-[#2563eb]"
                  )}
                />

                <button
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  className="flex w-full items-center justify-between p-6 text-left"
                >
                  <span className="pr-4 font-semibold text-[#111]">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={cn(
                      "size-5 shrink-0 text-[#666] transition-transform",
                      openIndex === index && "rotate-180 text-[#2563eb]"
                    )}
                  />
                </button>

                <div
                  className={cn(
                    "overflow-hidden transition-all",
                    openIndex === index ? "max-h-96" : "max-h-0"
                  )}
                >
                  <div className="px-6 pb-6">
                    <div className="mb-4 h-px bg-[#e5e5e5]" />
                    <p className="leading-relaxed text-[#666]">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}

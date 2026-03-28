import { Star, Quote } from "lucide-react"
import { Container } from "@/components/Container"
import { cn } from "@/lib/utils"

const testimonials = [
  {
    quote:
      "Etamin delivered our fintech platform 2 weeks early. The code quality exceeded our expectations, and their team's expertise in financial regulations was invaluable.",
    author: "Michael Chen",
    role: "CTO at FlowFinance",
    rating: 5,
    featured: true,
  },
  {
    quote:
      "Working with Etamin felt like having an in-house team. They understood our healthcare compliance needs and built a HIPAA-compliant patient management system.",
    author: "Sarah Williams",
    role: "Director of IT at HealthPlus",
    rating: 5,
    featured: false,
  },
  {
    quote:
      "The AI recommendation engine they built increased our conversion rate by 340%. Impressive results and great communication throughout.",
    author: "David Park",
    role: "Head of Product at ShopAI",
    rating: 5,
    featured: true,
  },
  {
    quote:
      "Professional, fast, and genuinely committed to our success. Etamin rebuilt our legacy system with zero downtime.",
    author: "Emma Rodriguez",
    role: "VP Engineering at DataCorp",
    rating: 5,
    featured: false,
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

export function TestimonialsSection() {
  return (
    <section className="w-full border-t border-[#e5e5e5] bg-white py-20 md:py-32">
      <Container>
        {/* Header */}
        <div className="mb-16 text-center">
          <span className="text-sm font-medium text-[#2563eb]">
            Testimonials
          </span>
          <h2 className="mt-4 text-3xl font-bold text-[#111] md:text-4xl">
            Loved by teams worldwide
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[#666]">
            Don't just take our word for it. Here's what our clients say about
            working with us.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Featured testimonial - spans 2 columns */}
          <div
            className={cn(
              "relative rounded-xl border border-dashed border-[#d4d4d4] bg-[#fafafa] p-8 md:col-span-2 lg:col-span-2",
              "transition-all hover:border-[#2563eb] hover:shadow-lg"
            )}
          >
            <PlusIcon className="absolute -top-2.5 -left-2.5" />
            <PlusIcon className="absolute -top-2.5 -right-2.5" />
            <PlusIcon className="absolute -bottom-2.5 -left-2.5" />
            <PlusIcon className="absolute -right-2.5 -bottom-2.5" />

            <Quote className="mb-4 size-8 text-[#2563eb] opacity-50" />

            <p className="mb-6 text-lg leading-relaxed text-[#111]">
              "{testimonials[0].quote}"
            </p>

            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#2563eb]/10">
                <span className="font-semibold text-[#2563eb]">
                  {testimonials[0].author
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </span>
              </div>
              <div>
                <p className="font-semibold text-[#111]">
                  {testimonials[0].author}
                </p>
                <p className="text-sm text-[#666]">{testimonials[0].role}</p>
              </div>
              <div className="ml-auto flex gap-0.5">
                {Array.from({ length: testimonials[0].rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="size-4 fill-[#2563eb] text-[#2563eb]"
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Second testimonial */}
          <div
            className={cn(
              "relative rounded-xl border border-dashed border-[#d4d4d4] bg-[#fafafa] p-6",
              "transition-all hover:border-[#2563eb] hover:shadow-lg"
            )}
          >
            <PlusIcon className="absolute -top-2.5 -left-2.5" />
            <PlusIcon className="absolute -top-2.5 -right-2.5" />
            <PlusIcon className="absolute -bottom-2.5 -left-2.5" />
            <PlusIcon className="absolute -right-2.5 -bottom-2.5" />

            <Quote className="mb-3 size-6 text-[#2563eb] opacity-50" />

            <p className="mb-4 text-sm leading-relaxed text-[#111]">
              "{testimonials[1].quote}"
            </p>

            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#2563eb]/10">
                <span className="text-sm font-semibold text-[#2563eb]">
                  {testimonials[1].author
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </span>
              </div>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-semibold text-[#111]">
                  {testimonials[1].author}
                </p>
                <p className="truncate text-xs text-[#666]">
                  {testimonials[1].role}
                </p>
              </div>
            </div>
          </div>

          {/* Third testimonial */}
          <div
            className={cn(
              "relative rounded-xl border border-dashed border-[#d4d4d4] bg-[#fafafa] p-6",
              "transition-all hover:border-[#2563eb] hover:shadow-lg"
            )}
          >
            <PlusIcon className="absolute -top-2.5 -left-2.5" />
            <PlusIcon className="absolute -top-2.5 -right-2.5" />
            <PlusIcon className="absolute -bottom-2.5 -left-2.5" />
            <PlusIcon className="absolute -right-2.5 -bottom-2.5" />

            <Quote className="mb-3 size-6 text-[#2563eb] opacity-50" />

            <p className="mb-4 text-sm leading-relaxed text-[#111]">
              "{testimonials[3].quote}"
            </p>

            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#2563eb]/10">
                <span className="text-sm font-semibold text-[#2563eb]">
                  {testimonials[3].author
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </span>
              </div>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-semibold text-[#111]">
                  {testimonials[3].author}
                </p>
                <p className="truncate text-xs text-[#666]">
                  {testimonials[3].role}
                </p>
              </div>
            </div>
          </div>

          {/* Fourth featured testimonial - spans 2 columns */}
          <div
            className={cn(
              "relative rounded-xl border border-dashed border-[#d4d4d4] bg-[#fafafa] p-8 md:col-span-2",
              "transition-all hover:border-[#2563eb] hover:shadow-lg"
            )}
          >
            <PlusIcon className="absolute -top-2.5 -left-2.5" />
            <PlusIcon className="absolute -top-2.5 -right-2.5" />
            <PlusIcon className="absolute -bottom-2.5 -left-2.5" />
            <PlusIcon className="absolute -right-2.5 -bottom-2.5" />

            <Quote className="mb-4 size-8 text-[#2563eb] opacity-50" />

            <p className="mb-6 text-lg leading-relaxed text-[#111]">
              "{testimonials[2].quote}"
            </p>

            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#2563eb]/10">
                <span className="font-semibold text-[#2563eb]">
                  {testimonials[2].author
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </span>
              </div>
              <div>
                <p className="font-semibold text-[#111]">
                  {testimonials[2].author}
                </p>
                <p className="text-sm text-[#666]">{testimonials[2].role}</p>
              </div>
              <div className="ml-auto flex gap-0.5">
                {Array.from({ length: testimonials[2].rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="size-4 fill-[#2563eb] text-[#2563eb]"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ArrowRightIcon, PhoneCallIcon } from "lucide-react"
import { LogoCloud } from "@/components/ui/logo-cloud-3"
import { Container } from "@/components/Container"

export function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden border-b border-[#e5e5e5] bg-[#fafafa]">
      {/* Top Gradient */}
      <div
        aria-hidden="true"
        className="absolute inset-0 hidden overflow-hidden lg:block"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#2563eb]/5 via-transparent to-transparent" />
      </div>

      {/* Grid Pattern Background */}
      <div aria-hidden="true" className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      {/* Vertical Decorative Lines */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 hidden lg:block"
      >
        <div className="absolute inset-y-0 left-[8%] w-px bg-gradient-to-b from-transparent via-[#e5e5e5] to-transparent" />
        <div className="absolute inset-y-0 right-[8%] w-px bg-gradient-to-b from-transparent via-[#e5e5e5] to-transparent" />
      </div>

      {/* Main Content */}
      <Container>
        <div className="relative flex flex-col items-center justify-center gap-6 py-20 md:py-28 lg:py-32">
          {/* Badge */}
          <div
            className={cn(
              "animate-in duration-700 fill-mode-backwards fade-in slide-in-from-bottom-4",
              "flex items-center gap-2 rounded-full border border-[#e5e5e5] bg-white px-4 py-1.5 shadow-sm"
            )}
          >
            <span className="flex h-2 w-2 rounded-full bg-green-500" />
            <span className="text-sm text-[#666]">
              Available for new projects
            </span>
          </div>

          {/* Headline */}
          <h1
            className={cn(
              "max-w-4xl animate-in text-center delay-100 duration-700 fill-mode-backwards fade-in slide-in-from-bottom-4",
              "text-4xl font-semibold tracking-tight text-[#111] md:text-5xl lg:text-6xl"
            )}
          >
            We build software
            <br />
            <span className="relative">
              that matters
              <svg
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 300 12"
                fill="none"
              >
                <path
                  d="M2 8C50 4 100 4 298 8"
                  stroke="#2563eb"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h1>

          {/* Description */}
          <p
            className={cn(
              "max-w-xl animate-in text-center text-lg text-[#666] delay-200 duration-700 fill-mode-backwards fade-in slide-in-from-bottom-4"
            )}
          >
            Etamin is a software development studio focused on creating
            high-performance applications for ambitious teams worldwide.
          </p>

          {/* CTAs */}
          <div
            className={cn(
              "flex animate-in flex-col items-center gap-4 pt-2 delay-300 duration-700 fill-mode-backwards fade-in slide-in-from-bottom-4",
              "sm:flex-row"
            )}
          >
            <Button
              className="rounded-full bg-[#2563eb] px-8 text-white shadow-lg shadow-[#2563eb]/20 hover:bg-[#1d4ed8]"
              size="lg"
            >
              Get started
              <ArrowRightIcon className="ml-2 size-4" />
            </Button>
            <Button
              className="rounded-full border-[#d4d4d4] bg-white px-8 text-[#111] hover:bg-[#f5f5f5]"
              size="lg"
              variant="outline"
            >
              <PhoneCallIcon className="mr-2 size-4" />
              Book a Call
            </Button>
          </div>

          {/* Stats */}
          <div
            className={cn(
              "flex animate-in items-center gap-8 pt-8 delay-500 duration-700 fill-mode-backwards fade-in slide-in-from-bottom-4"
            )}
          >
            {[
              { value: "50+", label: "Projects" },
              { value: "10+", label: "Years" },
              { value: "99%", label: "Satisfaction" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl font-bold text-[#111]">
                  {stat.value}
                </div>
                <div className="text-sm text-[#666]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}

export function LogosSection() {
  return (
    <section className="w-full border-b border-[#e5e5e5] bg-[#fafafa] py-8">
      <Container>
        <h2 className="mb-6 text-center text-sm font-medium tracking-tight text-[#666]">
          Trusted by <span className="text-[#111]">industry leaders</span>
        </h2>
        <div className="relative z-10">
          <LogoCloud logos={logos} />
        </div>
      </Container>
    </section>
  )
}

const logos = [
  {
    src: "https://storage.efferd.com/logo/nvidia-wordmark.svg",
    alt: "Nvidia Logo",
  },
  {
    src: "https://storage.efferd.com/logo/supabase-wordmark.svg",
    alt: "Supabase Logo",
  },
  {
    src: "https://storage.efferd.com/logo/openai-wordmark.svg",
    alt: "OpenAI Logo",
  },
  {
    src: "https://storage.efferd.com/logo/turso-wordmark.svg",
    alt: "Turso Logo",
  },
  {
    src: "https://storage.efferd.com/logo/vercel-wordmark.svg",
    alt: "Vercel Logo",
  },
  {
    src: "https://storage.efferd.com/logo/github-wordmark.svg",
    alt: "GitHub Logo",
  },
  {
    src: "https://storage.efferd.com/logo/claude-wordmark.svg",
    alt: "Claude AI Logo",
  },
  {
    src: "https://storage.efferd.com/logo/clerk-wordmark.svg",
    alt: "Clerk Logo",
  },
]

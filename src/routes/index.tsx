import { createFileRoute, Link } from "@tanstack/react-router"
import {
  ArrowRight,
  Code2,
  Globe,
  Layers,
  Rocket,
  Sparkles,
  Target,
  Users,
  Zap,
} from "lucide-react"

import { Badge } from "@/components/Badge"
import { Container } from "@/components/Container"
import { Section } from "@/components/Section"
import { SectionHeader } from "@/components/SectionHeader"
import { Button } from "@/components/ui/button"
import { ChatWidget } from "@/components/ChatWidget"
import { FAQSection } from "@/components/FAQSection"
import { createRouteHead } from "@/lib/seo"

// Local Business Schema for homepage
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Etamin Software Development",
  url: "https://etamin.uz",
  logo: "https://etamin.uz/android-chrome-512x512.png",
  description:
    "Premium software development company specializing in enterprise applications, SaaS platforms, and digital transformation solutions.",
  address: {
    "@type": "PostalAddress",
    addressCountry: "UZ",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "41.2995",
    longitude: "69.2401",
  },
  telephone: "+998-XX-XXX-XXXX",
  email: "hello@etamin.uz",
  priceRange: "$$$",
  openingHours: "Mo-Fr 09:00-18:00",
  serviceType: [
    "Custom Software Development",
    "Enterprise Software Solutions",
    "SaaS Development",
    "Cloud Infrastructure",
    "API Development",
    "System Architecture",
  ],
  areaServed: {
    "@type": "Country",
    name: "Worldwide",
  },
}

export const Route = createFileRoute("/")({
  component: LandingPage,
  head: () =>
    createRouteHead({
      title:
        "Etamin — Premium Software Development Studio | Enterprise Solutions",
      description:
        "Leading software development company in Uzbekistan. We build high-performance enterprise applications, SaaS platforms, and custom software solutions for ambitious teams worldwide.",
      keywords:
        "software development Uzbekistan, enterprise software, custom software development, SaaS development, React development, Node.js, cloud solutions, digital transformation, web applications, mobile apps, software company Tashkent",
      ogType: "website",
      canonical: "https://etamin.uz",
      structuredData: localBusinessSchema,
    }),
})

const capabilities = [
  {
    icon: Code2,
    title: "Custom Software Development",
    description:
      "End-to-end development of scalable applications tailored to your business requirements.",
  },
  {
    icon: Zap,
    title: "System Architecture",
    description:
      "Designing robust, maintainable architectures that scale with your growth.",
  },
  {
    icon: Layers,
    title: "API & Integration",
    description:
      "Building seamless integrations and APIs that connect your ecosystem.",
  },
  {
    icon: Globe,
    title: "Cloud Infrastructure",
    description:
      "Expert cloud deployment, optimization, and infrastructure management.",
  },
]

function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Top Banner */}
      <div className="w-full border-b border-border bg-muted py-3">
        <Container className="flex items-center justify-center">
          <span className="text-sm text-muted-foreground">
            We are hiring.
            <a
              href="/careers"
              className="ml-1 font-medium text-foreground hover:underline"
            >
              Join our team
              <ArrowRight className="ml-1 inline-block size-3" />
            </a>
          </span>
        </Container>
      </div>

      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-sm">
        <Container className="flex h-16 items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            <img src="/favicon-32x32.png" alt="Etamin" className="h-8 w-8" />
            <span className="text-lg font-medium">Etamin</span>
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            <Link to="/" className="text-sm font-medium text-foreground">
              Home
            </Link>
            <Link
              to="/projects"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Projects
            </Link>
            <Link
              to="/careers"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Careers
            </Link>
            <Link
              to="/contact"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Contact
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            {/* Start Project button removed */}
          </div>
        </Container>
      </header>

      {/* Hero Section */}
      <Section spacing="sm" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-muted/50 to-transparent" />

        <Container className="relative">
          <div className="grid items-start gap-12 lg:grid-cols-5 lg:gap-16">
            {/* Left Column - Text */}
            <div className="max-w-4xl lg:col-span-3">
              <Badge variant="outline" className="mb-8">
                <Sparkles className="mr-1.5 size-3" />
                Software Development Studio
              </Badge>

              <h1 className="text-4xl font-medium tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                We build software
                <br />
                <span className="text-muted-foreground">that matters</span>
              </h1>

              <p className="mt-8 max-w-2xl text-lg text-muted-foreground">
                Etamin is a software development company focused on creating
                high-performance applications and systems for ambitious teams
                and enterprises worldwide.
              </p>

              <div className="mt-12 flex flex-col gap-4 sm:flex-row">
                <Link to="/projects">
                  <Button size="lg" className="gap-2">
                    View Our Work
                    <ArrowRight className="size-4" />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="outline" size="lg">
                    Get in Touch
                  </Button>
                </Link>
              </div>

              {/* Stats */}
              <div className="mt-16 border border-border bg-background shadow-sm">
                <div className="grid grid-cols-2 gap-px bg-border md:grid-cols-4">
                  {[
                    { value: "50+", label: "Projects Delivered" },
                    { value: "10+", label: "Years Experience" },
                    { value: "99%", label: "Client Satisfaction" },
                    { value: "24/7", label: "Support" },
                  ].map((stat) => (
                    <div
                      key={stat.label}
                      className="bg-background p-6 text-center md:p-8"
                    >
                      <div className="text-3xl font-medium sm:text-4xl">
                        {stat.value}
                      </div>
                      <div className="mt-2 text-sm text-muted-foreground">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Chat */}
            <div className="hidden lg:sticky lg:top-24 lg:col-span-2 lg:block">
              <ChatWidget />
            </div>
          </div>
        </Container>
      </Section>

      {/* Capabilities Section */}
      <Section id="services" variant="muted" spacing="lg">
        <Container>
          <SectionHeader
            label="Services"
            title="What we do best"
            description="We deliver end-to-end software solutions with a focus on quality, performance, and scalability."
            align="center"
          />

          <div className="grid gap-px border border-border bg-border md:grid-cols-2">
            {capabilities.map((capability) => (
              <div
                key={capability.title}
                className="group bg-background p-8 transition-colors hover:bg-muted"
              >
                <capability.icon className="size-8 text-muted-foreground transition-colors group-hover:text-foreground" />
                <h3 className="mt-6 text-lg font-medium">{capability.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {capability.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Why Us Section */}
      <Section id="about" spacing="lg">
        <Container>
          <SectionHeader
            label="Why Us"
            title="Why teams choose Etamin"
            description="We're not just developers. We're partners invested in your success."
            align="center"
          />

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {/* Card 1 - Expertise */}
            <div className="group relative overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-background to-muted/50 p-8 transition-all duration-500 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5">
              <div className="absolute -top-8 -right-8 h-32 w-32 rounded-full bg-primary/5 blur-3xl transition-all duration-500 group-hover:scale-150 group-hover:bg-primary/10" />

              <div className="relative">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 text-primary transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                  <Target className="size-7" strokeWidth={1.5} />
                </div>

                <h3 className="mb-3 text-xl font-semibold tracking-tight">
                  Deep Expertise
                </h3>
                <p className="text-[15px] leading-relaxed text-muted-foreground">
                  10+ years building enterprise systems. Complex problem solving
                  across fintech, healthcare, and AI.
                </p>
              </div>

              <div className="relative mt-8 flex items-center justify-between border-t border-border/50 pt-6">
                <span className="font-mono text-sm font-medium text-muted-foreground">
                  01
                </span>
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-muted transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                  <ArrowRight className="size-4 -translate-x-4 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
                </div>
              </div>
            </div>

            {/* Card 2 - Delivery */}
            <div className="group relative overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-background to-muted/50 p-8 transition-all duration-500 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5">
              <div className="absolute -top-8 -right-8 h-32 w-32 rounded-full bg-primary/5 blur-3xl transition-all duration-500 group-hover:scale-150 group-hover:bg-primary/10" />

              <div className="relative">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 text-primary transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                  <Rocket className="size-7" strokeWidth={1.5} />
                </div>

                <h3 className="mb-3 text-xl font-semibold tracking-tight">
                  Rapid Delivery
                </h3>
                <p className="text-[15px] leading-relaxed text-muted-foreground">
                  Agile methodologies with battle-tested architectures. Ship
                  fast without compromising quality.
                </p>
              </div>

              <div className="relative mt-8 flex items-center justify-between border-t border-border/50 pt-6">
                <span className="font-mono text-sm font-medium text-muted-foreground">
                  02
                </span>
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-muted transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                  <ArrowRight className="size-4 -translate-x-4 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
                </div>
              </div>
            </div>

            {/* Card 3 - Partnership */}
            <div className="group relative overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-background to-muted/50 p-8 transition-all duration-500 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5">
              <div className="absolute -top-8 -right-8 h-32 w-32 rounded-full bg-primary/5 blur-3xl transition-all duration-500 group-hover:scale-150 group-hover:bg-primary/10" />

              <div className="relative">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 text-primary transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                  <Users className="size-7" strokeWidth={1.5} />
                </div>

                <h3 className="mb-3 text-xl font-semibold tracking-tight">
                  True Partnership
                </h3>
                <p className="text-[15px] leading-relaxed text-muted-foreground">
                  We embed in your team. Strategic thinking, transparent
                  communication, shared goals.
                </p>
              </div>

              <div className="relative mt-8 flex items-center justify-between border-t border-border/50 pt-6">
                <span className="font-mono text-sm font-medium text-muted-foreground">
                  03
                </span>
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-muted transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                  <ArrowRight className="size-4 -translate-x-4 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* FAQ Section */}
      <Section id="faq" variant="muted" spacing="lg">
        <Container>
          <SectionHeader
            label="FAQ"
            title="Common questions"
            description="Everything you need to know about working with us."
            align="center"
          />

          <div className="mx-auto max-w-3xl">
            <FAQSection
              items={[
                {
                  question: "What is your development process?",
                  answer:
                    "We follow an agile methodology with two-week sprints. Each project starts with a discovery phase where we understand your requirements, followed by design, development, testing, and deployment. We maintain transparent communication throughout with regular check-ins and demos.",
                },
                {
                  question: "How long does a typical project take?",
                  answer:
                    "Project timelines vary based on complexity. A simple MVP typically takes 6-8 weeks, while more complex enterprise systems can take 3-6 months. We provide detailed timelines during our initial consultation and keep you updated on progress throughout.",
                },
                {
                  question: "What technologies do you work with?",
                  answer:
                    "We specialize in modern web technologies including React, Next.js, Node.js, Python, PostgreSQL, and cloud platforms like AWS and GCP. We choose the best tech stack based on your specific requirements, scalability needs, and team capabilities.",
                },
                {
                  question: "Do you provide ongoing support?",
                  answer:
                    "Yes, we offer comprehensive maintenance and support packages. This includes bug fixes, security updates, performance monitoring, and feature enhancements. We aim to build long-term partnerships with our clients.",
                },
                {
                  question: "How do you handle project communication?",
                  answer:
                    "We use a combination of Slack/Teams for daily communication, weekly video calls for sprint reviews, and project management tools like Linear or Jira for tracking. You will have a dedicated project manager as your main point of contact.",
                },
                {
                  question: "What is your pricing model?",
                  answer:
                    "We offer both fixed-price and time-and-materials models depending on project requirements. Fixed-price works well for defined scopes, while time-and-materials offers flexibility for evolving projects. We provide transparent pricing with no hidden costs.",
                },
              ]}
            />
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section variant="primary" spacing="lg">
        <Container>
          <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">
            <div className="max-w-xl text-center lg:text-left">
              <h2 className="text-3xl font-medium tracking-tight sm:text-4xl">
                Ready to build something great?
              </h2>
              <p className="mt-4 text-primary-foreground/80">
                Let's discuss your project and see how we can help bring your
                vision to life.
              </p>
            </div>
            <Button
              variant="outline"
              size="lg"
              className="border-primary-foreground/20 bg-transparent text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
              Start a Conversation
              <ArrowRight className="ml-2 size-4" />
            </Button>
          </div>
        </Container>
      </Section>

      {/* Footer */}
      <footer className="border-t border-border bg-background">
        <Container className="py-16">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <a href="/" className="flex items-center gap-2">
                <img
                  src="/favicon-32x32.png"
                  alt="Etamin"
                  className="h-8 w-8"
                />
                <span className="text-lg font-medium">Etamin</span>
              </a>
              <p className="mt-4 max-w-sm text-sm text-muted-foreground">
                Building high-performance software for ambitious teams. Based
                worldwide, working globally.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
              <div>
                <h4 className="font-mono text-xs tracking-wider text-muted-foreground uppercase">
                  Company
                </h4>
                <ul className="mt-4 space-y-3">
                  <li>
                    <a
                      href="#"
                      className="text-sm transition-colors hover:text-muted-foreground"
                    >
                      About
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-sm transition-colors hover:text-muted-foreground"
                    >
                      Careers
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-sm transition-colors hover:text-muted-foreground"
                    >
                      Blog
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-mono text-xs tracking-wider text-muted-foreground uppercase">
                  Services
                </h4>
                <ul className="mt-4 space-y-3">
                  <li>
                    <a
                      href="#"
                      className="text-sm transition-colors hover:text-muted-foreground"
                    >
                      Development
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-sm transition-colors hover:text-muted-foreground"
                    >
                      Architecture
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-sm transition-colors hover:text-muted-foreground"
                    >
                      Consulting
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-mono text-xs tracking-wider text-muted-foreground uppercase">
                  Connect
                </h4>
                <ul className="mt-4 space-y-3">
                  <li>
                    <a
                      href="#"
                      className="text-sm transition-colors hover:text-muted-foreground"
                    >
                      Twitter
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-sm transition-colors hover:text-muted-foreground"
                    >
                      GitHub
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-sm transition-colors hover:text-muted-foreground"
                    >
                      LinkedIn
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
            <p className="text-xs text-muted-foreground">
              © 2025 Etamin. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a
                href="#"
                className="text-xs text-muted-foreground transition-colors hover:text-foreground"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-xs text-muted-foreground transition-colors hover:text-foreground"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </Container>
      </footer>
    </div>
  )
}

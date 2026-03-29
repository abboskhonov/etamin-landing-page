import { ArrowRight, Sparkles } from "lucide-react"

import { createFileRoute, Link } from "@tanstack/react-router"

import { Badge } from "@/components/Badge"
import { Container } from "@/components/Container"
import { ProjectCard } from "@/components/ProjectCard"
import { Section } from "@/components/Section"
import { SectionHeader } from "@/components/SectionHeader"
import { Button } from "@/components/ui/button"
import { createRouteHead } from "@/lib/seo"

// ItemList Schema for portfolio
const portfolioSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      item: {
        "@type": "SoftwareApplication",
        name: "Beruniy",
        description:
          "AI dataset company providing production-ready Uzbek speech data for AI training",
        applicationCategory: "DeveloperApplication",
        url: "https://beruniy.uz",
      },
    },
    {
      "@type": "ListItem",
      position: 2,
      item: {
        "@type": "SoftwareApplication",
        name: "Qiymat",
        description:
          "AI startup valuation tool for planning and pricing private companies",
        applicationCategory: "FinanceApplication",
        url: "https://qiymat.talabam.com",
      },
    },
    {
      "@type": "ListItem",
      position: 3,
      item: {
        "@type": "SoftwareApplication",
        name: "Aqlli Aloqa",
        description:
          "AI-powered call center with AI agents for customer support, lead generation, and 24/7 service",
        applicationCategory: "BusinessApplication",
        url: "https://aqllialoqa.uz",
      },
    },
  ],
}

export const Route = createFileRoute("/projects")({
  component: ProjectsPage,
  head: () =>
    createRouteHead({
      title: "Our Projects — Software Development Portfolio | Etamin",
      description:
        "Explore our portfolio of 50+ successful software projects. Enterprise SaaS platforms, fintech solutions, healthcare systems, and custom software development case studies.",
      keywords:
        "software development portfolio, case studies, SaaS projects, enterprise software examples, custom software solutions, React projects, successful software development",
      ogType: "website",
      canonical: "https://etamin.uz/projects",
      structuredData: portfolioSchema,
    }),
})

const projects = [
  {
    id: "01",
    title: "Beruniy",
    description:
      "AI dataset company providing production-ready Uzbek speech data. From native Uzbek podcasts to verified, segmented, multi-speaker datasets engineered for AI training.",
    tags: ["AI/ML", "Dataset", "Speech Recognition", "Uzbek Language"],
    year: "2025",
    image: "/beruniy.webp",
    link: "https://beruniy.uz",
    color:
      "bg-gradient-to-br from-violet-50 to-purple-100 dark:from-violet-950/30 dark:to-purple-900/30",
  },
  {
    id: "02",
    title: "Qiymat",
    description:
      "AI startup valuation tool purpose-built for planning and pricing private companies. The valuation intelligence system for funds and agents, designed for the AI era.",
    tags: ["AI/ML", "Fintech", "Valuation", "Private Markets"],
    year: "2025",
    image: "/qiymat.webp",
    link: "https://qiymat.talabam.com",
    color:
      "bg-gradient-to-br from-slate-100 to-zinc-200 dark:from-slate-900 dark:to-zinc-950",
  },
  {
    id: "03",
    title: "Aqlli Aloqa",
    description:
      "AI-powered call center with AI voice agents for customer support. Automates customer calls in Uzbek language with 24/7 availability, lead generation, and real-time sentiment analysis.",
    tags: ["AI/ML", "Customer Support", "Voice AI", "Uzbek Language"],
    year: "2025",
    image: "/aqllialoqa.webp",
    link: "https://aqllialoqa.uz",
    color:
      "bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-950/30 dark:to-indigo-900/30",
  },
]

function ProjectsPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-sm">
        <Container className="flex h-16 items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            <img src="/favicon-32x32.png" alt="Etamin" className="h-8 w-8" />
            <span className="text-lg font-medium">Etamin</span>
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            <Link
              to="/"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Home
            </Link>
            <Link
              to="/projects"
              className="text-sm font-medium text-foreground"
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
      <Section spacing="lg" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-muted/50 to-transparent" />

        <Container className="relative">
          <div className="max-w-4xl">
            <Badge variant="outline" className="mb-6">
              <Sparkles className="mr-1.5 size-3" />
              Selected Work
            </Badge>

            <h1 className="text-4xl font-medium tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Projects that
              <br />
              <span className="text-muted-foreground">drive results</span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg text-muted-foreground">
              A selection of our recent work. Each project represents a
              partnership with ambitious teams solving complex problems at
              scale.
            </p>
          </div>
        </Container>
      </Section>

      {/* Projects Grid */}
      <Section variant="muted" spacing="lg">
        <Container>
          <SectionHeader
            label="Case Studies"
            title="Recent work"
            description="Explore our portfolio of high-performance applications and systems."
          />

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </Container>
      </Section>

      {/* Stats Section */}
      <Section spacing="lg">
        <Container>
          <div className="grid grid-cols-2 gap-px border border-border bg-border md:grid-cols-4">
            {[
              { value: "50+", label: "Projects Delivered" },
              { value: "10M+", label: "Users Served" },
              { value: "99.9%", label: "Uptime Achieved" },
              { value: "40%", label: "Avg. Performance Gain" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-background p-8 text-center md:p-10"
              >
                <div className="text-4xl font-medium tracking-tight">
                  {stat.value}
                </div>
                <div className="mt-2 text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section variant="primary" spacing="lg">
        <Container>
          <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">
            <div className="max-w-xl text-center lg:text-left">
              <h2 className="text-3xl font-medium tracking-tight sm:text-4xl">
                Have a project in mind?
              </h2>
              <p className="mt-4 text-primary-foreground/80">
                Let's discuss how we can help bring your vision to life with the
                same quality and performance.
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
                      href="/"
                      className="text-sm transition-colors hover:text-muted-foreground"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="/projects"
                      className="text-sm transition-colors hover:text-muted-foreground"
                    >
                      Projects
                    </a>
                  </li>
                  <li>
                    <a
                      href="/careers"
                      className="text-sm transition-colors hover:text-muted-foreground"
                    >
                      Careers
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

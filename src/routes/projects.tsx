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
        name: "Nexus Platform",
        description:
          "Enterprise SaaS platform for resource planning with 100K+ daily users",
        applicationCategory: "BusinessApplication",
      },
    },
    {
      "@type": "ListItem",
      position: 2,
      item: {
        "@type": "SoftwareApplication",
        name: "Quantum Analytics",
        description:
          "Real-time data analytics dashboard for financial institutions",
        applicationCategory: "FinanceApplication",
      },
    },
    {
      "@type": "ListItem",
      position: 3,
      item: {
        "@type": "SoftwareApplication",
        name: "Pulse Health",
        description: "HIPAA-compliant healthcare management system",
        applicationCategory: "HealthApplication",
      },
    },
    {
      "@type": "ListItem",
      position: 4,
      item: {
        "@type": "SoftwareApplication",
        name: "Velocity Commerce",
        description:
          "High-performance e-commerce platform processing 50K+ orders daily",
        applicationCategory: "BusinessApplication",
      },
    },
    {
      "@type": "ListItem",
      position: 5,
      item: {
        "@type": "SoftwareApplication",
        name: "Synapse AI",
        description: "Machine learning infrastructure platform",
        applicationCategory: "DeveloperApplication",
      },
    },
    {
      "@type": "ListItem",
      position: 6,
      item: {
        "@type": "SoftwareApplication",
        name: "Atlas Maps",
        description: "Geospatial mapping and analysis platform",
        applicationCategory: "TravelApplication",
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
    title: "Nexus Platform",
    description:
      "A comprehensive SaaS platform for enterprise resource planning. Built with React, Node.js, and PostgreSQL. Handles 100K+ daily active users with sub-100ms response times.",
    tags: ["React", "Node.js", "PostgreSQL", "AWS"],
    year: "2024",
    image: "/assets/images/project-nexus-platform.webp",
    color:
      "bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-950/30 dark:to-indigo-900/30",
  },
  {
    id: "02",
    title: "Quantum Analytics",
    description:
      "Real-time data analytics dashboard for financial institutions. Processes millions of transactions per second with advanced visualization capabilities.",
    tags: ["TypeScript", "Python", "ClickHouse", "D3.js"],
    year: "2024",
    image: "/assets/images/project-quantum-analytics.webp",
    color:
      "bg-gradient-to-br from-slate-100 to-zinc-200 dark:from-slate-900 dark:to-zinc-950",
  },
  {
    id: "03",
    title: "Pulse Health",
    description:
      "Healthcare management system connecting patients, providers, and insurers. HIPAA-compliant with end-to-end encryption and audit logging.",
    tags: ["Next.js", "Go", "MongoDB", "Kubernetes"],
    year: "2023",
    image: "/assets/images/project-pulse-health.webp",
    color:
      "bg-gradient-to-br from-emerald-50 to-teal-100 dark:from-emerald-950/30 dark:to-teal-900/30",
  },
  {
    id: "04",
    title: "Velocity Commerce",
    description:
      "High-performance e-commerce platform with real-time inventory management. Processes 50K+ orders daily with 99.99% uptime.",
    tags: ["Remix", "Rust", "Redis", "Stripe"],
    year: "2023",
    image: "/assets/images/project-velocity-commerce.webp",
    color:
      "bg-gradient-to-br from-orange-50 to-amber-100 dark:from-orange-950/30 dark:to-amber-900/30",
  },
  {
    id: "05",
    title: "Synapse AI",
    description:
      "Machine learning infrastructure platform for model training and deployment. Reduces ML pipeline setup time from weeks to hours.",
    tags: ["Python", "TensorFlow", "Ray", "GCP"],
    year: "2023",
    image: "/assets/images/project-synapse-ai.webp",
    color:
      "bg-gradient-to-br from-violet-50 to-purple-100 dark:from-violet-950/30 dark:to-purple-900/30",
  },
  {
    id: "06",
    title: "Atlas Maps",
    description:
      "Custom mapping and geospatial analysis platform. Renders millions of data points with smooth interactions and custom tile servers.",
    tags: ["Vue.js", "Mapbox", "PostGIS", "FastAPI"],
    year: "2022",
    image: "/assets/images/project-atlas-maps.webp",
    color:
      "bg-gradient-to-br from-cyan-50 to-sky-100 dark:from-cyan-950/30 dark:to-sky-900/30",
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
            <a
              href="/#services"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Services
            </a>
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
            <Button size="sm">Start Project</Button>
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

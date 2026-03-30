import { Outlet, createFileRoute, Link } from "@tanstack/react-router"
import { ArrowRight, Briefcase, MapPin, Sparkles } from "lucide-react"

import { Container } from "@/components/Container"
import { Section } from "@/components/Section"
import { SectionHeader } from "@/components/SectionHeader"
import { Button } from "@/components/ui/button"
import {
  createRouteHead,
  generateBreadcrumb,
  generateAlternateLanguages,
} from "@/lib/seo"

// JobPosting Schema for Software Engineer position
const jobPostingSchema = {
  "@context": "https://schema.org",
  "@type": "JobPosting",
  title: "Software Engineer",
  description:
    "Join Etamin's world-class software development team in Namangan, Uzbekistan. Work with React, TypeScript, Python on AI-powered projects. Onsite position with competitive benefits.",
  datePosted: "2025-03-30",
  validThrough: "2025-12-31",
  employmentType: "FULL_TIME",
  hiringOrganization: {
    "@type": "Organization",
    name: "Etamin",
    sameAs: "https://etamin.uz",
    logo: "https://etamin.uz/android-chrome-512x512.png",
  },
  jobLocation: {
    "@type": "Place",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Center City",
      addressLocality: "Namangan",
      addressRegion: "Namangan Region",
      addressCountry: "UZ",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "40.9983",
      longitude: "71.6726",
    },
  },
  jobLocationType: "ONSITE",
  applicantLocationRequirements: {
    "@type": "Country",
    name: "Uzbekistan",
  },
  skills: "React, TypeScript, Python, AI/ML, Git",
  experienceRequirements: "1+ years",
  industry: "Software Development",
  occupationalCategory: "Software Engineer",
}

export const Route = createFileRoute("/careers")({
  component: CareersLayout,
  head: () =>
    createRouteHead({
      title: "Careers — Join Our Software Engineering Team | Etamin Namangan",
      description:
        "Join Etamin's software development team in Namangan, Uzbekistan. Work on AI-powered projects with React, TypeScript, Python. Onsite positions available. Apply now!",
      keywords:
        "software developer jobs Namangan, software jobs Uzbekistan, tech careers Namangan, software engineer hiring, React developer jobs, AI developer jobs, onsite tech positions, Uzbekistan tech jobs",
      ogType: "website",
      canonical: "https://etamin.uz/careers",
      structuredData: jobPostingSchema,
      breadcrumb: generateBreadcrumb("Careers", "https://etamin.uz/careers"),
      alternateLanguages: generateAlternateLanguages("/careers"),
    }),
})

const benefits = [
  {
    title: "Competitive Compensation",
    description: "Top-tier salary, equity, and performance bonuses",
  },
  {
    title: "Onsite in Namangan",
    description: "Work from our modern office in Namangan, Uzbekistan",
  },
  {
    title: "Flexible Hours",
    description: "Core hours with flexibility for your productivity",
  },
  {
    title: "Learning Budget",
    description: "$3,000 annual budget for courses, conferences, and books",
  },
  {
    title: "Health & Wellness",
    description: "Comprehensive health coverage for you and your family",
  },
  {
    title: "Unlimited PTO",
    description: "Take time off when you need it. No questions asked",
  },
]

function CareersLayout() {
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
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Projects
            </Link>
            <Link to="/careers" className="text-sm font-medium text-foreground">
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

      <Outlet />

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
                Building high-performance software for ambitious teams. Based in
                Namangan, Uzbekistan.
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
          </div>
        </Container>
      </footer>
    </div>
  )
}

export function CareersIndex() {
  return (
    <>
      {/* Hero Section */}
      <Section spacing="lg" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-muted/50 to-transparent" />

        <Container className="relative">
          <div className="max-w-4xl">
            <span className="mb-6 inline-block font-mono text-xs tracking-wider text-muted-foreground uppercase">
              Careers
            </span>

            <h1 className="text-4xl font-medium tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Join our team
              <br />
              <span className="text-muted-foreground">Build the future</span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg text-muted-foreground">
              We're building a team of exceptional engineers in Namangan. Join
              us and work on challenging projects for ambitious companies
              worldwide.
            </p>
          </div>
        </Container>
      </Section>

      {/* Benefits Section */}
      <Section variant="muted" spacing="lg">
        <Container>
          <SectionHeader
            label="Benefits"
            title="Why work at Etamin"
            description="We invest in our team because they're our most valuable asset."
            align="center"
          />

          <div className="grid gap-px border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="bg-background p-8">
                <h3 className="text-lg font-medium">{benefit.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Open Position Section */}
      <Section spacing="lg">
        <Container>
          <SectionHeader
            label="Open Position"
            title="We're hiring"
            description="One role. Big impact. Join the squad."
          />

          <a href="/careers/software-engineer" className="block">
            <div className="group border border-border bg-card p-8 transition-all hover:border-foreground/20">
              <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                <div className="flex-1">
                  <div className="mb-3 flex flex-wrap items-center gap-3">
                    <span className="inline-flex items-center gap-1.5 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                      <Sparkles className="size-3" />
                      We're hiring
                    </span>
                    <span className="inline-flex items-center bg-secondary px-2 py-0.5 text-xs font-medium text-secondary-foreground">
                      Engineering
                    </span>
                  </div>

                  <h3 className="text-2xl font-semibold">Software Engineer</h3>

                  <p className="mt-3 max-w-2xl text-sm text-muted-foreground">
                    Join a squad of builders who vibe with AI. 1+ years of
                    experience. React, TypeScript, Python. Experience with
                    coding agents like Claude Code, Cursor, or similar.
                  </p>

                  <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1.5">
                      <MapPin className="size-4" />
                      <span>Onsite — Namangan, Uzbekistan</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Briefcase className="size-4" />
                      <span>Full-time</span>
                    </div>
                  </div>
                </div>

                <Button
                  variant="outline"
                  className="shrink-0 gap-2 transition-colors group-hover:bg-primary group-hover:text-primary-foreground"
                >
                  View Role
                  <ArrowRight className="size-4" />
                </Button>
              </div>
            </div>
          </a>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground">
              Don't see a role that fits?{" "}
              <a
                href="mailto:careers@etamin.dev"
                className="font-medium text-foreground hover:underline"
              >
                Send us your resume
              </a>
            </p>
          </div>
        </Container>
      </Section>
    </>
  )
}

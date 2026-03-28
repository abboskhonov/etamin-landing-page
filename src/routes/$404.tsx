import { Link, createFileRoute } from "@tanstack/react-router"
import {
  ArrowLeft,
  ArrowRight,
  Compass,
  Home,
  Layers,
  MapPin,
  Zap,
} from "lucide-react"

import { Container } from "@/components/Container"
import { Section } from "@/components/Section"
import { Button } from "@/components/ui/button"
import { createRouteHead } from "@/lib/seo"

export const Route = createFileRoute("/$404")({
  component: NotFoundPage,
  head: () =>
    createRouteHead({
      title: "404 — Page Not Found | Etamin",
      description:
        "The page you're looking for doesn't exist. Let us help you find what you need.",
      keywords: "404, page not found, error, lost",
      canonical: "https://etamin.uz",
    }),
})

const quickLinks = [
  {
    icon: Home,
    label: "Homepage",
    description: "Return to our main page",
    href: "/",
  },
  {
    icon: Layers,
    label: "Projects",
    description: "View our work",
    href: "/projects",
  },
  {
    icon: Zap,
    label: "Services",
    description: "What we offer",
    href: "/#services",
  },
  {
    icon: MapPin,
    label: "Contact",
    description: "Get in touch",
    href: "/contact",
  },
]

function NotFoundPage() {
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

      {/* Hero Section with gradient background */}
      <Section spacing="lg" className="relative overflow-hidden py-20 lg:py-28">
        {/* Background gradient effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-muted/50 to-transparent" />
        <div className="absolute top-0 left-1/4 h-96 w-96 -translate-x-1/2 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute right-1/4 bottom-0 h-64 w-64 translate-x-1/2 rounded-full bg-primary/5 blur-3xl" />

        <Container className="relative">
          <div className="mx-auto max-w-2xl text-center">
            {/* 404 Code with animated gradient */}
            <div className="relative mb-8 inline-block">
              <span className="bg-gradient-to-b from-foreground via-foreground/60 to-foreground/30 bg-clip-text text-[10rem] leading-none font-bold tracking-tighter text-transparent sm:text-[12rem]">
                404
              </span>
              {/* Subtle glow effect behind numbers */}
              <div className="absolute inset-0 -z-10 opacity-30 blur-2xl">
                <span className="bg-gradient-to-b from-primary/40 to-transparent bg-clip-text text-[10rem] leading-none font-bold tracking-tighter text-transparent sm:text-[12rem]">
                  404
                </span>
              </div>
            </div>

            {/* Icon in styled container */}
            <div className="mb-8 flex justify-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-2xl border border-border bg-gradient-to-br from-muted to-muted/50 shadow-sm">
                <Compass className="h-10 w-10 text-muted-foreground" />
              </div>
            </div>

            {/* Heading */}
            <h1 className="mb-4 text-3xl font-medium tracking-tight sm:text-4xl lg:text-5xl">
              Page not found
            </h1>

            {/* Description */}
            <p className="mx-auto max-w-lg text-lg text-muted-foreground">
              The page you're looking for doesn't exist or has been moved. Let's
              get you back on track.
            </p>

            {/* Action Buttons with hover effects */}
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link to="/">
                <Button
                  size="lg"
                  className="group gap-2 bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  <Home className="h-4 w-4 transition-transform group-hover:scale-110" />
                  Back to Home
                </Button>
              </Link>
              <Link to="/contact">
                <Button
                  variant="outline"
                  size="lg"
                  className="group gap-2 border-border hover:bg-muted"
                >
                  <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      {/* Quick Links Section */}
      <Section variant="muted" spacing="lg">
        <Container>
          <div className="mx-auto max-w-4xl">
            <p className="mb-8 text-center text-sm font-medium tracking-wider text-muted-foreground uppercase">
              Popular destinations
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              {quickLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="group flex items-center gap-4 rounded-xl border border-border bg-background p-5 transition-all hover:border-foreground/20 hover:bg-accent/50 hover:shadow-sm"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 text-primary transition-transform duration-300 group-hover:scale-110">
                    <link.icon className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h3 className="font-medium">{link.label}</h3>
                      <ArrowRight className="h-4 w-4 text-muted-foreground opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100" />
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {link.description}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Footer */}
      <footer className="border-t border-border bg-background">
        <Container className="py-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
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

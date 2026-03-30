import { useState } from "react"
import { createFileRoute, Link } from "@tanstack/react-router"
import { ArrowRight, Mail, MapPin, Phone, Send, Clock } from "lucide-react"

import { Container } from "@/components/Container"
import { Section } from "@/components/Section"
import { Button } from "@/components/ui/button"
import { createRouteHead } from "@/lib/seo"

// ContactPage Schema
const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact Etamin",
  description: "Get in touch with Etamin software development studio",
  url: "https://etamin.uz/contact",
  mainEntity: {
    "@type": "Organization",
    name: "Etamin",
    address: {
      "@type": "PostalAddress",
      addressCountry: "UZ",
      addressLocality: "Namangan",
      addressRegion: "Namangan Region",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+998-90-663-44-46",
      contactType: "sales",
      availableLanguage: ["English", "Russian", "Uzbek"],
    },
  },
}

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () =>
    createRouteHead({
      title: "Contact Us — Let's Build Something Great | Etamin",
      description:
        "Get in touch with Etamin. Software development studio in Namangan, Uzbekistan. Start your project, request a quote, or just say hello.",
      keywords:
        "contact Etamin, software development quote, hire developers Uzbekistan, Namangan software company, start project",
      ogType: "website",
      canonical: "https://etamin.uz/contact",
      structuredData: contactPageSchema,
    }),
})

interface FormData {
  name: string
  email: string
  company: string
  budget: string
  projectType: string
  message: string
}

function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    budget: "",
    projectType: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSubmitted(true)
  }

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
            <Link to="/contact" className="text-sm font-medium text-foreground">
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
            <h1 className="text-4xl font-medium tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Let's talk
              <br />
              <span className="text-muted-foreground">about your project</span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg text-muted-foreground">
              Whether you have a detailed spec or just an idea, we'd love to
              hear from you. Tell us what you're building and we'll get back to
              you within 24 hours.
            </p>
          </div>
        </Container>
      </Section>

      {/* Contact Section */}
      <Section variant="muted" spacing="lg">
        <Container>
          <div className="grid gap-12 lg:grid-cols-5">
            {/* Contact Form */}
            <div className="lg:col-span-3">
              {isSubmitted ? (
                <div className="border border-border bg-background p-8 text-center">
                  <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center bg-primary text-primary-foreground">
                    <Send className="size-8" />
                  </div>
                  <h3 className="text-2xl font-medium">Message sent!</h3>
                  <p className="mt-4 text-muted-foreground">
                    Thanks for reaching out. We'll get back to you within 24
                    hours.
                  </p>
                  <Button
                    className="mt-8"
                    variant="outline"
                    onClick={() => {
                      setIsSubmitted(false)
                      setFormData({
                        name: "",
                        email: "",
                        company: "",
                        budget: "",
                        projectType: "",
                        message: "",
                      })
                    }}
                  >
                    Send another message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <label
                        htmlFor="name"
                        className="mb-2 block text-sm font-medium"
                      >
                        Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full border border-border bg-background px-4 py-3 text-sm outline-none placeholder:text-muted-foreground focus:border-primary"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="mb-2 block text-sm font-medium"
                      >
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full border border-border bg-background px-4 py-3 text-sm outline-none placeholder:text-muted-foreground focus:border-primary"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <label
                        htmlFor="company"
                        className="mb-2 block text-sm font-medium"
                      >
                        Company
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full border border-border bg-background px-4 py-3 text-sm outline-none placeholder:text-muted-foreground focus:border-primary"
                        placeholder="Acme Inc."
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="budget"
                        className="mb-2 block text-sm font-medium"
                      >
                        Budget Range
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary"
                      >
                        <option value="">Select budget range</option>
                        <option value="10k-25k">$10K - $25K</option>
                        <option value="25k-50k">$25K - $50K</option>
                        <option value="50k-100k">$50K - $100K</option>
                        <option value="100k+">$100K+</option>
                        <option value="not-sure">Not sure yet</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="projectType"
                      className="mb-2 block text-sm font-medium"
                    >
                      Project Type
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      className="w-full border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary"
                    >
                      <option value="">Select project type</option>
                      <option value="web-app">Web Application</option>
                      <option value="mobile-app">Mobile Application</option>
                      <option value="saas">SaaS Platform</option>
                      <option value="enterprise">Enterprise System</option>
                      <option value="api">API Development</option>
                      <option value="consulting">Technical Consulting</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="mb-2 block text-sm font-medium"
                    >
                      Tell us about your project{" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full resize-none border border-border bg-background px-4 py-3 text-sm outline-none placeholder:text-muted-foreground focus:border-primary"
                      placeholder="Describe your project, goals, timeline, and any specific requirements..."
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <ArrowRight className="size-4" />
                      </>
                    )}
                  </Button>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2">
              <div className="space-y-8">
                <div>
                  <h3 className="mb-4 text-lg font-medium">Contact Info</h3>
                  <div className="space-y-4">
                    <a
                      href="mailto:cameron@etamin.digital"
                      className="flex items-start gap-4 text-muted-foreground transition-colors hover:text-foreground"
                    >
                      <Mail className="mt-0.5 size-5 shrink-0" />
                      <div>
                        <p className="text-sm font-medium text-foreground">
                          Email
                        </p>
                        <p className="text-sm">cameron@etamin.digital</p>
                      </div>
                    </a>

                    <a
                      href="tel:+998906634446"
                      className="flex items-start gap-4 text-muted-foreground transition-colors hover:text-foreground"
                    >
                      <Phone className="mt-0.5 size-5 shrink-0" />
                      <div>
                        <p className="text-sm font-medium text-foreground">
                          Phone
                        </p>
                        <p className="text-sm">+998 90 663 44 46</p>
                      </div>
                    </a>

                    <div className="flex items-start gap-4 text-muted-foreground">
                      <MapPin className="mt-0.5 size-5 shrink-0" />
                      <div>
                        <p className="text-sm font-medium text-foreground">
                          Office
                        </p>
                        <p className="text-sm">
                          Namangan, Uzbekistan
                          <br />
                          Center City
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 text-muted-foreground">
                      <Clock className="mt-0.5 size-5 shrink-0" />
                      <div>
                        <p className="text-sm font-medium text-foreground">
                          Working Hours
                        </p>
                        <p className="text-sm">
                          Mon — Fri: 9:00 AM - 6:00 PM
                          <br />
                          (UZT, UTC+5)
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border-t border-border pt-8">
                  <h3 className="mb-4 text-lg font-medium">
                    Prefer to schedule?
                  </h3>
                  <p className="mb-4 text-sm text-muted-foreground">
                    Book a free 30-minute discovery call to discuss your project
                    in detail.
                  </p>
                  <Button variant="outline" className="w-full">
                    Book a Call
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* FAQ Teaser */}
      <Section spacing="lg">
        <Container>
          <div className="border border-border bg-muted/30 p-8 text-center md:p-12">
            <h3 className="text-2xl font-medium">Have questions?</h3>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Check out our frequently asked questions for quick answers about
              our process, pricing, and services.
            </p>
            <a
              href="/#faq"
              className="mt-6 inline-flex items-center justify-center rounded-md border border-input bg-transparent px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:ring-1 focus-visible:ring-ring focus-visible:outline-none"
            >
              View FAQ
            </a>
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

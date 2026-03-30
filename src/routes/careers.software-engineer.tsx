import { createFileRoute } from "@tanstack/react-router"
import { ArrowLeft, MapPin, Briefcase } from "lucide-react"

import { Container } from "@/components/Container"
import { Button } from "@/components/ui/button"
import { createRouteHead } from "@/lib/seo"

// JobPosting Schema
const jobPostingSchema = {
  "@context": "https://schema.org",
  "@type": "JobPosting",
  title: "Software Engineer",
  description:
    "Join Etamin as a Software Engineer in Namangan. Work on high-impact projects using modern technologies like React, Node.js, and cloud infrastructure. Onsite position with competitive compensation.",
  datePosted: "2024-03-28",
  validThrough: "2024-12-31",
  employmentType: "FULL_TIME",
  jobLocation: {
    "@type": "Place",
    address: {
      "@type": "PostalAddress",
      addressCountry: "UZ",
      addressLocality: "Namangan",
      addressRegion: "Namangan Region",
      streetAddress: "Center City",
    },
  },
  applicantLocationRequirements: {
    "@type": "Country",
    name: "Uzbekistan",
  },
  jobLocationType: "ONSITE",
  hiringOrganization: {
    "@type": "Organization",
    name: "Etamin",
    sameAs: "https://etamin.uz",
    logo: "https://etamin.uz/android-chrome-512x512.png",
  },
}

export const Route = createFileRoute("/careers/software-engineer")({
  component: JobDetailPage,
  head: () =>
    createRouteHead({
      title: "Software Engineer Job — Join Etamin in Namangan",
      description:
        "Software Engineer position at Etamin. Onsite in Namangan, Uzbekistan. Work with React, Node.js, and cloud technologies on enterprise projects. Apply now!",
      keywords:
        "software engineer job Namangan, React developer position Uzbekistan, Node.js job Namangan, onsite software engineer, Namangan tech jobs, full stack developer hiring Uzbekistan",
      ogType: "website",
      canonical: "https://etamin.uz/careers/software-engineer",
      structuredData: jobPostingSchema,
    }),
})

function JobDetailPage() {
  return (
    <div className="min-h-screen bg-background py-24">
      <Container>
        <div className="mx-auto max-w-3xl">
          <a
            href="/careers"
            className="mb-12 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="size-4" />
            Back to careers
          </a>

          <span className="mb-4 block font-mono text-xs tracking-wider text-muted-foreground uppercase">
            Engineering
          </span>

          <h1 className="text-5xl font-semibold tracking-tight sm:text-6xl md:text-7xl">
            Software Engineer
          </h1>

          <div className="mt-6 flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <MapPin className="size-4" />
              <span>Namangan, Uzbekistan (Onsite)</span>
            </div>
            <div className="flex items-center gap-2">
              <Briefcase className="size-4" />
              <span>Full-time</span>
            </div>
          </div>

          <div className="mt-16 space-y-8 text-lg leading-relaxed text-muted-foreground">
            <div>
              <h2 className="mb-4 text-xl font-semibold text-foreground">
                About Etamin
              </h2>
              <p>
                We're a product studio obsessed with shipping. We build
                high-performance software for ambitious teams who refuse to
                compromise on quality. No bureaucracy, no meetings that could've
                been emails. Just pure building.
              </p>
            </div>

            <div>
              <h2 className="mb-4 text-xl font-semibold text-foreground">
                Location
              </h2>
              <p>
                This is an{" "}
                <strong className="text-foreground">onsite position</strong> in
                our Namangan office. You'll work alongside our team in modern
                office space in the heart of Namangan city. We believe in the
                power of in-person collaboration and building strong team
                culture.
              </p>
            </div>

            <div>
              <h2 className="mb-4 text-xl font-semibold text-foreground">
                You will likely get this job if...
              </h2>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <span className="text-foreground">→</span>
                  <span>
                    You've pair programmed with Claude Code or Cursor until 4am
                    and loved every minute of it
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-foreground">→</span>
                  <span>
                    Your GitHub is green and your commits tell a story of
                    obsession
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-foreground">→</span>
                  <span>
                    You speak React, TypeScript, and Python fluently—and you're
                    learning the next thing already
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-foreground">→</span>
                  <span>
                    You've broken enough production systems to know how to build
                    them right
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-foreground">→</span>
                  <span>
                    1+ years of shipping code that real people use (not just
                    tutorials)
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="mb-4 text-xl font-semibold text-foreground">
                What you'll do
              </h2>
              <p>
                Ship features end-to-end. Work with AI agents daily. Own your
                code from idea to production. Build systems that scale. No
                hand-holding, no micromanagement. We trust you to figure it out.
              </p>
            </div>

            <div>
              <h2 className="mb-4 text-xl font-semibold text-foreground">
                The interview
              </h2>
              <ol className="list-decimal space-y-2 pl-5">
                <li>
                  Show us what you've built (GitHub, side projects, anything)
                </li>
                <li>Vibe check call</li>
                <li>Build something small with us</li>
                <li>Get the job</li>
              </ol>
            </div>

            <div className="rounded-lg border border-border bg-muted/30 p-6">
              <p className="font-medium text-foreground">
                Onsite in Namangan. Competitive salary + equity.
              </p>
              <p className="mt-2">
                The usual benefits. But mostly: a chance to build something real
                with people who actually care, right here in Namangan.
              </p>
            </div>
          </div>

          <div className="mt-12 flex flex-wrap gap-4">
            <Button size="lg">Apply Now</Button>
            <Button variant="outline" size="lg">
              hello@etamin.dev
            </Button>
          </div>
        </div>
      </Container>
    </div>
  )
}

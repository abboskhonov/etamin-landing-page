import { ArrowLeft } from "lucide-react"

import { Container } from "@/components/Container"
import { Button } from "@/components/ui/button"
import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/careers/software-engineer")({
  component: JobDetailPage,
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
                Remote. Async-first.
              </p>
              <p className="mt-2">
                Competitive salary + equity. The usual benefits. But mostly: a
                chance to build something real with people who actually care.
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

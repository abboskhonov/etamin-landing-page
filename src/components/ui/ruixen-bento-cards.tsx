"use client"

import React from "react"
import { cn } from "@/lib/utils"
import { Container } from "@/components/Container"

const cardContents = [
  {
    title: "Custom Development",
    description:
      "End-to-end software solutions built specifically for your business needs and growth objectives.",
  },
  {
    title: "System Architecture",
    description:
      "Scalable, maintainable architectures designed to grow with your business and handle increasing demands.",
  },
  {
    title: "Cloud Infrastructure",
    description:
      "Expert cloud deployment and infrastructure management. We handle AWS, Docker, Kubernetes, and CI/CD pipelines so you can focus on your product. From setup to monitoring, we ensure your infrastructure is secure, scalable, and cost-effective.",
  },
  {
    title: "API Integration",
    description:
      "Seamless third-party integrations and custom APIs that connect your ecosystem and streamline workflows.",
  },
  {
    title: "Dedicated Teams",
    description:
      "Embedded development teams that work as an extension of your company, sharing your goals and culture.",
  },
]

const PlusCard: React.FC<{
  className?: string
  title: string
  description: string
}> = ({ className = "", title, description }) => {
  return (
    <div
      className={cn(
        "relative min-h-[200px] rounded-lg border border-dashed border-[#d4d4d4] bg-white p-6",
        "flex flex-col justify-between transition-all hover:border-[#2563eb] hover:shadow-lg",
        className
      )}
    >
      <CornerPlusIcons />
      <div className="relative z-10 space-y-2">
        <h3 className="text-xl font-bold text-[#111]">{title}</h3>
        <p className="text-sm leading-relaxed text-[#666]">{description}</p>
      </div>
    </div>
  )
}

const CornerPlusIcons = () => (
  <>
    <PlusIcon className="absolute -top-3 -left-3" />
    <PlusIcon className="absolute -top-3 -right-3" />
    <PlusIcon className="absolute -bottom-3 -left-3" />
    <PlusIcon className="absolute -right-3 -bottom-3" />
  </>
)

const PlusIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    strokeWidth="1"
    stroke="currentColor"
    className={`size-6 text-[#111] ${className}`}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
  </svg>
)

export default function RuixenBentoCards() {
  return (
    <section className="w-full py-20 md:py-32">
      <Container>
        {/* Section Header */}
        <div className="mb-12 max-w-2xl">
          <span className="text-sm font-medium text-[#2563eb]">Services</span>
          <h2 className="mt-4 mb-4 text-4xl leading-tight font-bold text-[#111] md:text-5xl">
            Built for performance.
            <br />
            Designed for results.
          </h2>
          <p className="text-lg text-[#666]">
            We deliver high-performing software solutions with the flexibility
            to adapt to your unique needs. Every component is thoughtfully
            engineered.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid auto-rows-auto grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-6">
          <PlusCard
            {...cardContents[0]}
            className="lg:col-span-3 lg:row-span-2"
          />
          <PlusCard
            {...cardContents[1]}
            className="lg:col-span-2 lg:row-span-2"
          />
          <PlusCard
            {...cardContents[2]}
            className="lg:col-span-4 lg:row-span-1"
          />
          <PlusCard
            {...cardContents[3]}
            className="lg:col-span-2 lg:row-span-1"
          />
          <PlusCard
            {...cardContents[4]}
            className="lg:col-span-2 lg:row-span-1"
          />
        </div>
      </Container>
    </section>
  )
}

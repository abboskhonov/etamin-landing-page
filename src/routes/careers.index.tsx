import { createFileRoute } from "@tanstack/react-router"
import { CareersIndex } from "./careers"

export const Route = createFileRoute("/careers/")({
  component: CareersIndex,
})

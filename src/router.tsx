import { createRouter as createTanStackRouter } from "@tanstack/react-router"
import { routeTree } from "./routeTree.gen"
import { Route as NotFoundRoute } from "./routes/$404"

export function getRouter() {
  const router = createTanStackRouter({
    routeTree,
    notFoundRoute: NotFoundRoute,
    scrollRestoration: false,
    defaultPreload: "intent",
    defaultPreloadStaleTime: 0,
  })

  return router
}

declare module "@tanstack/react-router" {
  interface Register {
    router: ReturnType<typeof getRouter>
  }
}

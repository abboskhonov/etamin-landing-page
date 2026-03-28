export interface SEOProps {
  title: string
  description: string
  keywords?: string
  ogImage?: string
  ogType?: "website" | "article" | "profile"
  canonical?: string
  noIndex?: boolean
  structuredData?: Record<string, unknown>
}

export function generateSEOMeta({
  title,
  description,
  keywords,
  ogImage = "https://etamin.uz/android-chrome-512x512.png",
  ogType = "website",
  canonical,
  noIndex = false,
  structuredData,
}: SEOProps) {
  const currentUrl = canonical || "https://etamin.uz"

  const meta: Array<Record<string, string>> = [
    { title },
    { name: "description", content: description },
    ...(keywords ? [{ name: "keywords", content: keywords }] : []),
    ...(noIndex ? [{ name: "robots", content: "noindex, nofollow" }] : []),
    // Open Graph
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:type", content: ogType },
    { property: "og:url", content: currentUrl },
    { property: "og:image", content: ogImage },
    // Twitter
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: ogImage },
  ]

  const links: Array<Record<string, string>> = [
    { rel: "canonical", href: currentUrl },
  ]

  const scripts: Array<{ type: string; children: string }> = []

  if (structuredData) {
    scripts.push({
      type: "application/ld+json",
      children: JSON.stringify(structuredData),
    })
  }

  return { meta, links, scripts }
}

// Helper to create route head config
export function createRouteHead(props: SEOProps) {
  const { meta, links, scripts } = generateSEOMeta(props)
  return { meta, links, scripts }
}

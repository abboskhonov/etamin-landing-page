export interface SEOProps {
  title: string
  description: string
  keywords?: string
  ogImage?: string
  ogType?: "website" | "article" | "profile" | "business.business"
  canonical?: string
  noIndex?: boolean
  noFollow?: boolean
  structuredData?: Record<string, unknown>
  breadcrumb?: Array<{ name: string; url: string }>
  alternateLanguages?: Record<string, string>
  twitterCard?: "summary" | "summary_large_image" | "app" | "player"
  twitterSite?: string
  twitterCreator?: string
  publishedTime?: string
  modifiedTime?: string
  articleAuthor?: string
  section?: string
  tags?: string[]
}

export function generateSEOMeta({
  title,
  description,
  keywords,
  ogImage = "https://etamin.uz/og-image.png",
  ogType = "website",
  canonical,
  noIndex = false,
  noFollow = false,
  structuredData,
  breadcrumb,
  alternateLanguages,
  twitterCard = "summary_large_image",
  twitterSite = "@etaminstudio",
  twitterCreator = "@etaminstudio",
  publishedTime,
  modifiedTime,
  articleAuthor,
  section,
  tags,
}: SEOProps) {
  const currentUrl = canonical || "https://etamin.uz"

  const meta: Array<Record<string, string>> = [
    { title },
    { name: "description", content: description },
    ...(keywords ? [{ name: "keywords", content: keywords }] : []),
    // Robots
    ...(noIndex || noFollow
      ? [
          {
            name: "robots",
            content: `${noIndex ? "noindex" : "index"}, ${noFollow ? "nofollow" : "follow"}`,
          },
        ]
      : [
          {
            name: "robots",
            content:
              "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
          },
          {
            name: "googlebot",
            content:
              "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
          },
        ]),
    // Open Graph
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:type", content: ogType },
    { property: "og:url", content: currentUrl },
    { property: "og:image", content: ogImage },
    { property: "og:image:width", content: "1200" },
    { property: "og:image:height", content: "630" },
    {
      property: "og:image:alt",
      content: `${title} - Etamin Software Development`,
    },
    { property: "og:site_name", content: "Etamin" },
    { property: "og:locale", content: "en_US" },
    // Article-specific OG tags
    ...(publishedTime
      ? [{ property: "article:published_time", content: publishedTime }]
      : []),
    ...(modifiedTime
      ? [{ property: "article:modified_time", content: modifiedTime }]
      : []),
    ...(articleAuthor
      ? [{ property: "article:author", content: articleAuthor }]
      : []),
    ...(section ? [{ property: "article:section", content: section }] : []),
    ...(tags
      ? tags.map((tag) => ({ property: "article:tag", content: tag }))
      : []),
    // Twitter
    { name: "twitter:card", content: twitterCard },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: ogImage },
    {
      name: "twitter:image:alt",
      content: `${title} - Etamin Software Development`,
    },
    ...(twitterSite ? [{ name: "twitter:site", content: twitterSite }] : []),
    ...(twitterCreator
      ? [{ name: "twitter:creator", content: twitterCreator }]
      : []),
    // Additional SEO
    { name: "author", content: "Etamin Studio" },
    { name: "publisher", content: "Etamin" },
    { name: "copyright", content: `© ${new Date().getFullYear()} Etamin` },
    { name: "theme-color", content: "#000000" },
    { name: "msapplication-TileColor", content: "#000000" },
    { name: "msapplication-navbutton-color", content: "#000000" },
    {
      name: "apple-mobile-web-app-status-bar-style",
      content: "black-translucent",
    },
    { name: "apple-mobile-web-app-capable", content: "yes" },
    { name: "mobile-web-app-capable", content: "yes" },
    { name: "format-detection", content: "telephone=no" },
    { name: "geo.region", content: "UZ-NAM" },
    { name: "geo.placename", content: "Namangan" },
    { name: "ICBM", content: "40.9983, 71.6726" },
    { name: "rating", content: "general" },
    { name: "referrer", content: "origin-when-cross-origin" },
  ]

  const links: Array<Record<string, string>> = [
    { rel: "canonical", href: currentUrl },
    // Alternate languages
    ...(alternateLanguages
      ? Object.entries(alternateLanguages).map(([lang, url]) => ({
          rel: "alternate",
          hreflang: lang,
          href: url,
        }))
      : []),
    // Preconnect for performance
    { rel: "preconnect", href: "https://fonts.googleapis.com" },
    {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
      crossOrigin: "anonymous",
    },
    // DNS prefetch
    { rel: "dns-prefetch", href: "https://static.cloudflareinsights.com" },
    // Preload critical resources
    {
      rel: "preload",
      href: "/favicon-32x32.png",
      as: "image",
      type: "image/png",
    },
  ]

  // Add breadcrumb structured data if provided
  const scripts: Array<{ type: string; children: string }> = []

  if (breadcrumb && breadcrumb.length > 0) {
    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: breadcrumb.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.name,
        item: item.url,
      })),
    }
    scripts.push({
      type: "application/ld+json",
      children: JSON.stringify(breadcrumbSchema),
    })
  }

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

// Generate breadcrumb for common pages
export function generateBreadcrumb(
  pageName: string,
  pageUrl: string,
  parent?: { name: string; url: string }
) {
  const items = [{ name: "Home", url: "https://etamin.uz/" }]
  if (parent) {
    items.push(parent)
  }
  items.push({ name: pageName, url: pageUrl })
  return items
}

// Generate alternate language URLs
export function generateAlternateLanguages(
  basePath: string,
  availableLanguages: string[] = ["en", "ru", "uz"]
) {
  const languages: Record<string, string> = {}
  availableLanguages.forEach((lang) => {
    if (lang === "en") {
      languages[lang] = `https://etamin.uz${basePath}`
    } else {
      languages[lang] = `https://etamin.uz/${lang}${basePath}`
    }
  })
  // Add x-default
  languages["x-default"] = `https://etamin.uz${basePath}`
  return languages
}

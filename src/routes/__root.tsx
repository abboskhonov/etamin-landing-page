import { HeadContent, Scripts, createRootRoute } from "@tanstack/react-router"
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools"
import { TanStackDevtools } from "@tanstack/react-devtools"
import { ArrowRight } from "lucide-react"

import { Container } from "@/components/Container"

import appCss from "../styles.css?url"

// Organization Schema with complete details
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Etamin",
  alternateName: "Etamin Software Development Studio",
  url: "https://etamin.uz",
  logo: {
    "@type": "ImageObject",
    url: "https://etamin.uz/android-chrome-512x512.png",
    width: 512,
    height: 512,
  },
  description:
    "Premium software development company building high-performance AI-powered applications and systems for ambitious teams and enterprises worldwide.",
  slogan: "Building high-performance software for ambitious teams",
  foundingDate: "2023",
  sameAs: [
    "https://github.com/etamin",
    "https://linkedin.com/company/etamin",
    "https://twitter.com/etaminstudio",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+998-90-663-44-46",
    email: "cameron@etamin.digital",
    contactType: "sales",
    availableLanguage: ["English", "Russian", "Uzbek"],
    areaServed: "Global",
  },
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
}

// WebSite Schema for search box
const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Etamin - Software Development Studio",
  url: "https://etamin.uz",
  publisher: {
    "@type": "Organization",
    name: "Etamin",
    logo: {
      "@type": "ImageObject",
      url: "https://etamin.uz/android-chrome-512x512.png",
    },
  },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://etamin.uz/search?q={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
}

// Professional Service Schema
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Etamin Software Development",
  image: "https://etamin.uz/og-image.png",
  url: "https://etamin.uz",
  telephone: "+998-90-663-44-46",
  email: "cameron@etamin.digital",
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
  priceRange: "$$$",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
  ],
  areaServed: {
    "@type": "GeoCircle",
    geoMidpoint: {
      "@type": "GeoCoordinates",
      latitude: "40.9983",
      longitude: "71.6726",
    },
    geoRadius: "1000",
    unitCode: "KMT",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Software Development Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Web Application Development",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "SaaS Platform Development",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "AI Integration & Development",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Enterprise Software Solutions",
        },
      },
    ],
  },
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      // Character encoding
      { charSet: "utf-8" },

      // Viewport - Mobile optimization
      {
        name: "viewport",
        content:
          "width=device-width, initial-scale=1, maximum-scale=5, viewport-fit=cover",
      },

      // Theme color for mobile browsers
      { name: "theme-color", content: "#000000" },
      { name: "msapplication-TileColor", content: "#000000" },
      { name: "msapplication-navbutton-color", content: "#000000" },

      // Apple specific
      { name: "apple-mobile-web-app-capable", content: "yes" },
      {
        name: "apple-mobile-web-app-status-bar-style",
        content: "black-translucent",
      },
      { name: "apple-mobile-web-app-title", content: "Etamin" },

      // General app capability
      { name: "mobile-web-app-capable", content: "yes" },
      { name: "application-name", content: "Etamin" },

      // SEO Core Meta Tags
      {
        title:
          "Etamin — AI-Powered Software Development Studio | Enterprise Solutions",
      },
      {
        name: "description",
        content:
          "Premium software development company in Namangan, Uzbekistan. We build high-performance AI-powered applications, SaaS platforms, and enterprise systems. 50+ projects delivered. Get a quote today!",
      },
      {
        name: "keywords",
        content:
          "software development, AI development, custom software, SaaS development, web applications, mobile apps, enterprise software, Uzbekistan software company, Namangan developers, React development, Node.js, cloud solutions, digital transformation, AI integration",
      },

      // Author and Copyright
      { name: "author", content: "Etamin Studio" },
      { name: "publisher", content: "Etamin" },
      { name: "copyright", content: "© 2025 Etamin. All rights reserved." },

      // Robots - Comprehensive directives
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
      { name: "bingbot", content: "index, follow, max-image-preview:large" },

      // Format detection
      { name: "format-detection", content: "telephone=no" },
      { name: "referrer", content: "origin-when-cross-origin" },
      { name: "rating", content: "general" },

      // Geo tags for local SEO
      { name: "geo.region", content: "UZ-NAM" },
      { name: "geo.placename", content: "Namangan" },
      { name: "geo.position", content: "40.9983;71.6726" },
      { name: "ICBM", content: "40.9983, 71.6726" },

      // Open Graph Meta Tags
      { property: "og:site_name", content: "Etamin" },
      {
        property: "og:title",
        content: "Etamin — AI-Powered Software Development Studio",
      },
      {
        property: "og:description",
        content:
          "Premium software development company building high-performance AI-powered applications and enterprise systems. Based in Namangan, working globally.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://etamin.uz" },
      { property: "og:image", content: "https://etamin.uz/og-image.png" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      {
        property: "og:image:alt",
        content: "Etamin Software Development Studio - AI-Powered Solutions",
      },
      { property: "og:image:type", content: "image/png" },
      { property: "og:locale", content: "en_US" },
      { property: "og:locale:alternate", content: "ru_RU" },
      { property: "og:locale:alternate", content: "uz_UZ" },

      // Twitter Card Meta Tags
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@etaminstudio" },
      { name: "twitter:creator", content: "@etaminstudio" },
      {
        name: "twitter:title",
        content: "Etamin — AI-Powered Software Development Studio",
      },
      {
        name: "twitter:description",
        content:
          "Premium software development company building high-performance AI-powered applications and enterprise systems.",
      },
      { name: "twitter:image", content: "https://etamin.uz/og-image.png" },
      {
        name: "twitter:image:alt",
        content: "Etamin Software Development Studio",
      },

      // Verification tags (placeholder - user needs to add actual verification codes)
      // { name: "google-site-verification", content: "YOUR_GOOGLE_CODE" },
      // { name: "msvalidate.01", content: "YOUR_BING_CODE" },
      // { name: "yandex-verification", content: "YOUR_YANDEX_CODE" },
    ],
    links: [
      // Stylesheet
      { rel: "stylesheet", href: appCss },

      // Canonical URL
      { rel: "canonical", href: "https://etamin.uz" },

      // Alternate language versions
      { rel: "alternate", hreflang: "en", href: "https://etamin.uz/" },
      { rel: "alternate", hreflang: "ru", href: "https://etamin.uz/ru" },
      { rel: "alternate", hreflang: "uz", href: "https://etamin.uz/uz" },
      { rel: "alternate", hreflang: "x-default", href: "https://etamin.uz/" },

      // Favicon - Multiple sizes for different devices
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico", sizes: "any" },
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "/favicon-16x16.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/favicon-32x32.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "192x192",
        href: "/android-chrome-192x192.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "512x512",
        href: "/android-chrome-512x512.png",
      },

      // Apple Touch Icon
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/apple-touch-icon.png",
      },

      // PWA Manifest
      { rel: "manifest", href: "/site.webmanifest" },

      // Preconnect for performance
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },

      // DNS prefetch for external resources
      { rel: "dns-prefetch", href: "https://static.cloudflareinsights.com" },
      { rel: "dns-prefetch", href: "https://fonts.googleapis.com" },

      // Preload critical resources
      {
        rel: "preload",
        href: "/favicon-32x32.png",
        as: "image",
        type: "image/png",
      },
    ],
    scripts: [
      // Organization Structured Data
      {
        type: "application/ld+json",
        children: JSON.stringify(organizationSchema),
      },
      // WebSite Structured Data
      { type: "application/ld+json", children: JSON.stringify(websiteSchema) },
      // Professional Service Structured Data
      { type: "application/ld+json", children: JSON.stringify(serviceSchema) },
    ],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" dir="ltr">
      <head>
        <HeadContent />
      </head>
      <body>
        {/* Top Banner - Hiring */}
        <div className="w-full border-b border-border bg-muted py-3">
          <Container className="flex items-center justify-center">
            <span className="text-sm text-muted-foreground">
              We are hiring.
              <a
                href="/careers"
                className="ml-1 font-medium text-foreground hover:underline"
              >
                Join our team
                <ArrowRight className="ml-1 inline-block size-3" />
              </a>
            </span>
          </Container>
        </div>
        {children}
        {/* Cloudflare Web Analytics */}
        <script
          defer
          src="https://static.cloudflareinsights.com/beacon.min.js"
          data-cf-beacon='{"token": "23e6fcf2f95545868a5a9b6c6a8e4c80"}'
        />
        {/* End Cloudflare Web Analytics */}
        <TanStackDevtools
          config={{
            position: "bottom-right",
          }}
          plugins={[
            {
              name: "Tanstack Router",
              render: <TanStackRouterDevtoolsPanel />,
            },
          ]}
        />
        <Scripts />
      </body>
    </html>
  )
}

import { HeadContent, Scripts, createRootRoute } from "@tanstack/react-router"
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools"
import { TanStackDevtools } from "@tanstack/react-devtools"

import appCss from "../styles.css?url"

// Organization Schema for structured data
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Etamin",
  url: "https://etamin.uz",
  logo: "https://etamin.uz/logo-wh-bg.png",
  description:
    "Software development company building high-performance applications and systems for ambitious teams and enterprises worldwide.",
  sameAs: [
    "https://github.com/etamin",
    "https://linkedin.com/company/etamin",
    "https://twitter.com/etaminstudio",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
    availableLanguage: ["English", "Russian", "Uzbek"],
  },
}

// WebSite Schema for search box
const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Etamin",
  url: "https://etamin.uz",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://etamin.uz/search?q={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      // Basic Meta Tags
      {
        charSet: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        title: "Etamin — Software Development Studio | Enterprise Solutions",
      },
      {
        name: "description",
        content:
          "Etamin is a premium software development company specializing in high-performance applications, enterprise systems, and digital transformation. We build scalable solutions for ambitious teams worldwide.",
      },
      // Keywords
      {
        name: "keywords",
        content:
          "software development, enterprise software, custom software, SaaS development, React development, Node.js, cloud solutions, digital transformation, Uzbekistan software company, web applications, mobile apps",
      },
      // Author
      {
        name: "author",
        content: "Etamin Studio",
      },
      // Robots
      {
        name: "robots",
        content:
          "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
      },
      // Canonical URL
      {
        rel: "canonical",
        href: "https://etamin.uz",
      },

      // Open Graph Meta Tags
      {
        property: "og:type",
        content: "website",
      },
      {
        property: "og:url",
        content: "https://etamin.uz",
      },
      {
        property: "og:title",
        content: "Etamin — Software Development Studio | Enterprise Solutions",
      },
      {
        property: "og:description",
        content:
          "Premium software development company building high-performance applications and systems for ambitious teams and enterprises worldwide.",
      },
      {
        property: "og:image",
        content: "https://etamin.uz/android-chrome-512x512.png",
      },
      {
        property: "og:image:width",
        content: "512",
      },
      {
        property: "og:image:height",
        content: "512",
      },
      {
        property: "og:image:alt",
        content: "Etamin Software Development Studio Logo",
      },
      {
        property: "og:site_name",
        content: "Etamin",
      },
      {
        property: "og:locale",
        content: "en_US",
      },
      {
        property: "og:locale:alternate",
        content: "ru_RU",
      },
      {
        property: "og:locale:alternate",
        content: "uz_UZ",
      },

      // Twitter Card Meta Tags
      {
        name: "twitter:card",
        content: "summary_large_image",
      },
      {
        name: "twitter:url",
        content: "https://etamin.uz",
      },
      {
        name: "twitter:title",
        content: "Etamin — Software Development Studio | Enterprise Solutions",
      },
      {
        name: "twitter:description",
        content:
          "Premium software development company building high-performance applications and systems for ambitious teams worldwide.",
      },
      {
        name: "twitter:image",
        content: "https://etamin.uz/android-chrome-512x512.png",
      },
      {
        name: "twitter:image:alt",
        content: "Etamin Software Development Studio Logo",
      },

      // Additional SEO Tags
      {
        name: "theme-color",
        content: "#000000",
      },
      {
        name: "msapplication-TileColor",
        content: "#000000",
      },
      {
        name: "apple-mobile-web-app-title",
        content: "Etamin",
      },
      {
        name: "application-name",
        content: "Etamin",
      },
      {
        name: "format-detection",
        content: "telephone=no",
      },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      // Favicons
      {
        rel: "icon",
        type: "image/x-icon",
        href: "/favicon.ico",
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
        sizes: "16x16",
        href: "/favicon-16x16.png",
      },
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/apple-touch-icon.png",
      },
      // PWA
      {
        rel: "manifest",
        href: "/site.webmanifest",
      },
      // Canonical
      {
        rel: "canonical",
        href: "https://etamin.uz",
      },
      // Preconnect for performance
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
    ],
    scripts: [
      // Structured Data - Organization Schema
      {
        type: "application/ld+json",
        children: JSON.stringify(organizationSchema),
      },
      // Structured Data - WebSite Schema
      {
        type: "application/ld+json",
        children: JSON.stringify(websiteSchema),
      },
    ],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
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

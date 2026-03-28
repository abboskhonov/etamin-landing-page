"use client"
import React from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { MenuToggleIcon } from "@/components/ui/menu-toggle-icon"
import { useScroll } from "@/components/ui/use-scroll"
import { createPortal } from "react-dom"

export function Header() {
  const [open, setOpen] = React.useState(false)
  const scrolled = useScroll(10)

  const links = [
    {
      label: "Projects",
      href: "/projects",
    },
    {
      label: "Services",
      href: "/#services",
    },
    {
      label: "About",
      href: "/#about",
    },
    {
      label: "Careers",
      href: "/careers",
    },
  ]

  React.useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  return (
    <header
      className={cn("sticky top-0 z-50 w-full border-b border-transparent", {
        "border-border bg-background/95 backdrop-blur-lg supports-[backdrop-filter]:bg-background/50":
          scrolled,
      })}
    >
      <nav className="mx-auto flex h-14 w-full max-w-5xl items-center justify-between px-4">
        <a href="/" className="flex items-center gap-2">
          <img
            src="/logo-wh-bg.png"
            alt="Etamin"
            className="h-8 w-8 rounded object-contain"
          />
          <span className="text-lg font-semibold">Etamin</span>
        </a>
        <div className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
          <Button
            size="sm"
            className="rounded-full bg-[#2563eb] px-5 text-white hover:bg-[#1d4ed8]"
          >
            Start Project
          </Button>
        </div>
        <Button
          size="icon"
          variant="outline"
          onClick={() => setOpen(!open)}
          className="md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label="Toggle menu"
        >
          <MenuToggleIcon open={open} className="size-5" duration={300} />
        </Button>
      </nav>
      <MobileMenu open={open} className="flex flex-col gap-2">
        <div className="grid gap-y-2">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="inline-flex h-8 items-center justify-start rounded-lg px-3 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </div>
        <div className="flex flex-col gap-2">
          <Button className="w-full rounded-full bg-[#2563eb] text-white hover:bg-[#1d4ed8]">
            Start Project
          </Button>
        </div>
      </MobileMenu>
    </header>
  )
}

type MobileMenuProps = React.ComponentProps<"div"> & {
  open: boolean
}

function MobileMenu({ open, children, className, ...props }: MobileMenuProps) {
  if (!open || typeof window === "undefined") return null

  return createPortal(
    <div
      id="mobile-menu"
      className={cn(
        "bg-background/95 backdrop-blur-lg supports-[backdrop-filter]:bg-background/50",
        "fixed top-14 right-0 bottom-0 left-0 z-40 flex flex-col overflow-hidden border-y md:hidden"
      )}
    >
      <div
        data-slot={open ? "open" : "closed"}
        className={cn(
          "ease-out data-[slot=open]:animate-in data-[slot=open]:zoom-in-97",
          "size-full p-4",
          className
        )}
        {...props}
      >
        {children}
      </div>
    </div>,
    document.body
  )
}

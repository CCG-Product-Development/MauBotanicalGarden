"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/conservation", label: "Conservation" },
  { href: "/education", label: "Education" },
  { href: "/innovation", label: "Innovation" },
  { href: "/shop", label: "Shop" },
]

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <>
      {/* Top announcement bar */}
      <div className="border-b border-border bg-primary py-2 text-center text-xs font-medium tracking-wide text-primary-foreground">
        Placeholder text goes here
      </div>

      <header className="sticky top-0 z-50 border-b border-border bg-card">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-8">
          {/* Desktop left nav */}
          <nav className="hidden items-center gap-6 lg:flex" aria-label="Main navigation left">
            {navLinks.slice(0, 3).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium uppercase tracking-wider text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Center logo */}
          <Link href="/" className="flex flex-col items-center leading-tight">
            <span className="font-serif text-xl font-bold tracking-tight text-foreground lg:text-2xl">
              Mau Summit
            </span>
            <span className="text-[9px] font-medium uppercase tracking-[0.25em] text-muted-foreground">
              Botanical Gardens
            </span>
          </Link>

          {/* Desktop right nav */}
          <nav className="hidden items-center gap-6 lg:flex" aria-label="Main navigation right">
            {navLinks.slice(3).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium uppercase tracking-wider text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="inline-flex items-center justify-center p-2 text-foreground lg:hidden"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <nav className="border-t border-border bg-card px-4 pb-6 pt-2 lg:hidden" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block px-4 py-3 text-sm font-medium uppercase tracking-wider text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        )}
      </header>
    </>
  )
}

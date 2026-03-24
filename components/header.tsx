"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ShoppingCart, Menu, X } from "lucide-react"
import { useState } from "react"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Shop" },
  { href: "/education", label: "Education" },
  { href: "/contact", label: "Contact Us" },
]

export function Header() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <span className="text-xl md:text-2xl font-serif text-primary-foreground font-medium">
              Mau Summit
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center">
            <div className="bg-background rounded-full px-2 py-1 flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                    pathname === link.href
                      ? "bg-primary text-primary-foreground"
                      : "text-foreground hover:bg-muted"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </nav>

          {/* Cart Button */}
          <div className="flex items-center gap-4">
            <Link
              href="/shop"
              className="hidden sm:flex items-center gap-2 bg-secondary text-secondary-foreground px-4 py-2 rounded-full text-sm font-medium hover:bg-secondary/90 transition-colors"
            >
              <ShoppingCart className="w-4 h-4" />
              <span>VIEW CART</span>
            </Link>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-primary-foreground p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-primary-foreground/20">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    pathname === link.href
                      ? "bg-primary-foreground text-primary"
                      : "text-primary-foreground hover:bg-primary-foreground/10"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/shop"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2 bg-secondary text-secondary-foreground px-4 py-3 rounded-lg text-sm font-medium mt-2"
              >
                <ShoppingCart className="w-4 h-4" />
                <span>VIEW CART</span>
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}

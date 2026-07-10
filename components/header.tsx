"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ShoppingCart, Menu, X } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { useCart } from "@/lib/cart-context"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Shop" },
  { href: "/education", label: "Education" },
  { href: "/contact", label: "Contact" },
]

export function Header() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { totalItems } = useCart()

  return (
    <header className="sticky top-0 z-50 bg-natural-cream/95 backdrop-blur supports-[backdrop-filter]:bg-natural-cream/60 border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-2xl font-display font-bold text-olive-leaf tracking-wide">
            MSBI
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 bg-olive-leaf/10 rounded-full px-2 py-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-full text-sm font-body transition-colors ${
                  pathname === link.href
                    ? "bg-natural-cream text-olive-leaf shadow-sm font-semibold"
                    : "text-deep-charcoal hover:text-olive-leaf"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Cart Button */}
          <div className="flex items-center gap-2">
            <Link href="/cart">
              <Button className="hidden md:flex bg-olive-leaf hover:bg-olive-leaf/90 text-natural-cream rounded-full px-6 font-accent relative">
                <ShoppingCart className="w-4 h-4 mr-2" />
                VIEW CART
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-sunroot-gold text-deep-charcoal text-xs w-5 h-5 rounded-full flex items-center justify-center font-semibold">
                    {totalItems}
                  </span>
                )}
              </Button>
            </Link>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-border pt-4">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-2 rounded-lg text-sm font-body transition-colors ${
                    pathname === link.href
                      ? "bg-olive-leaf/10 text-olive-leaf font-semibold"
                      : "text-deep-charcoal hover:text-olive-leaf hover:bg-olive-leaf/5"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link href="/cart" onClick={() => setMobileMenuOpen(false)}>
                <Button className="w-full mt-2 bg-olive-leaf hover:bg-olive-leaf/90 text-natural-cream rounded-full font-accent relative">
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  VIEW CART {totalItems > 0 && `(${totalItems})`}
                </Button>
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}

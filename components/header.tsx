"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShoppingCart, Menu, X } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Shop" },
  { href: "/education", label: "Education" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-xl md:text-2xl font-serif text-foreground">
              Mau Summit
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center bg-white rounded-full px-8 py-2 border border-border">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "px-4 py-2 text-sm font-medium transition-colors",
                  pathname === link.href
                    ? "text-primary"
                    : "text-foreground hover:text-primary"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* View Cart Button */}
          <div className="flex items-center gap-4">
            <Link
              href="/shop"
              className="hidden md:flex items-center gap-2 bg-primary text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-primary-dark transition-colors"
            >
              <ShoppingCart className="w-4 h-4" />
              VIEW CART
            </Link>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-foreground"
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
          <nav className="md:hidden py-4 border-t border-border">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  "block px-4 py-3 text-base font-medium transition-colors",
                  pathname === link.href
                    ? "text-primary bg-primary/5"
                    : "text-foreground hover:text-primary hover:bg-primary/5"
                )}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/shop"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2 mx-4 mt-4 bg-primary text-white px-6 py-3 rounded-full text-sm font-medium justify-center"
            >
              <ShoppingCart className="w-4 h-4" />
              VIEW CART
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}

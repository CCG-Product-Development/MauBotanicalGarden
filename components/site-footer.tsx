import Link from "next/link"

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Conservation", href: "/conservation" },
  { label: "Education", href: "/education" },
  { label: "Innovation", href: "/innovation" },
  { label: "Shop", href: "/shop" },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          {/* Brand */}
          <div>
            <div className="flex flex-col leading-tight">
              <span className="font-serif text-xl font-bold text-foreground">Mau Summit</span>
              <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
                Botanical Gardens
              </span>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">placeholder@email</p>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap gap-6" aria-label="Footer navigation">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-8 border-t border-border pt-8 text-center text-xs text-muted-foreground">
          <p>Mau Summit Botanical Gardens</p>
        </div>
      </div>
    </footer>
  )
}

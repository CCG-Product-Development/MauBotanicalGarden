import Link from "next/link"

export function CTASection() {
  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 text-center lg:px-8">
        <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl lg:text-5xl text-balance">
          Plan Your Visit Today
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
          Whether you are a nature enthusiast, a student group, or a corporate team looking for a unique experience, Mau Summit Botanical Gardens welcomes you.
        </p>

        <div className="mx-auto mt-10 max-w-md text-left text-sm text-muted-foreground">
          <p><span className="font-semibold text-foreground">Location:</span> Mau Summit, Nakuru County</p>
          <p className="mt-2"><span className="font-semibold text-foreground">Hours:</span> 8:00 AM - 6:00 PM, Daily</p>
          <p className="mt-2"><span className="font-semibold text-foreground">Welcome:</span> Tourists, Students & Teams</p>
        </div>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/about"
            className="rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground"
          >
            Learn More About Us
          </Link>
          <Link
            href="/shop"
            className="rounded-full border border-border px-8 py-3.5 text-sm font-semibold text-foreground"
          >
            Browse Our Products
          </Link>
        </div>
      </div>
    </section>
  )
}

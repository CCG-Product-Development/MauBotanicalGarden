import Link from "next/link"

export function ConnectSection() {
  return (
    <section className="py-16 md:py-24 px-4 bg-background">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-foreground mb-8">
          Connect with us
        </h2>
        <Link
          href="/contact"
          className="inline-block bg-primary text-primary-foreground px-8 py-4 rounded-full font-medium hover:bg-primary/90 transition-colors"
        >
          Learn More
        </Link>
      </div>
    </section>
  )
}

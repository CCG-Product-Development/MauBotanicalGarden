import Image from "next/image"
import Link from "next/link"

export function AboutSection() {
  return (
    <section className="py-16 md:py-24">
      {/* Full width image */}
      <div className="relative h-64 md:h-96 w-full mb-16">
        <Image
          src="https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=1920&q=80"
          alt="Mau Summit forest landscape"
          fill
          className="object-cover"
        />
      </div>

      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-foreground mb-8">
              About Us
            </h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p className="flex gap-4">
                <span className="text-primary font-semibold">01</span>
                <span>
                  We offer guided tours, family-friendly activities, and
                  immersive learning experiences that bring plant heritage to
                  life.
                </span>
              </p>
              <p className="flex gap-4">
                <span className="text-primary font-semibold">02</span>
                <span>
                  We also cultivate and package our own herbs and spices,
                  merging traditional African knowledge with modern standards of
                  quality and transparency.
                </span>
              </p>
              <p className="flex gap-4">
                <span className="text-primary font-semibold">03</span>
                <span>
                  We partner with wellness brands, clinics, and researchers to
                  expand access to natural remedies.
                </span>
              </p>
              <p className="flex gap-4">
                <span className="text-primary font-semibold">04</span>
                <span>
                  We uphold the highest quality standards—our cultivation and
                  packaging processes are transparent and traceable.
                </span>
              </p>
            </div>
            <Link
              href="/education"
              className="inline-block mt-8 bg-primary text-primary-foreground px-6 py-3 rounded-full text-sm font-medium hover:bg-primary/90 transition-colors"
            >
              Discover More
            </Link>
          </div>

          {/* Side Image */}
          <div className="relative h-80 md:h-[500px] rounded-2xl overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=800&q=80"
              alt="Botanical garden trees"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

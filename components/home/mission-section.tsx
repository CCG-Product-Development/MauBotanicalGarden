import Image from "next/image"

export function MissionSection() {
  return (
    <section className="py-16 md:py-24 px-4 bg-muted">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="relative h-48 md:h-64 rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&q=80"
                alt="Forest path"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-48 md:h-64 rounded-2xl overflow-hidden mt-8">
              <Image
                src="https://images.unsplash.com/photo-1476673160081-cf065607f449?w=600&q=80"
                alt="Aerial view of forest"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Mission Text */}
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-foreground mb-6">
              Our Mission:
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              At Mau Summit Botanical Garden, we believe that to make the world
              a better place, we must first care for ourselves and our planet.
              We restore health naturally by combining time-honored African
              herbal wisdom with science-backed research. Through educational
              garden experiences and premium botanical remedies, we empower
              individuals and communities to live healthier, more sustainable
              lives.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

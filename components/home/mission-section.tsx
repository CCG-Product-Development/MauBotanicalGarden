export function MissionSection() {
  return (
    <section className="py-10 md:py-14 bg-olive-leaf/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Content - Left */}
          <div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-display mb-4 text-olive-leaf">
              Our Mission
            </h2>
            <p className="font-body text-deep-charcoal leading-relaxed mb-4">
              At Mau Summit Botanical Institute, we believe that to make the world a better place, we must first care for ourselves and our planet.
            </p>
            <p className="font-body text-deep-charcoal leading-relaxed">
              We restore health naturally by combining time-honored African herbal wisdom with science-backed research. Through educational garden experiences and premium botanical remedies, we empower individuals and communities to live healthier, more sustainable lives.
            </p>
          </div>

          {/* Image placeholder - Right */}
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-deep-charcoal">
            {/* Placeholder for mission image */}
          </div>
        </div>
      </div>
    </section>
  )
}

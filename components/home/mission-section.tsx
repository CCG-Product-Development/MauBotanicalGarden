import Image from "next/image";

export default function MissionSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-[400px] rounded-3xl overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=800"
              alt="Aerial view of green forest landscape"
              fill
              className="object-cover"
            />
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-foreground mb-6">
              Our Mission:
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              At Mau Summit Botanical Garden, we believe that to make the world a
              better place, we must first care for ourselves and our planet. We
              restore health naturally by combining time-honored African herbal
              wisdom with science-backed research. Through educational garden
              experiences and premium botanical remedies, we empower individuals
              and communities to live healthier, more sustainable lives.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

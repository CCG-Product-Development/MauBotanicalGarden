import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative">
      {/* Hero Image Container */}
      <div className="relative h-[50vh] md:h-[60vh] lg:h-[70vh] w-full overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?w=1920&q=80"
          alt="Mau Summit Botanical Gardens - Lush forest with waterfall"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/40 to-transparent" />
        
        {/* Hero Text Overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif text-white drop-shadow-lg text-balance">
              Mau Summit
              <br />
              Botanical Garden
            </h1>
          </div>
        </div>
      </div>
    </section>
  )
}

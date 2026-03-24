import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-primary mb-8 text-center">
          Mau Summit
          <br />
          Botanical Garden
        </h1>
        <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] rounded-3xl overflow-hidden">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-03-24%20at%203.51.38%E2%80%AFPM-D6TVytdHNipnbe4fsYjXLLUtQlJ8RJ.png"
            alt="Mau Summit Botanical Garden - Lush forest with waterfall"
            fill
            className="object-cover object-top"
            priority
          />
        </div>
      </div>
    </section>
  );
}

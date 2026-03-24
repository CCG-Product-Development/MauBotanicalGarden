import Link from "next/link";
import Image from "next/image";

export default function MapSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl md:text-4xl font-serif text-foreground">
            Map and/or Video
          </h2>
          <Link
            href="/contact"
            className="bg-primary text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-primary-dark transition-colors"
          >
            Discover More
          </Link>
        </div>

        <div className="relative w-full h-[300px] md:h-[400px] rounded-3xl overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200"
            alt="Aerial view of Mau Summit landscape"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}

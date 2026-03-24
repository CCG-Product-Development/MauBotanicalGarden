import Image from "next/image";
import Link from "next/link";

const aboutPoints = [
  {
    number: "01",
    text: "We offer guided tours, family-friendly activities, and immersive learning experiences that bring plant heritage to life.",
  },
  {
    number: "02",
    text: "We also cultivate and package our own herbs and spices, merging traditional African knowledge with modern standards of quality and transparency.",
  },
  {
    number: "03",
    text: "We partner with wellness brands, clinics and researchers to expand access to natural remedies.",
  },
  {
    number: "04",
    text: "We believe agility—our cultivation and packaging processes are transparent and traceable.",
  },
];

export default function AboutSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Forest Image */}
        <div className="relative w-full h-[300px] md:h-[400px] rounded-3xl overflow-hidden mb-16">
          <Image
            src="https://images.unsplash.com/photo-1448375240586-882707db888b?w=1200"
            alt="Lush forest canopy"
            fill
            className="object-cover"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-foreground mb-8">
              About Us
            </h2>
            <div className="space-y-6">
              {aboutPoints.map((point) => (
                <div key={point.number} className="flex gap-4">
                  <span className="text-primary font-semibold">{point.number}</span>
                  <p className="text-muted-foreground">{point.text}</p>
                </div>
              ))}
            </div>
            <Link
              href="/education"
              className="inline-block mt-8 bg-primary text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-primary-dark transition-colors"
            >
              Discover More
            </Link>
          </div>

          <div className="relative h-[400px] rounded-3xl overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=800"
              alt="Tree canopy from below"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

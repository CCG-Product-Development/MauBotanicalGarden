import Link from "next/link"
import { Button } from "@/components/ui/button"

export function AboutSection() {
  return (
    <section className="py-10 md:py-14">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-display mb-4 text-olive-leaf">
            About Us
          </h2>
          <p className="font-body text-deep-charcoal leading-relaxed mb-4">
            Mau Summit Botanical Institute is Kenya&apos;s premier center for botanical discovery and natural wellness. We offer guided tours, family-friendly activities, and immersive learning experiences that bring plant heritage to life.
          </p>
          <p className="font-body text-deep-charcoal leading-relaxed mb-6">
            We also cultivate and package our own herbs and spices, merging traditional African knowledge with modern standards of quality and transparency. Whether you&apos;re a student, nature enthusiast, or corporate team, MSBI welcomes you to explore, learn, and find balance in a premium, heritage-rich setting.
          </p>
          <Link href="/education">
            <Button className="bg-olive-leaf hover:bg-olive-leaf/90 text-natural-cream rounded-full px-6 font-accent">
              Discover More
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

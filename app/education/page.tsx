import Image from "next/image"
import Link from "next/link"
import { GraduationCap, Leaf, DollarSign, Lightbulb } from "lucide-react"

const programs = [
  {
    icon: GraduationCap,
    title: "Curriculum",
    description:
      "Mau Summit Botanical Institute offers the government of Kenya approved botanical studies curriculum. Other than TVET curriculum, affiliated courses are offered to instigate creativity in our graduates.",
  },
  {
    icon: Leaf,
    title: "Conservation of Nature",
    description:
      "Research-based conservation programs focused on preserving East African medicinal plants and their ecosystems for future generations.",
  },
  {
    icon: DollarSign,
    title: "Resource Mobilization",
    description:
      "Mau Summit Botanical Institute and its units need resources to carry out its mandate. We work to gather and use resources effectively to achieve our conservation and education goals.",
  },
  {
    icon: Lightbulb,
    title: "Innovation Hub",
    description:
      "Responding to customer and community enquiries on health challenges. In an environment where medicare and medical services are challenged, we address: Diabetes, Arthritis, Ulcers, H. Pylori, Amoebic, and Brucellosis.",
  },
]

export default function EducationPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[40vh] md:h-[50vh]">
        <Image
          src="https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=1920&q=80"
          alt="Mau Summit Botanical Institute"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-primary/60" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-4">
              Education
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Certified Technical and Vocational Institute
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-serif text-foreground mb-6">
            About Mau Summit Botanical Institute
          </h2>
          <div className="prose prose-lg text-muted-foreground">
            <p className="leading-relaxed mb-6">
              Mau Summit Botanical is a repository of East African medicinal
              plants and practical training space in conservation and extraction
              of medicinal and nutraceutical products.
            </p>
            <p className="leading-relaxed">
              It&apos;s also a place to connect people with their plant
              diversity and inspire them to innovate health products by
              providing inspiration, ingredients, and research for them, while
              also innovating health promoting natural products.
            </p>
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-16 md:py-20 px-4 bg-muted">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-serif text-foreground text-center mb-12">
            Our Programs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {programs.map((program) => (
              <div
                key={program.title}
                className="bg-card border border-border rounded-xl p-6 md:p-8"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <program.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {program.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {program.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Health Challenges Section */}
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-serif text-foreground mb-6">
            Addressing Health Challenges
          </h2>
          <p className="text-muted-foreground mb-8">
            Our innovation hub responds to community health enquiries and
            develops natural solutions for common ailments:
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Diabetes",
              "Arthritis",
              "Ulcers",
              "H. Pylori",
              "Amoebic",
              "Brucellosis",
            ].map((condition) => (
              <span
                key={condition}
                className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium"
              >
                {condition}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 px-4 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-serif mb-6">
            Ready to Learn?
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Join our botanical studies program and become part of the next
            generation of natural health innovators.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-secondary text-secondary-foreground px-8 py-4 rounded-full font-medium hover:bg-secondary/90 transition-colors"
          >
            Contact Us to Enroll
          </Link>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="py-16 md:py-24 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=600&q=80"
                alt="Botanical garden"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&q=80"
                alt="Forest path"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1476673160081-cf065607f449?w=600&q=80"
                alt="Aerial forest view"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

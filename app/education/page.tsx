import Image from "next/image";
import Link from "next/link";
import { GraduationCap, BookOpen, Lightbulb, Leaf, Users, FlaskConical } from "lucide-react";

const programs = [
  {
    icon: GraduationCap,
    title: "TVET Curriculum",
    description:
      "Government of Kenya approved botanical studies curriculum with certified qualifications.",
  },
  {
    icon: BookOpen,
    title: "Affiliated Courses",
    description:
      "Additional courses designed to instigate creativity in our graduates.",
  },
  {
    icon: Leaf,
    title: "Conservation Training",
    description:
      "Practical training in conservation and extraction of medicinal and nutraceutical products.",
  },
  {
    icon: FlaskConical,
    title: "Research Programs",
    description:
      "Conservation of nature research initiatives and collaborative studies.",
  },
];

const innovationHub = [
  "Diabetes",
  "Arthritis",
  "Ulcers",
  "H/Pylori",
  "Amoebic",
  "Brucellosis",
];

export default function EducationPage() {
  return (
    <div className="border-8 border-primary">
      <div className="bg-white min-h-screen">
        {/* Hero Section */}
        <section className="relative py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-foreground mb-6">
                Mau Summit Botanical Institute
              </h1>
              <p className="text-xl text-primary font-medium">
                Certified Technical and Vocational Institute
              </p>
            </div>

            <div className="relative w-full h-[300px] md:h-[400px] rounded-3xl overflow-hidden mb-12">
              <Image
                src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=1200"
                alt="Education and learning at Mau Summit"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-16 bg-muted">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-6">
                  About Mau Summit
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Mau Summit Botanical is a repository of East African medicinal plants
                  and practical training space in conservation and extraction of
                  medicinal and nutraceutical products.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  It is also a place to connect people with their plant diversity and
                  inspire them to innovate health products by providing inspiration,
                  ingredients and research for them, while also innovating health
                  promoting natural products.
                </p>
              </div>
              <div className="relative h-[300px] rounded-3xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=800"
                  alt="Botanical garden plants"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Curriculum Section */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-4">
                Our Curriculum
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Mau Summit Botanical Institute offers the government of Kenya approved
                botanical studies curriculum. Other than TVET curriculum, affiliated
                courses are offered to instigate creativity in our graduates.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {programs.map((program) => (
                <div
                  key={program.title}
                  className="bg-white border border-border rounded-2xl p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <program.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {program.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{program.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Conservation Section */}
        <section className="py-16 bg-primary text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative h-[300px] rounded-3xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800"
                  alt="Forest conservation"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-serif mb-6">
                  Conservation of Nature
                </h2>
                <p className="text-white/80 leading-relaxed mb-6">
                  Our research programs focus on the preservation and sustainable use of
                  East African medicinal plants. We work to document traditional
                  knowledge while developing modern applications for these valuable
                  botanical resources.
                </p>
                <h3 className="text-xl font-semibold mb-4">Resource Mobilization</h3>
                <p className="text-white/80 leading-relaxed">
                  Mau Summit Botanical Institute and its units need resources to carry
                  out its mandate. We actively gather and utilize resources to achieve
                  our conservation and educational goals through partnerships and
                  community engagement.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Innovation Hub Section */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Lightbulb className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-4">
                Innovation Hub
              </h2>
              <p className="text-muted-foreground max-w-3xl mx-auto mb-8">
                Responding to customer and community enquiries on health challenges
                bedeviling them. In an environment where Medicare and medical services
                are dysfunctional, we provide natural solutions for:
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {innovationHub.map((condition) => (
                <span
                  key={condition}
                  className="px-6 py-3 bg-primary/10 text-primary rounded-full font-medium"
                >
                  {condition}
                </span>
              ))}
            </div>

            <div className="text-center">
              <Link
                href="/contact"
                className="inline-block bg-primary text-white px-8 py-3 rounded-full font-medium hover:bg-primary-dark transition-colors"
              >
                Learn More About Our Programs
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-muted">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-4">
              Join Our Learning Community
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Whether you are a student, researcher, or nature enthusiast, Mau Summit
              Botanical Institute welcomes you to explore, learn, and contribute to the
              preservation of East African botanical heritage.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-primary text-white px-8 py-3 rounded-full font-medium hover:bg-primary-dark transition-colors"
            >
              Contact Us Today
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}

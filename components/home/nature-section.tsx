import { BookOpen, Shield, Leaf, Users, Award, Heart } from "lucide-react"

const values = [
  {
    icon: BookOpen,
    title: "Education",
    description: "We share plant science and traditional wisdom in every tour and program."
  },
  {
    icon: Shield,
    title: "Integrity",
    description: "We operate openly—our cultivation and packaging processes are transparent and traceable."
  },
  {
    icon: Leaf,
    title: "Sustainability",
    description: "We honor the land with eco-friendly farming and responsible stewardship."
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "We partner with wellness brands, clinics, and researchers to expand access to natural remedies."
  },
  {
    icon: Award,
    title: "Excellence",
    description: "From garden experiences to Tinet teas, syrups, and powders, we uphold the highest quality standards."
  },
  {
    icon: Heart,
    title: "Heritage",
    description: "We celebrate indigenous African plants and the communities that have used them for generations."
  }
]

export function NatureSection() {
  return (
    <section className="py-10 md:py-14">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-display text-olive-leaf">
            Nature at its Peak.
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {values.map((value) => (
            <div key={value.title} className="text-center p-4">
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-sunroot-gold/20 mb-3">
                <value.icon className="w-5 h-5 text-sunroot-gold" />
              </div>
              <h3 className="font-display font-bold text-sm mb-1 text-deep-charcoal">{value.title}</h3>
              <p className="text-xs font-body text-deep-charcoal/70 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

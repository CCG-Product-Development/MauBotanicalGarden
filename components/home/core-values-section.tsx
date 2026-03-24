import { BookOpen, Shield, Leaf, Users } from "lucide-react"

const coreValues = [
  {
    icon: Shield,
    title: "Integrity",
    description:
      "We operate openly—our cultivation and packaging processes are transparent and traceable.",
  },
  {
    icon: Leaf,
    title: "Sustainability",
    description:
      "We honor the land with eco-friendly farming and responsible stewardship.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description:
      "We partner with wellness brands, clinics, and researchers to expand access to natural remedies.",
  },
  {
    icon: BookOpen,
    title: "Education",
    description:
      "We share plant science and traditional wisdom in every tour and program.",
  },
]

export function CoreValuesSection() {
  return (
    <section className="py-16 md:py-20 px-4 bg-muted">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {coreValues.map((value) => (
            <div key={value.title} className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                <value.icon className="w-8 h-8 text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="font-semibold text-foreground mb-2">
                {value.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

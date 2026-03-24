import { Leaf, Heart, Users, GraduationCap } from "lucide-react";

const values = [
  {
    icon: Leaf,
    title: "Respect",
    description:
      "We sustainability honor the medicinal heritage and botanical diversity of Kenya.",
  },
  {
    icon: Heart,
    title: "Stewardship",
    description:
      "We believe in the dignity of farm stewardship, community well-being.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description:
      "We partner with wellness brands, clinics and researchers to expand access to natural remedies.",
  },
  {
    icon: GraduationCap,
    title: "Education",
    description:
      "We share plant science and traditional wisdom in every tour and program.",
  },
];

export default function NatureSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-foreground mb-6">
            Nature at its Peak.
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            We offer guided tours, family-friendly activities, and immersive learning experiences that bring plant heritage to life. We also cultivate and package our own herbs and spices, merging traditional African knowledge with modern standards of quality and transparency.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {values.map((value) => (
            <div key={value.title} className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                <value.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{value.title}</h3>
              <p className="text-sm text-muted-foreground">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

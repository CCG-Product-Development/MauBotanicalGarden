import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us | Mau Summit Botanical Gardens",
  description:
    "Learn about Kenya's premier center for botanical discovery, our mission, and core values.",
}

const coreValues = [
  {
    title: "Education",
    description:
      "We share plant science and traditional wisdom in every tour and program.",
  },
  {
    title: "Integrity",
    description:
      "We operate openly\u2014our cultivation and packaging processes are transparent and traceable.",
  },
  {
    title: "Sustainability",
    description:
      "We honor the land with eco-friendly farming and responsible stewardship.",
  },
  {
    title: "Collaboration",
    description:
      "We partner with wellness brands, clinics, and researchers to expand access to natural remedies.",
  },
  {
    title: "Excellence",
    description:
      "From garden experiences to Tinet teas, syrups, and powders, we uphold the highest quality standards.",
  },
  {
    title: "Heritage",
    description:
      "We celebrate indigenous African plants and the communities that have used them for generations.",
  },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#000] py-24 lg:py-32">
        <div className="mx-auto max-w-4xl px-4 text-center lg:px-8">
          <h1 className="font-serif text-4xl font-bold text-[#fff] md:text-5xl lg:text-6xl">
            About Us
          </h1>
        </div>
      </section>

      {/* About content */}
      <section className="bg-background py-16 lg:py-24">
        <div className="mx-auto max-w-4xl px-4 lg:px-8">
          <p className="text-base leading-relaxed text-foreground">
            Mau Summit Botanical Gardens is Kenya{"'"}s premier center for botanical discovery and natural wellness. We offer guided tours, family-friendly activities, and immersive learning experiences that bring plant heritage to life. We also cultivate and package our own herbs and spices, merging traditional African knowledge with modern standards of quality and transparency. Whether you{"'"}re a student, nature enthusiast, or corporate team, MSBG welcomes you to explore, learn, and find balance in a premium, heritage-rich setting.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-card py-16 lg:py-24">
        <div className="mx-auto max-w-4xl px-4 lg:px-8">
          <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl">
            Mission
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground">
            At Mau Summit Botanical Garden, we believe that to make the world a better place, we must first care for ourselves and our planet. We restore health naturally by combining time-honored African herbal wisdom with science-backed research. Through educational garden experiences and premium botanical remedies, we empower individuals and communities to live healthier, more sustainable lives.
          </p>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-background py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl">
            Core Values
          </h2>

          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {coreValues.map((value) => (
              <div
                key={value.title}
                className="border border-border p-8"
              >
                <h3 className="font-serif text-xl font-semibold text-foreground">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

import Link from "next/link"

const features = [
  {
    title: "Guided Botanical Tours",
    description:
      "Walk through curated trails of indigenous medicinal herbs, aromatic plants, and heritage species with expert guides who share centuries of African plant wisdom.",
    href: "/about",
    cta: "Learn More",
  },
  {
    title: "Tinet Herbal Products",
    description:
      "From Avocado Leaf Tea to Black Pepper Spice, our Tinet line brings the garden's healing power to your home. Cultivated on-site, packaged with care.",
    href: "/shop",
    cta: "Shop Products",
  },
  {
    title: "Conservation in Action",
    description:
      "Our eco-friendly farming practices protect the Mau Forest ecosystem while sustainably cultivating the botanicals that make our products possible.",
    href: "/conservation",
    cta: "Our Impact",
  },
]

export function FeaturedSection() {
  return (
    <section className="bg-card py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mt-16 flex flex-col gap-20">
          {features.map((feature, i) => (
            <div
              key={feature.title}
              className={`flex flex-col items-center gap-8 lg:gap-14 ${
                i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              }`}
            >
              {/* Black placeholder */}
              <div className="w-full lg:w-1/2">
                <div className="aspect-[4/3] bg-[#000]" />
              </div>

              {/* Content */}
              <div className="w-full lg:w-1/2">
                <h3 className="font-serif text-2xl font-bold text-foreground md:text-3xl">
                  {feature.title}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
                  {feature.description}
                </p>
                <Link
                  href={feature.href}
                  className="mt-6 inline-block text-sm font-semibold text-primary"
                >
                  {feature.cta}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

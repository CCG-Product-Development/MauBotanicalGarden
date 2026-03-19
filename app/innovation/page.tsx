import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Innovation | Mau Summit Botanical Gardens",
  description:
    "Nutraceutical innovation at Mau Summit Botanical Gardens.",
}

export default function InnovationPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#000] py-24 lg:py-32">
        <div className="mx-auto max-w-4xl px-4 text-center lg:px-8">
          <h1 className="font-serif text-4xl font-bold text-[#fff] md:text-5xl lg:text-6xl">
            Innovation
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="bg-background py-16 lg:py-24">
        <div className="mx-auto max-w-4xl px-4 lg:px-8">
          <p className="text-base leading-relaxed text-muted-foreground">
            Placeholder text goes here
          </p>
        </div>
      </section>
    </>
  )
}

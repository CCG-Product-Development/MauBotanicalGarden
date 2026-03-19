import Link from "next/link"

const categories = [
  {
    title: "E-Commerce",
    description: "Placeholder text goes here",
    href: "/shop",
  },
  {
    title: "Information",
    description: "Placeholder text goes here",
    href: "/about",
  },
  {
    title: "Resource Mobilization",
    description: "Placeholder text goes here",
    href: "/about",
  },
  {
    title: "Conservation",
    description: "Placeholder text goes here",
    href: "/conservation",
  },
  {
    title: "Education",
    description: "Placeholder text goes here",
    href: "/education",
  },
  {
    title: "Nutraceutical Innovation",
    description: "Placeholder text goes here",
    href: "/innovation",
  },
]

export function CategoriesSection() {
  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat) => (
            <Link
              key={cat.title}
              href={cat.href}
              className="border border-border bg-card p-8"
            >
              <h3 className="font-serif text-xl font-semibold text-card-foreground">
                {cat.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {cat.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

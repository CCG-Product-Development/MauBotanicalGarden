import Image from "next/image"
import Link from "next/link"

const featuredProducts = [
  {
    id: "turmeric",
    name: "Turmeric",
    description:
      "Anti-inflammatory. A warm cup before bedtime helps the body wind down and relax.",
    image: "https://images.unsplash.com/photo-1615485500704-8e990f9900f7?w=400&q=80",
    color: "bg-amber-100",
  },
  {
    id: "blackberry",
    name: "Blackberry",
    description:
      "Rich in vitamins and antioxidants, the immune resistance of the digestive tract.",
    image: "https://images.unsplash.com/photo-1615485020839-838b23c29898?w=400&q=80",
    color: "bg-purple-100",
  },
  {
    id: "purple-tea",
    name: "Purple Tea",
    description:
      "Rich in antioxidants. It contains high levels of anthocyanins and polyphenols which reduce oxidative stress.",
    image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400&q=80",
    color: "bg-violet-100",
  },
]

export function FeaturedProductsSection() {
  return (
    <section className="py-16 md:py-24 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <Link
              key={product.id}
              href={`/shop/${product.id}`}
              className="group"
            >
              <div
                className={`${product.color} rounded-2xl p-6 aspect-square flex items-center justify-center mb-4 overflow-hidden`}
              >
                <div className="relative w-32 h-48 group-hover:scale-105 transition-transform duration-300">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <h3 className="font-semibold text-primary text-lg mb-2">
                {product.name}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {product.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

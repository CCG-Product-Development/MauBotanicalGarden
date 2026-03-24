import Image from "next/image";
import Link from "next/link";

const featuredProducts = [
  {
    id: "turmeric",
    name: "Turmeric",
    description:
      "Rich in curcumin. A warm cup before bedtime helps the body wind down and relax.",
    image: "/images/products/turmeric.jpg",
  },
  {
    id: "blackberry",
    name: "Blackberry",
    description:
      "Rich in vitamins and strengthens the immune membrane of the digestive tract.",
    image: "/images/products/blackberry.jpg",
  },
  {
    id: "purple-tea",
    name: "Purple Tea",
    description:
      "Rich in anthocyanins. It contains high levels of anthocyanins and polyphenols which reduces oxidative stress.",
    image: "/images/products/purple-tea.jpg",
  },
];

export default function FeaturedProducts() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <Link
              key={product.id}
              href={`/shop/${product.id}`}
              className="group text-center"
            >
              <div className="relative w-48 h-64 mx-auto mb-4">
                <div className="w-full h-full bg-muted rounded-lg flex items-center justify-center overflow-hidden">
                  <div className="w-32 h-48 bg-primary/10 rounded-lg flex items-center justify-center">
                    <span className="text-xs text-primary font-medium uppercase tracking-wider">
                      {product.name}
                    </span>
                  </div>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-primary mb-2">
                {product.name}:
              </h3>
              <p className="text-sm text-muted-foreground max-w-xs mx-auto">
                {product.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

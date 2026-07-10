import Link from "next/link"
import { Button } from "@/components/ui/button"

export function ProductsSection() {
  return (
    <section className="py-10 md:py-14 bg-olive-leaf/10">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-display text-olive-leaf mb-4">
            Explore Our Products
          </h2>
          <p className="font-body text-deep-charcoal mb-6 max-w-xl mx-auto">
            Discover our collection of healing teas, culinary herbs, and aromatic spices - all made with own grown quality herbs and ethically sourced ingredients.
          </p>
          <Link href="/shop">
            <Button className="bg-olive-leaf hover:bg-olive-leaf/90 text-natural-cream rounded-full px-8 py-6 font-accent text-lg">
              Browse Our Shop
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

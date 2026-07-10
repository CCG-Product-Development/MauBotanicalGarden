"use client"

import Link from "next/link"
import Image from "next/image"
import { Truck } from "lucide-react"
import { categories, getProductsByCategory } from "@/lib/products"
import { priceFor } from "@/lib/pricing"

const medicalPlants = [
  "Ajuga Remota", "Artemisia annua", "Avocado", "California Poppy", "Celery", "Chamomile", 
  "Chayote", "Cilantro", "Comfrey", "Dill seeds", "Eucalyptus", "Fennel seeds", "Fenugreek", 
  "Feverfew", "Goose mint", "Lancelot Minor", "Lavender", "Lemon grass", "Loquat", 
  "Madagascan Periwinkle", "Melisa", "Mexican bush sage", "Milk Thistle", "Muigoya", 
  "Oregano", "Ox eye daisy", "Parsley", "Passion fruit", "Pepper mint", "Plantago Major", 
  "Plantago minor", "Prunus Africana", "Rosemary", "Sage salvia", "Scented-Leaf Geraniums", 
  "Spearmint", "Stinging nettle", "Thyme", "Warburgia UG"
]

export function ShopContent() {
  return (
    <div className="bg-olive-leaf/5">
      <div className="container mx-auto px-4 py-12 md:py-16">
        {/* Free Shipping Banner */}
        <div className="bg-olive-leaf text-natural-cream rounded-xl p-4 mb-8 flex items-center justify-center gap-3">
          <Truck className="w-5 h-5" />
          <span className="font-accent font-semibold">FREE SHIPPING on all orders</span>
        </div>

        {/* Header Section */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display italic text-olive-leaf mb-6">
            Our Shop
          </h1>
          <p className="font-body text-deep-charcoal max-w-2xl mb-8">
            <strong className="text-sunroot-gold">Made with own grown quality herbs.</strong> And blended with ethically sourced herbs and spices.
          </p>
          
          {/* Medical Plants List */}
          <div className="bg-natural-cream border border-border rounded-xl p-6">
            <h3 className="font-accent font-semibold text-olive-leaf mb-3">Medical plants in use:</h3>
            <p className="text-sm font-body text-deep-charcoal leading-relaxed">
              {medicalPlants.join(" • ")}
            </p>
          </div>
        </div>

        {/* Categories */}
        {categories.map((category) => {
          const categoryProducts = getProductsByCategory(category.id)
          if (categoryProducts.length === 0) return null
          
          return (
            <div key={category.id} className="mb-12">
              <h2 className="text-2xl font-display mb-6 text-olive-leaf border-b border-sunroot-gold pb-2">
                {category.name}
              </h2>

              {/* Product Grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                {categoryProducts.map((product) => {
                  const price = {
                    kes: priceFor(product.category, 'KES'),
                    usd: priceFor(product.category, 'USD'),
                  }

                  return (
                    <Link
                      key={product.id}
                      href={`/shop/${product.slug}`}
                      className="group"
                    >
                      <div className="bg-natural-cream rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all hover:-translate-y-1 border border-border">
                        <div className="relative aspect-square bg-natural-cream flex items-center justify-center overflow-hidden">
                          {product.image ? (
                            <Image 
                              src={product.image} 
                              alt={product.name}
                              fill
                              className="object-contain p-2"
                            />
                          ) : (
                            <div className="text-center p-3">
                              <div className="w-16 h-20 mx-auto bg-olive-leaf/20 rounded-lg flex items-center justify-center mb-2">
                                <span className="text-olive-leaf text-xs font-display font-medium">{product.name.charAt(0)}</span>
                              </div>
                            </div>
                          )}
                        </div>
                        <div className="p-3 text-center">
                          <h3 className="font-accent font-medium text-sm text-deep-charcoal group-hover:text-olive-leaf transition-colors">
                            {product.name}
                          </h3>
                          <p className="text-xs font-accent font-semibold text-sunroot-gold mt-1">
                            KES {price.kes} / ${price.usd.toFixed(2)}
                          </p>
                          <p className="text-[10px] font-body text-evergreen mt-1">
                            Code: {product.productCode}
                          </p>
                        </div>
                      </div>
                    </Link>
                  )
                })}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

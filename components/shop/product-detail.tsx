"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Minus, Plus, ShoppingCart, Check } from "lucide-react"
import type { Product } from "@/lib/products"
import { categories } from "@/lib/products"
import { useCart } from "@/lib/cart-context"
import { Button } from "@/components/ui/button"

interface ProductDetailProps {
  product: Product
}

export function ProductDetail({ product }: ProductDetailProps) {
  const [openSection, setOpenSection] = useState<string | null>(product.benefits && product.benefits.length > 0 ? "benefits" : "description")
  const [addedToCart, setAddedToCart] = useState(false)
  const { addToCart } = useCart()

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section)
  }

  const categoryName = categories.find(c => c.id === product.category)?.name || 'Products'
  const isTeaProduct = product.category.includes('teas')
  
  // Pricing: Teas = KES 775 / $6, Herbs & Spices = $1.29
  const price = isTeaProduct 
    ? { usd: 6, kes: 775 }
    : { usd: 1.29, kes: 167 }

  const handleAddToCart = () => {
    addToCart(product)
    setAddedToCart(true)
    setTimeout(() => setAddedToCart(false), 2000)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <nav className="text-sm font-body text-deep-charcoal mb-8">
        <Link href="/shop" className="hover:text-olive-leaf transition-colors">
          Shop
        </Link>
        <span className="mx-2 text-sunroot-gold">/</span>
        <Link href="/shop" className="hover:text-olive-leaf transition-colors">
          {categoryName}
        </Link>
        <span className="mx-2 text-sunroot-gold">/</span>
        <span className="text-olive-leaf font-medium">{product.name}</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Product Image */}
        <div>
          <div className="relative aspect-square bg-natural-cream rounded-2xl overflow-hidden mb-4 flex items-center justify-center border border-border">
            {product.image ? (
              <Image 
                src={product.image} 
                alt={product.name}
                fill
                className="object-contain p-4"
              />
            ) : (
              <div className="text-center">
                <div className="w-32 h-40 mx-auto bg-olive-leaf/20 rounded-lg flex items-center justify-center mb-2">
                  <span className="text-olive-leaf text-2xl font-display font-medium">{product.name.charAt(0)}</span>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Product Info */}
        <div>
          <h1 className="text-3xl md:text-4xl font-display text-olive-leaf mb-4">
            {product.name}
          </h1>

          <p className="text-sm font-body text-evergreen mb-4">
            Product Code: {product.productCode}
          </p>

          {isTeaProduct && (
            <p className="font-accent text-deep-charcoal mb-4">
              20 Tea Bags
            </p>
          )}

          {/* Price Display */}
          <div className="mb-6">
            <p className="text-2xl font-display text-sunroot-gold font-semibold">
              KES {price.kes} / ${price.usd.toFixed(2)}
            </p>
          </div>

          {/* Add to Cart Button */}
          <div className="flex gap-3 mb-8">
            <Button 
              onClick={handleAddToCart}
              className={`flex-1 font-accent font-semibold py-6 ${
                addedToCart 
                  ? 'bg-olive-leaf text-natural-cream' 
                  : 'bg-sunroot-gold hover:bg-sunroot-gold/90 text-deep-charcoal'
              }`}
            >
              {addedToCart ? (
                <>
                  <Check className="w-5 h-5 mr-2" />
                  Added to Cart
                </>
              ) : (
                <>
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  Add to Cart - KES {price.kes} / ${price.usd.toFixed(2)}
                </>
              )}
            </Button>
            <Link href="/cart">
              <Button variant="outline" className="border-olive-leaf text-olive-leaf hover:bg-olive-leaf hover:text-natural-cream font-accent py-6">
                View Cart
              </Button>
            </Link>
          </div>

          {/* Accordion Sections */}
          <div className="space-y-2">
            {/* Benefits */}
            {product.benefits && product.benefits.length > 0 && (
              <div className="border border-border rounded-lg overflow-hidden bg-natural-cream">
                <button
                  onClick={() => toggleSection("benefits")}
                  className="w-full flex items-center justify-between p-4 hover:bg-olive-leaf/10 transition-colors"
                >
                  <span className="font-accent font-semibold text-olive-leaf">BENEFITS</span>
                  {openSection === "benefits" ? (
                    <Minus className="w-5 h-5 text-sunroot-gold" />
                  ) : (
                    <Plus className="w-5 h-5 text-olive-leaf" />
                  )}
                </button>
                {openSection === "benefits" && (
                  <div className="px-4 pb-4">
                    <ul className="list-disc list-inside font-body text-deep-charcoal space-y-1">
                      {product.benefits.map((benefit, i) => (
                        <li key={i}>{benefit}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}

            {/* Description */}
            {product.description.length > 0 && (
              <div className="border border-border rounded-lg overflow-hidden bg-natural-cream">
                <button
                  onClick={() => toggleSection("description")}
                  className="w-full flex items-center justify-between p-4 hover:bg-olive-leaf/10 transition-colors"
                >
                  <span className="font-accent font-semibold text-olive-leaf">DESCRIPTION</span>
                  {openSection === "description" ? (
                    <Minus className="w-5 h-5 text-sunroot-gold" />
                  ) : (
                    <Plus className="w-5 h-5 text-olive-leaf" />
                  )}
                </button>
                {openSection === "description" && (
                  <div className="px-4 pb-4">
                    <ul className="font-body text-deep-charcoal space-y-3">
                      {product.description.map((desc, i) => (
                        <li key={i}>{desc}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

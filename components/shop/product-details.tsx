"use client"

import { useState } from "react"
import Image from "next/image"
import { Star, Minus, Plus, ChevronDown, ChevronUp } from "lucide-react"
import type { Product } from "@/lib/products"
import { cn } from "@/lib/utils"

interface ProductDetailsProps {
  product: Product
}

export function ProductDetails({ product }: ProductDetailsProps) {
  const [quantity, setQuantity] = useState(1)
  const [selectedSize, setSelectedSize] = useState("20 Bags")
  const [expandedSections, setExpandedSections] = useState<string[]>([
    "key-points",
    "ingredients",
  ])

  const toggleSection = (section: string) => {
    setExpandedSections((prev) =>
      prev.includes(section)
        ? prev.filter((s) => s !== section)
        : [...prev, section]
    )
  }

  const sizes = ["10 Bags", "20 Bags", "50 Bags"]

  return (
    <section className="py-8 md:py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Product Images */}
          <div>
            <div className="bg-muted rounded-2xl p-8 aspect-square flex items-center justify-center mb-4">
              <div className="relative w-48 h-64 md:w-56 md:h-72">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
            {/* Thumbnail Images */}
            <div className="flex gap-2 justify-center">
              {[1, 2, 3, 4].map((i) => (
                <button
                  key={i}
                  className={cn(
                    "w-16 h-16 rounded-lg border-2 overflow-hidden",
                    i === 1 ? "border-primary" : "border-border"
                  )}
                >
                  <div className="relative w-full h-full bg-muted">
                    <Image
                      src={product.image}
                      alt={`${product.name} view ${i}`}
                      fill
                      className="object-contain p-1"
                    />
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div>
            <h1 className="text-3xl md:text-4xl font-serif text-foreground mb-4">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-4 mb-4">
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={cn(
                      "w-4 h-4",
                      star <= 4
                        ? "fill-amber-400 text-amber-400"
                        : "fill-muted text-muted"
                    )}
                  />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">288 reviews</span>
              <span className="text-sm text-foreground font-medium">
                {selectedSize}
              </span>
            </div>

            {/* Price */}
            <p className="text-2xl font-semibold text-primary mb-4">
              ${product.price.toFixed(2)}
            </p>

            {/* Description */}
            <p className="text-muted-foreground mb-6 leading-relaxed">
              {product.description}
            </p>

            {/* Size Selector & Quantity */}
            <div className="flex items-center gap-4 mb-6">
              <select
                value={selectedSize}
                onChange={(e) => setSelectedSize(e.target.value)}
                className="px-4 py-2 border border-border rounded-lg bg-card text-foreground"
              >
                {sizes.map((size) => (
                  <option key={size} value={size}>
                    {size}
                  </option>
                ))}
              </select>

              <div className="flex items-center border border-border rounded-lg">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-2 hover:bg-muted transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="px-4 py-2 font-medium">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-2 hover:bg-muted transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>

              <button className="flex-1 bg-primary text-primary-foreground py-3 px-6 rounded-lg font-medium hover:bg-primary/90 transition-colors">
                Add to cart
              </button>
            </div>

            {/* Expandable Sections */}
            <div className="space-y-4">
              {/* Key Points */}
              {product.keyPoints && (
                <div className="border border-border rounded-lg">
                  <button
                    onClick={() => toggleSection("key-points")}
                    className="w-full flex items-center justify-between p-4 text-left"
                  >
                    <span className="font-semibold text-foreground">
                      KEY POINTS
                    </span>
                    {expandedSections.includes("key-points") ? (
                      <ChevronUp className="w-5 h-5 text-primary" />
                    ) : (
                      <ChevronDown className="w-5 h-5" />
                    )}
                  </button>
                  {expandedSections.includes("key-points") && (
                    <div className="px-4 pb-4">
                      <p className="text-muted-foreground text-sm">
                        {product.keyPoints.join(". ")}
                      </p>
                    </div>
                  )}
                </div>
              )}

              {/* Ingredients */}
              {product.ingredients && (
                <div className="border border-border rounded-lg">
                  <button
                    onClick={() => toggleSection("ingredients")}
                    className="w-full flex items-center justify-between p-4 text-left"
                  >
                    <span className="font-semibold text-foreground">
                      INGREDIENTS
                    </span>
                    {expandedSections.includes("ingredients") ? (
                      <ChevronUp className="w-5 h-5 text-primary" />
                    ) : (
                      <ChevronDown className="w-5 h-5" />
                    )}
                  </button>
                  {expandedSections.includes("ingredients") && (
                    <div className="px-4 pb-4">
                      <p className="text-muted-foreground text-sm">
                        {product.ingredients}
                      </p>
                    </div>
                  )}
                </div>
              )}

              {/* How to Use */}
              {product.howToUse && (
                <div className="border border-border rounded-lg">
                  <button
                    onClick={() => toggleSection("how-to-use")}
                    className="w-full flex items-center justify-between p-4 text-left"
                  >
                    <span className="font-semibold text-foreground">
                      HOW TO USE
                    </span>
                    {expandedSections.includes("how-to-use") ? (
                      <ChevronUp className="w-5 h-5 text-primary" />
                    ) : (
                      <ChevronDown className="w-5 h-5" />
                    )}
                  </button>
                  {expandedSections.includes("how-to-use") && (
                    <div className="px-4 pb-4">
                      <p className="text-muted-foreground text-sm">
                        {product.howToUse}
                      </p>
                    </div>
                  )}
                </div>
              )}

              {/* Quality */}
              <div className="border border-border rounded-lg">
                <button
                  onClick={() => toggleSection("quality")}
                  className="w-full flex items-center justify-between p-4 text-left"
                >
                  <span className="font-semibold text-foreground">QUALITY</span>
                  {expandedSections.includes("quality") ? (
                    <ChevronUp className="w-5 h-5 text-primary" />
                  ) : (
                    <ChevronDown className="w-5 h-5" />
                  )}
                </button>
                {expandedSections.includes("quality") && (
                  <div className="px-4 pb-4">
                    <p className="text-muted-foreground text-sm">
                      All our products are organically grown and carefully
                      processed to maintain maximum potency. We follow strict
                      quality control measures and our facilities are certified
                      to meet international standards.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

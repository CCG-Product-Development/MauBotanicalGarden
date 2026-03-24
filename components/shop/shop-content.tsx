"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import type { Product, ProductCategory } from "@/lib/products"
import { cn } from "@/lib/utils"

interface ShopContentProps {
  products: Product[]
  categories: { id: string; name: string }[]
}

export function ShopContent({ products, categories }: ShopContentProps) {
  const [activeCategory, setActiveCategory] = useState<ProductCategory>("all")

  const filteredProducts =
    activeCategory === "all"
      ? products
      : products.filter((product) => product.category === activeCategory)

  return (
    <section className="py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 mb-8 border-b border-border pb-4">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id as ProductCategory)}
              className={cn(
                "px-4 py-2 text-sm font-medium rounded-full transition-colors",
                activeCategory === category.id
                  ? "bg-primary text-primary-foreground"
                  : "bg-card text-foreground hover:bg-muted border border-border"
              )}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">
              No products found in this category.
            </p>
          </div>
        )}
      </div>
    </section>
  )
}

function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/shop/${product.id}`} className="group">
      <div className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
        <div className="aspect-square relative bg-muted p-4">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="p-4">
          <h3 className="font-medium text-foreground text-center mb-1">
            {product.name}
          </h3>
          <p className="text-muted-foreground text-center text-sm">
            ${product.price.toFixed(2)}
          </p>
        </div>
      </div>
    </Link>
  )
}

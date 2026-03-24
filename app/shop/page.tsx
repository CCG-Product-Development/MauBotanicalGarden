"use client";

import { useState } from "react";
import Link from "next/link";
import { products, medicinalPlants } from "@/lib/products";
import { cn } from "@/lib/utils";

const categories = [
  { id: "all", label: "All Products" },
  { id: "teas", label: "Teas" },
  { id: "herbs", label: "Herbs" },
  { id: "spices", label: "Spices" },
  { id: "coffee", label: "Coffee" },
  { id: "seeds", label: "Seeds" },
  { id: "plants", label: "Plants" },
];

export default function ShopPage() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProducts =
    activeCategory === "all"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <div className="border-8 border-primary">
      <div className="bg-white min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Header Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-foreground italic">
                Our Shop
              </h1>
            </div>
            <div className="space-y-4 text-muted-foreground">
              <p>
                <span className="font-semibold text-foreground">Sustainability:</span>{" "}
                We honor the land with eco-friendly farming and responsible stewardship.
              </p>
              <p>
                <span className="font-semibold text-foreground">Collaboration:</span>{" "}
                We partner with wellness brands, clinics, and researchers to expand access to natural remedies.
              </p>
              <p>
                <span className="font-semibold text-foreground">Excellence:</span>{" "}
                From garden experiences to Tinet teas, syrups, and powders, we uphold the highest quality standards.
              </p>
            </div>
          </div>

          {/* Introduction Text */}
          <div className="mb-12 p-6 bg-primary/5 rounded-2xl">
            <p className="text-lg text-foreground mb-4">
              Made with own grown quality herbs. And blended with ethically sourced herbs and spices.
            </p>
            <div>
              <h3 className="font-semibold text-foreground mb-2">Medical plants in use:</h3>
              <p className="text-sm text-muted-foreground">
                {medicinalPlants.join(" • ")}
              </p>
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 mb-12 border-b border-border pb-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={cn(
                  "px-4 py-2 text-sm font-medium rounded-full transition-colors",
                  activeCategory === category.id
                    ? "bg-foreground text-white"
                    : "bg-white text-foreground border border-border hover:bg-muted"
                )}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <Link
                key={product.id}
                href={`/shop/${product.id}`}
                className="group"
              >
                <div className="bg-white border border-border rounded-xl p-4 transition-shadow hover:shadow-lg">
                  <div className="aspect-square relative mb-4 bg-muted rounded-lg overflow-hidden flex items-center justify-center">
                    <div className="w-24 h-32 bg-primary/10 rounded-lg flex flex-col items-center justify-center p-2">
                      <span className="text-[10px] text-primary font-bold uppercase tracking-wider text-center">
                        {product.name}
                      </span>
                      <span className="text-[8px] text-primary/60 mt-1">DRINK</span>
                    </div>
                  </div>
                  <h3 className="text-sm font-medium text-foreground text-center mb-1">
                    {product.name}
                  </h3>
                  <p className="text-sm text-muted-foreground text-center">
                    ${product.price.toFixed(2)}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

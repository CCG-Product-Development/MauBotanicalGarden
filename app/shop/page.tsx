import { ShopContent } from "@/components/shop/shop-content"
import { products, categories, medicalPlants } from "@/lib/products"

export default function ShopPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-12 md:py-16 px-4 border-b border-border">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-foreground">
              Our Shop
            </h1>
            <div className="space-y-4 text-muted-foreground">
              <p>
                <span className="font-semibold text-foreground">
                  Sustainability:
                </span>{" "}
                We honor the land with eco-friendly farming and responsible
                stewardship.
              </p>
              <p>
                <span className="font-semibold text-foreground">
                  Collaboration:
                </span>{" "}
                We partner with wellness brands, clinics, and researchers to
                expand access to natural remedies.
              </p>
              <p>
                <span className="font-semibold text-foreground">
                  Excellence:
                </span>{" "}
                From garden experiences to Tinet teas, syrups, and powders, we
                uphold the highest quality standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Shop Description */}
      <section className="py-8 px-4 bg-muted">
        <div className="max-w-6xl mx-auto">
          <p className="text-lg text-foreground mb-4">
            Made with our own grown quality herbs. Blended with ethically
            sourced herbs and spices.
          </p>
          <div>
            <h3 className="font-semibold text-foreground mb-2">
              Medical plants in use:
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {medicalPlants.join(" • ")}
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <ShopContent products={products} categories={categories} />
    </div>
  )
}

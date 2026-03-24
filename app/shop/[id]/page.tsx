import { notFound } from "next/navigation"
import { products } from "@/lib/products"
import { ProductDetails } from "@/components/shop/product-details"
import { ReviewsSection } from "@/components/shop/reviews-section"
import { FAQSection } from "@/components/shop/faq-section"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

interface ProductPageProps {
  params: Promise<{ id: string }>
}

export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }))
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params
  const product = products.find((p) => p.id === id)

  if (!product) {
    notFound()
  }

  // Get category display name
  const categoryName = product.category
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")

  return (
    <div className="min-h-screen bg-background">
      {/* Breadcrumb */}
      <nav className="py-4 px-4 border-b border-border">
        <div className="max-w-6xl mx-auto">
          <ol className="flex items-center gap-2 text-sm">
            <li>
              <Link href="/shop" className="text-primary hover:underline">
                Category
              </Link>
            </li>
            <ChevronRight className="w-4 h-4 text-muted-foreground" />
            <li>
              <Link href="/shop" className="text-primary hover:underline">
                {categoryName}
              </Link>
            </li>
            <ChevronRight className="w-4 h-4 text-muted-foreground" />
            <li className="text-primary font-medium">{product.name}</li>
          </ol>
        </div>
      </nav>

      {/* Product Details */}
      <ProductDetails product={product} />

      {/* Reviews Section */}
      <ReviewsSection productName={product.name} />

      {/* FAQ Section */}
      <FAQSection productName={product.name} />
    </div>
  )
}

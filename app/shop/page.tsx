import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ShopContent } from "@/components/shop/shop-content"

export const metadata = {
  title: "Our Shop | Mau Summit Botanical Garden",
  description: "Shop our collection of healing teas, green teas, culinary herbs, spices, and more. Made with own grown quality herbs and ethically sourced ingredients."
}

export default function ShopPage() {
  return (
    <div className="min-h-screen bg-natural-cream">
      <Header />
      <main>
        <ShopContent />
      </main>
      <Footer />
    </div>
  )
}

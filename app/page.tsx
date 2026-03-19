import { HeroSection } from "@/components/home/hero-section"
import { CategoriesSection } from "@/components/home/categories-section"
import { ProductSpotlight } from "@/components/home/product-spotlight"
import { MissionBanner } from "@/components/home/mission-banner"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ProductSpotlight />
      <CategoriesSection />
      <MissionBanner />
    </>
  )
}

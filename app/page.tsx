import { HeroSection } from "@/components/home/hero-section"
import { NatureSection } from "@/components/home/nature-section"
import { CoreValuesSection } from "@/components/home/core-values-section"
import { FeaturedProductsSection } from "@/components/home/featured-products-section"
import { AboutSection } from "@/components/home/about-section"
import { MissionSection } from "@/components/home/mission-section"
import { ConnectSection } from "@/components/home/connect-section"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <NatureSection />
      <CoreValuesSection />
      <FeaturedProductsSection />
      <AboutSection />
      <MissionSection />
      <ConnectSection />
    </>
  )
}

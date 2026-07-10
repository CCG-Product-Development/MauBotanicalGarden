import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/home/hero-section"
import { NatureSection } from "@/components/home/nature-section"
import { ProductsSection } from "@/components/home/products-section"
import { AboutSection } from "@/components/home/about-section"
import { MissionSection } from "@/components/home/mission-section"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-natural-cream">
      <Header />
      <main>
        <HeroSection />
        <NatureSection />
        <ProductsSection />
        <AboutSection />
        <MissionSection />
      </main>
      <Footer />
    </div>
  )
}

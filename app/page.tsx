import { HeroSection } from "@/components/home/hero-section"
import { CategoriesSection } from "@/components/home/categories-section"
import { FeaturedSection } from "@/components/home/featured-section"
import { TestimonialBanner } from "@/components/home/testimonial-banner"
import { CTASection } from "@/components/home/cta-section"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturedSection />
      <CategoriesSection />
      <TestimonialBanner />
      <CTASection />
    </>
  )
}

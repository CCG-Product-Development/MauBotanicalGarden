import HeroSection from "@/components/home/hero-section";
import NatureSection from "@/components/home/nature-section";
import FeaturedProducts from "@/components/home/featured-products";
import AboutSection from "@/components/home/about-section";
import MissionSection from "@/components/home/mission-section";
import MapSection from "@/components/home/map-section";
import ConnectSection from "@/components/home/connect-section";

export default function HomePage() {
  return (
    <div className="border-8 border-primary">
      <HeroSection />
      <NatureSection />
      <FeaturedProducts />
      <AboutSection />
      <MissionSection />
      <MapSection />
      <ConnectSection />
    </div>
  );
}

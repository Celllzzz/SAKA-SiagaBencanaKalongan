import { HeroSection } from "@/components/home/hero-section";
import { MapSection } from "@/components/home/map-section";
import { AboutSection } from "@/components/home/about-section";

import { FeatureSection } from "@/components/home/feature-section";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-background">
      <HeroSection />
      <MapSection />
      <AboutSection />
      <FeatureSection />
    </main>
  );
}

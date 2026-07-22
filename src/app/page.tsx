import { HeroSection } from "@/components/home/hero-section";
import { MapSection } from "@/components/home/map-section";
import { AboutSection } from "@/components/home/about-section";
import { FeatureSection } from "@/components/home/feature-section";
import { TestimonialSection } from "@/components/home/testimonial-section";
import { FAQSection } from "@/components/home/faq-section";
import { GallerySection } from "@/components/home/gallery-section";
import { Footer } from "@/components/layout/footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-background">
      <HeroSection />
      <MapSection />
      <AboutSection />
      <FeatureSection />
      <TestimonialSection />
      <FAQSection />
      <GallerySection />
      <Footer />
    </main>
  );
}

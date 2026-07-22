import { HeroSection } from "@/components/tentang/hero-section";
import { AboutContentSection } from "@/components/tentang/about-content-section";
import { TeamSection } from "@/components/tentang/team-section";
import { Footer } from "@/components/layout/footer";

export default function TentangPage() {
  return (
    <main className="min-h-screen flex flex-col bg-background">
      <HeroSection />
      <AboutContentSection />
      <TeamSection />
      {/* TODO: Add other sections here later */}
      <Footer />
    </main>
  );
}

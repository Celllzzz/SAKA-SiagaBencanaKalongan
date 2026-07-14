import { HeroSection } from "@/components/home/hero-section";
import { MapSection } from "@/components/home/map-section";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-background">
      <HeroSection />
      <MapSection />
      
      {/* Bagian konten lainnya akan ditambahkan di bawah map section nantinya */}
      <div className="h-screen flex items-center justify-center bg-zinc-50">
        <p className="text-zinc-500 font-medium">Konten selanjutnya (Bento Grid, dll.)</p>
      </div>
    </main>
  );
}

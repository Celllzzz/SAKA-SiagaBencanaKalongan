import { BandunganMapSection } from "@/components/dusun/bandungan-map-section";
import Navbar from "@/components/layout/navbar"; // Asumsi ada Navbar, jika tidak ada hapus ini

export default function BandunganPreviewPage() {
  return (
    <main className="min-h-screen flex flex-col bg-background">
      {/* Jika navbar perlu dirender, kita pasang di sini atau layout */}
      <div className="pt-20" /> {/* Spacer untuk header jika perlu */}
      
      <BandunganMapSection />
    </main>
  );
}

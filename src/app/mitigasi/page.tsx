import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { MitigasiHero } from "@/components/mitigasi/mitigasi-hero";
import { MitigasiCard } from "@/components/mitigasi/mitigasi-card";
import { mitigasiDataList } from "@/data/mitigasi-data";

export const metadata = {
  title: 'Mitigasi | SAKA',
  description: 'Panduan dan prosedur mitigasi bencana tanah longsor di Desa Kalongan.',
};

export default function MitigasiPage() {
  return (
    <main className="min-h-screen bg-[#FAE3C7] flex flex-col">
      <Navbar />
      <MitigasiHero />
      
      {/* Cards List Section */}
      <section className="w-full max-w-[1440px] mx-auto flex flex-col pb-0">
        {mitigasiDataList.map((item, index) => (
          <MitigasiCard 
            key={item.id} 
            data={item} 
            isLast={index === mitigasiDataList.length - 1}
          />
        ))}
      </section>

      <Footer />
    </main>
  );
}

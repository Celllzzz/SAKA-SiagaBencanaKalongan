import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { PetaSection } from "@/components/peta/peta-section";

export default function PetaPage() {
  return (
    <main className="min-h-screen bg-[#FAE3C7] text-[#3B2215]">
      <Navbar />
      <PetaSection />
      <Footer />
    </main>
  );
}

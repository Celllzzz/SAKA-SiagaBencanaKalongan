import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ContactHero } from "@/components/hubungi-kami/contact-hero";
import { ComplaintForm } from "@/components/hubungi-kami/complaint-form";

export const metadata = {
  title: 'Hubungi Kami | SAKA',
  description: 'Kontak Darurat dan Form Pengaduan Bencana Desa Kalongan.',
};

export default function HubungiKamiPage() {
  return (
    <main className="min-h-screen bg-[#FAE3C7] flex flex-col" data-theme="light">
      <Navbar initialTheme="light" />
      <ContactHero />
      <ComplaintForm />
      <Footer />
    </main>
  );
}

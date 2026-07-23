import { DetailHeader } from "@/components/peta/detail-header";
import { Footer } from "@/components/layout/footer";
import { notFound } from "next/navigation";
import { dusunDataList, getDusunData } from "@/data/dusun-data";
import { OtherDusun } from "@/components/peta/other-dusun";
import { MapWrapper } from "@/components/peta/map-wrapper";
import { MapAccordion } from "@/components/peta/map-accordion";
import Link from "next/link";

export function generateStaticParams() {
  return dusunDataList.map((d) => ({
    dusun: d.slug,
  }));
}

export default async function PetaDetailPage({ params }: { params: Promise<{ dusun: string }> }) {
  const resolvedParams = await params;
  const dusunData = getDusunData(resolvedParams.dusun);

  if (!dusunData) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#FAE3C7] text-[#3B2215]">
      <DetailHeader title={dusunData.name} />
      
      <section 
        className="w-full max-w-[1440px] mx-auto p-[50px] flex flex-col gap-[50px]"
        data-theme="light"
        data-bg="#FAE3C7"
      >
        {/* Peta Interaktif */}
        <MapWrapper dusunSlug={dusunData.slug} />

        {/* Daftar Peta Tematik (Accordion) */}
        <MapAccordion mapItems={dusunData.maps} />
      </section>

      <OtherDusun currentSlug={dusunData.slug} />

      <Footer />
    </main>
  );
}

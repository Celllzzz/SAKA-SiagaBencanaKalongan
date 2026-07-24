import { mitigasiDetailDataList, getMitigasiDetailBySlug } from "@/data/mitigasi-detail-data";
import { notFound } from "next/navigation";
import { MitigasiDetailHeader } from "@/components/mitigasi/mitigasi-detail-header";
import { MitigasiDetailSection } from "@/components/mitigasi/mitigasi-detail-section";
import { MitigasiPdfSection } from "@/components/mitigasi/mitigasi-pdf-section";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

export function generateStaticParams() {
  return mitigasiDetailDataList.map((item) => ({
    slug: item.slug,
  }));
}

export default async function MitigasiDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const data = getMitigasiDetailBySlug(slug);

  if (!data) {
    notFound();
  }

  return (
    <>
      <Navbar initialTheme="light" />
      <main className="w-full min-h-screen flex flex-col bg-[#FAE3C7]">
        <MitigasiDetailHeader
          titleTop={data.titleTop}
          titleBottom={data.titleBottom}
          heroImage={data.heroImage}
          pdfUrl={data.pdfUrl}
        />

        {/* Sections Container */}
        <div className="w-full flex flex-col">
          {data.sections.map((section, index) => (
            <MitigasiDetailSection
              key={index}
              data={section}
              isLast={index === data.sections.length - 1}
            />
          ))}
        </div>

        <MitigasiPdfSection pdfUrl={data.pdfUrl} />
      </main>
      <Footer />
    </>
  );
}

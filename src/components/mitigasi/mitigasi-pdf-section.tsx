"use client";

import { FileText } from "lucide-react";
import dynamic from "next/dynamic";

// Memuat PDFViewer hanya di sisi klien (Client-Side Rendering) untuk mencegah error SSR
const PDFViewer = dynamic(() => import("./pdf-viewer"), {
  ssr: false,
  loading: () => (
    <div className="w-full max-w-[1340px] mx-auto h-[400px] bg-[#FAE3C7] rounded-xl flex items-center justify-center border-[4px] border-[#FAE3C7]">
      <p className="font-[Inter] text-[#3B2215] font-medium">Memuat komponen pembaca PDF...</p>
    </div>
  )
});

export function MitigasiPdfSection({ pdfUrl }: { pdfUrl?: string }) {
  return (
    <section className="w-full bg-[#3B2215] flex flex-col items-center py-[50px] px-[20px] md:px-[32px] xl:px-[50px] gap-[30px] md:gap-[50px]" data-theme="dark" data-bg="#3B2215">
      
      {/* Title */}
      <h2 className="font-[Inter] font-medium text-[clamp(20px,6.5vw,106px)] leading-none text-center tracking-[-0.045em] uppercase text-[#FFFFFF] w-full max-w-[1340px] mx-auto whitespace-nowrap">
        BACA SELENGKAPNYA
      </h2>

      {/* PDF Viewer / Placeholder */}
      {pdfUrl ? (
        <PDFViewer pdfUrl={pdfUrl} />
      ) : (
        <div className="w-full max-w-[1340px] mx-auto h-[65vh] md:h-[75vh] max-h-[800px] bg-[#FAE3C7]/20 border-2 border-dashed border-[#FAE3C7]/50 flex flex-col items-center justify-center gap-4">
          <FileText className="w-[60px] h-[60px] md:w-[100px] md:h-[100px] text-[#FAE3C7]/50" />
          <p className="font-[Inter] font-medium text-[16px] md:text-[24px] text-[#FAE3C7]/70 text-center px-4">
            Pratinjau Dokumen PDF Belum Tersedia
          </p>
        </div>
      )}

    </section>
  );
}

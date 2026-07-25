import { FileText } from "lucide-react";

export function MitigasiPdfSection({ pdfUrl }: { pdfUrl?: string }) {
  return (
    <section className="w-full bg-[#3B2215] flex flex-col items-center py-[50px] px-[20px] md:px-[32px] xl:px-[50px] gap-[30px] md:gap-[50px]" data-theme="dark" data-bg="#3B2215">
      
      {/* Title */}
      <h2 className="font-[Inter] font-medium text-[clamp(20px,6.5vw,106px)] leading-none text-center tracking-[-0.045em] uppercase text-[#FFFFFF] w-full max-w-[1340px] mx-auto whitespace-nowrap">
        BACA SELENGKAPNYA
      </h2>

      {/* PDF Viewer / Placeholder */}
      {pdfUrl ? (
        <div className="w-full max-w-[1340px] mx-auto flex flex-col gap-[20px]">
          
          {/* Desktop & Tablet: Iframe */}
          <div className="hidden md:block w-full h-[65vh] md:h-[75vh] max-h-[800px] bg-[#FAE3C7] overflow-hidden rounded-xl border-[4px] border-[#FAE3C7]">
            <iframe 
              src={pdfUrl} 
              className="w-full h-full border-none"
              title="Pratinjau Dokumen PDF"
            />
          </div>

          {/* Mobile: Link Button to read PDF */}
          <div className="flex md:hidden w-full flex-col items-center justify-center">
            <a 
              href={pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#FAE3C7] text-[#3B2215] font-[Inter] font-bold text-[14px] px-[32px] py-[16px] rounded-full uppercase hover:bg-white transition-colors"
            >
              Baca Dokumen Lengkap
            </a>
          </div>

        </div>
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

"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Download, ZoomIn, ZoomOut } from "lucide-react";
import { Document, Page, pdfjs } from "react-pdf";
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

// Gunakan CDN untuk pdf.worker agar kompatibel dengan Next.js
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

export default function PDFViewer({ pdfUrl }: { pdfUrl: string }) {
  const [numPages, setNumPages] = useState<number>();
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [containerWidth, setContainerWidth] = useState<number>(0);
  const [scale, setScale] = useState<number>(1.0);

  useEffect(() => {
    const updateWidth = () => {
      const container = document.getElementById("pdf-container");
      if (container) {
        // Beri sedikit padding agar tidak terpotong
        setContainerWidth(container.clientWidth - (window.innerWidth < 768 ? 0 : 32));
      }
    };
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  const changePage = (offset: number) => {
    setPageNumber(prev => Math.min(Math.max(1, prev + offset), numPages || 1));
  };

  const handleZoom = (delta: number) => {
    setScale(prev => Math.min(Math.max(0.5, prev + delta), 2.5));
  };

  return (
    <div className="w-full max-w-[1340px] mx-auto flex flex-col gap-[20px]">
      {/* Controls Mobile & Desktop */}
      <div className="flex flex-col sm:flex-row justify-between items-center bg-[#FAE3C7] text-[#3B2215] p-3 md:p-4 rounded-xl gap-4">
        
        {/* Pagination */}
        <div className="flex items-center gap-3">
          <button 
            onClick={() => changePage(-1)}
            disabled={pageNumber <= 1}
            className="p-2 bg-[#3B2215] text-[#FAE3C7] rounded-lg disabled:opacity-50 transition-opacity"
            aria-label="Halaman Sebelumnya"
          >
            <ChevronLeft size={24} />
          </button>
          <span className="font-[Inter] font-medium text-[14px] md:text-[16px] min-w-[120px] text-center">
            Hal {pageNumber} dari {numPages || '-'}
          </span>
          <button 
            onClick={() => changePage(1)}
            disabled={pageNumber >= (numPages || 1)}
            className="p-2 bg-[#3B2215] text-[#FAE3C7] rounded-lg disabled:opacity-50 transition-opacity"
            aria-label="Halaman Selanjutnya"
          >
            <ChevronRight size={24} />
          </button>
        </div>
        
        {/* Actions */}
        <div className="flex items-center gap-2 sm:gap-4 w-full sm:w-auto justify-between sm:justify-end">
          <div className="flex items-center gap-2">
            <button onClick={() => handleZoom(-0.2)} className="p-2 bg-[#3B2215] text-[#FAE3C7] rounded-lg hover:bg-black transition-colors" aria-label="Perkecil">
              <ZoomOut size={20} />
            </button>
            <span className="font-[Inter] font-medium text-[14px] w-[50px] text-center">{Math.round(scale * 100)}%</span>
            <button onClick={() => handleZoom(0.2)} className="p-2 bg-[#3B2215] text-[#FAE3C7] rounded-lg hover:bg-black transition-colors" aria-label="Perbesar">
              <ZoomIn size={20} />
            </button>
          </div>

          <a 
            href={pdfUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            download
            className="flex items-center gap-2 bg-[#3B2215] text-[#FAE3C7] px-3 md:px-4 py-2 rounded-lg font-[Inter] font-semibold text-[14px] hover:bg-black transition-colors"
          >
            <Download size={20} />
            <span className="hidden sm:inline">Unduh</span>
          </a>
        </div>
      </div>

      <div id="pdf-container" className="w-full bg-[#FAE3C7] overflow-auto rounded-xl border-[4px] md:border-[8px] border-[#FAE3C7] max-h-[75vh] custom-scrollbar">
        <div className="w-fit h-fit m-auto">
          <Document
            file={pdfUrl}
            onLoadSuccess={onDocumentLoadSuccess}
          loading={<div className="h-[300px] md:h-[500px] flex items-center justify-center font-[Inter] text-[#3B2215] font-medium">Memuat dokumen PDF...</div>}
          error={<div className="h-[300px] md:h-[500px] flex items-center justify-center font-[Inter] text-red-600 font-medium text-center px-4">Gagal memuat dokumen PDF. Pastikan URL benar atau coba unduh langsung.</div>}
        >
          {containerWidth > 0 && (
            <Page 
              pageNumber={pageNumber} 
              width={containerWidth}
              scale={scale}
              renderTextLayer={true}
              renderAnnotationLayer={true}
              className="shadow-lg"
            />
          )}
          </Document>
        </div>
      </div>
    </div>
  );
}

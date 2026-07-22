"use client";

import { useState } from "react";
import dynamic from "next/dynamic";

// Dynamically import the map component with SSR disabled
const BandunganMapComponent = dynamic(
  () => import("./bandungan-map-component"),
  { 
    ssr: false, 
    loading: () => (
      <div className="h-[600px] w-full bg-zinc-200 animate-pulse flex items-center justify-center text-zinc-500 font-medium tracking-widest">
        MEMUAT PETA...
      </div>
    ) 
  }
);

export function BandunganMapSection() {
  const [activeLayers, setActiveLayers] = useState<string[]>(["kavling", "risiko"]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const toggleLayer = (layer: string) => {
    setActiveLayers((prev) => 
      prev.includes(layer) 
        ? prev.filter((l) => l !== layer) 
        : [...prev, layer]
    );
  };

  return (
    <section className="w-full flex flex-col bg-white text-black p-[50px]">
      {/* Header Map Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 md:mb-10 shrink-0">
        <h2 className="text-5xl md:text-6xl lg:text-[80px] font-bold max-w-4xl leading-[0.9] tracking-tighter uppercase">
          Peta Dusun<br />Bandungan
        </h2>
        <div className="mt-8 md:mt-0 flex flex-col items-end gap-4 shrink-0 relative">
          
          {/* Dropdown Filter */}
          <div className="relative">
            <button 
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-md font-semibold text-sm hover:bg-gray-800 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/></svg>
              Filter Layer
            </button>

            {isFilterOpen && (
              <div className="absolute right-0 top-full mt-2 w-64 bg-white border border-gray-200 shadow-xl rounded-md p-4 z-[9999] text-sm">
                <h4 className="font-bold mb-3 border-b pb-2">Pilih Layer:</h4>
                <div className="flex flex-col gap-2">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" checked={activeLayers.includes("kavling")} onChange={() => toggleLayer("kavling")} className="w-4 h-4" />
                    Batas Administrasi Dusun
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" checked={activeLayers.includes("risiko")} onChange={() => toggleLayer("risiko")} className="w-4 h-4" />
                    Risiko Longsor
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" checked={activeLayers.includes("jalan")} onChange={() => toggleLayer("jalan")} className="w-4 h-4" />
                    Jalan
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" checked={activeLayers.includes("evakuasi")} onChange={() => toggleLayer("evakuasi")} className="w-4 h-4" />
                    Jalur Evakuasi
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" checked={activeLayers.includes("fasilitas")} onChange={() => toggleLayer("fasilitas")} className="w-4 h-4" />
                    Fasilitas & Titik Kumpul
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" checked={activeLayers.includes("kerentanan")} onChange={() => toggleLayer("kerentanan")} className="w-4 h-4" />
                    Kerentanan (Balita, Lansia)
                  </label>
                </div>
              </div>
            )}
          </div>

          <div className="text-xs md:text-sm font-semibold tracking-widest uppercase animate-bounce-slow">
            (INTERAKTIF)
          </div>
        </div>
      </div>

      {/* Map Container */}
      <div className="w-full h-[65vh] md:h-[80vh] overflow-hidden relative z-10 border border-gray-200 rounded-md shadow-sm">
        <BandunganMapComponent activeLayers={activeLayers} />
      </div>
      
      {/* Legenda Lengkap (Sesuai PDF) */}
      <div className="mt-8 border border-black p-6 rounded-md">
        <h3 className="font-bold text-lg mb-4 uppercase">Legenda</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-6 gap-x-4 text-sm font-medium">
          
          {/* Kolom 1: Garis & Umum */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <div className="w-6 h-0 border-t-2 border-dashed border-gray-800"></div>
              <span>Batas Administrasi Dusun</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-6 h-1 bg-red-500"></div>
              <span>Jalan</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-6 h-0.5 bg-black relative">
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 border-t-2 border-r-2 border-black rotate-45"></div>
              </div>
              <span>Jalur Evakuasi</span>
            </div>
            <div className="flex items-center gap-3">
              <svg width="20" height="20" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="white" stroke="black" strokeWidth="1"/><text x="12" y="16" fontSize="10" textAnchor="middle" fill="black" fontWeight="bold" fontFamily="sans-serif">AA</text></svg>
              <span>Titik Kumpul</span>
            </div>
            <div className="flex items-center gap-3">
              <svg width="20" height="20" viewBox="0 0 24 24"><polygon points="12,2 22,22 2,22" fill="black" stroke="white" strokeWidth="2"/></svg>
              <span>Longsor</span>
            </div>
          </div>

          {/* Kolom 2: Fasilitas & Kerentanan */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <svg width="20" height="20" viewBox="0 0 24 24"><polygon points="12,2 22,22 2,22" fill="#3b82f6" stroke="black" strokeWidth="1"/></svg>
              <span>Kepala Dusun</span>
            </div>
            <div className="flex items-center gap-3">
              <svg width="20" height="20" viewBox="0 0 24 24"><polygon points="12,2 22,22 2,22" fill="#ef4444" stroke="black" strokeWidth="1"/></svg>
              <span>Ketua RT</span>
            </div>
            <div className="flex items-center gap-3">
              <svg width="20" height="20" viewBox="0 0 24 24"><polygon points="12,2 22,22 2,22" fill="#eab308" stroke="black" strokeWidth="1"/></svg>
              <span>Ketua RW</span>
            </div>
            <div className="flex items-center gap-3">
              <svg width="20" height="20" viewBox="0 0 24 24"><polygon points="12,2 15,9 22,9 16,14 18,22 12,17 6,22 8,14 2,9 9,9" fill="#eab308" stroke="black" strokeWidth="1"/></svg>
              <span>Masjid/Mushola</span>
            </div>
            <div className="flex items-center gap-3">
              <svg width="20" height="20" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" fill="white" stroke="black" strokeWidth="2"/><text x="12" y="17" fontSize="14" textAnchor="middle" fontFamily="sans-serif" fontWeight="bold" fill="black">P</text></svg>
              <span>Pemakaman</span>
            </div>
            <div className="flex items-center gap-3">
              <svg width="20" height="20" viewBox="0 0 24 24"><polygon points="12,2 22,22 2,22" fill="#ef4444" stroke="black" strokeWidth="1"/><text x="12" y="19" fontSize="16" textAnchor="middle" fill="white" fontWeight="bold" fontFamily="sans-serif">!</text></svg>
              <span>Early Warning System</span>
            </div>
          </div>

          {/* Kolom 3: Risiko & Kerentanan */}
          <div className="flex flex-col gap-3">
            <span className="font-bold mb-1">Tingkat Risiko Longsor:</span>
            <div className="flex items-center gap-3 ml-2">
              <div className="w-8 h-4 bg-[#bbf7d0] border border-[#22c55e]"></div>
              <span>Rendah</span>
            </div>
            <div className="flex items-center gap-3 ml-2">
              <div className="w-8 h-4 bg-[#fde047] border border-[#eab308]"></div>
              <span>Sedang / Menengah</span>
            </div>
            <div className="flex items-center gap-3 ml-2 mb-4">
              <div className="w-8 h-4 bg-[#ef4444] border border-[#dc2626]"></div>
              <span>Tinggi</span>
            </div>
            
            <div className="flex items-center gap-3 mt-2">
              <svg width="16" height="16" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="#3b82f6" stroke="black" strokeWidth="1"/></svg>
              <span>Balita</span>
            </div>
            <div className="flex items-center gap-3">
              <svg width="16" height="16" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="#eab308" stroke="black" strokeWidth="1"/></svg>
              <span>Ibu Hamil</span>
            </div>
            <div className="flex items-center gap-3">
              <svg width="16" height="16" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="#22c55e" stroke="black" strokeWidth="1"/></svg>
              <span>Lansia</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

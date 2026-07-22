"use client";

import dynamic from "next/dynamic";

// Dynamically import the map component with SSR disabled
// This is critical because Leaflet requires the window object which is unavailable during SSR
const MapComponent = dynamic(
  () => import("./map-component"),
  { 
    ssr: false, 
    loading: () => (
      <div className="h-[600px] w-full bg-zinc-200 animate-pulse flex items-center justify-center text-zinc-500 font-medium tracking-widest">
        MEMUAT PETA...
      </div>
    ) 
  }
);

export function MapSection() {
  return (
    <section className="w-full bg-[#FAE3C7] flex justify-center">
      <div className="w-full max-w-[1440px] flex flex-col p-[50px] overflow-hidden">
        {/* Header Map Section */}
        <div className="flex flex-col xl:flex-row justify-between items-start xl:items-end mb-[46px] shrink-0">
          <h2 className="font-[Inter] font-medium text-[40px] md:text-[60px] xl:text-[86px] leading-none tracking-[-0.045em] text-black uppercase break-words">
            PETA DESA<br />KALONGAN
          </h2>
          <div className="mt-4 xl:mt-0 text-[16px] font-semibold tracking-[-0.09em] uppercase text-[#3B2215] shrink-0 animate-bounce-slow">
            (SCROLL DOWN)
          </div>
        </div>

        {/* Map Container */}
        <div className="w-full h-[500px] xl:h-[568px] bg-[#3B2215] overflow-hidden relative">
          <MapComponent />
        </div>
      </div>
    </section>
  );
}

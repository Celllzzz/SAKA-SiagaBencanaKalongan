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
    <section className="w-full flex flex-col bg-white text-black p-[50px]">
      {/* Header Map Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 md:mb-10 shrink-0">
        <h2 className="text-5xl md:text-6xl lg:text-[80px] font-bold max-w-3xl leading-[0.9] tracking-tighter">
          PETA DESA<br />KALONGAN
        </h2>
        <div className="mt-8 md:mt-0 text-xs md:text-sm font-semibold tracking-widest uppercase shrink-0 animate-bounce-slow">
          (SCROLL DOWN)
        </div>
      </div>

      {/* Map Container */}
      <div className="w-full h-[65vh] md:h-[80vh] overflow-hidden relative">
        <MapComponent />
      </div>
    </section>
  );
}

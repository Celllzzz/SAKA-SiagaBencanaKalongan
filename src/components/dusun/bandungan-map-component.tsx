"use client";

import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Polygon, Polyline, CircleMarker, Marker, Popup, useMap } from "react-leaflet";
import proj4 from "proj4";
import "leaflet/dist/leaflet.css";

import L from "leaflet";

// Define UTM Zone 49S
proj4.defs("EPSG:32749", "+proj=utm +zone=49 +south +datum=WGS84 +units=m +no_defs");

// Helper function to convert coordinates
function convertCoord(coord: number[]): [number, number] {
  const [lng, lat] = proj4("EPSG:32749", "EPSG:4326", [coord[0], coord[1]]);
  return [lat, lng];
}

function convertRings(rings: number[][][]): [number, number][][] {
  return rings.map(ring => ring.map(convertCoord));
}

function convertPaths(paths: number[][][]): [number, number][][] {
  return paths.map(path => path.map(convertCoord));
}

function FitBounds({ coords }: { coords: [number, number][][] }) {
  const map = useMap();
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    if (coords.length > 0 && coords[0].length > 0) {
      const bounds = L.latLngBounds(coords[0]);
      timeoutId = setTimeout(() => {
        if (map) {
          map.fitBounds(bounds, { padding: [0, 0] });
        }
      }, 200);
    }
    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [coords, map]);
  return null;
}

function RecenterButton({ coords }: { coords: [number, number][][] }) {
  const map = useMap();
  const handleRecenter = () => {
    if (coords.length > 0 && coords[0].length > 0) {
      const bounds = L.latLngBounds(coords[0]);
      map.flyToBounds(bounds, { padding: [0, 0], duration: 1.5 });
    }
  };
  return (
    <div className="absolute top-[90px] left-[10px] z-[1000] border-2 border-[rgba(0,0,0,0.2)] rounded-[4px] bg-clip-padding overflow-hidden" style={{ boxShadow: '0 1px 5px rgba(0,0,0,0.65)' }}>
      <button 
        onClick={(e) => { e.preventDefault(); e.stopPropagation(); handleRecenter(); }}
        className="flex items-center justify-center w-[30px] h-[30px] bg-white text-black hover:bg-[#f4f4f4] transition-colors cursor-pointer"
        title="Fokus ke Area Bandungan"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="3"/>
          <path d="M3 7V5a2 2 0 0 1 2-2h2"/><path d="M17 3h2a2 2 0 0 1 2 2v2"/><path d="M21 17v2a2 2 0 0 1-2 2h-2"/><path d="M7 21H5a2 2 0 0 1-2-2v-2"/>
        </svg>
      </button>
    </div>
  );
}

// Custom Icons definitions using SVG
const createCustomIcon = (svgString: string, size: [number, number] = [24, 24]) => {
  return L.divIcon({
    html: svgString,
    className: "custom-leaflet-icon",
    iconSize: size,
    iconAnchor: [size[0] / 2, size[1] / 2],
    popupAnchor: [0, -size[1] / 2],
  });
};

const svgIcons = {
  kepalaDusun: createCustomIcon(`<svg viewBox="0 0 24 24"><polygon points="12,2 22,22 2,22" fill="#3b82f6" stroke="white" stroke-width="2"/></svg>`),
  ketuaRT: createCustomIcon(`<svg viewBox="0 0 24 24"><polygon points="12,2 22,22 2,22" fill="#ef4444" stroke="white" stroke-width="2"/></svg>`),
  ketuaRW: createCustomIcon(`<svg viewBox="0 0 24 24"><polygon points="12,2 22,22 2,22" fill="#eab308" stroke="white" stroke-width="2"/></svg>`),
  masjid: createCustomIcon(`<svg viewBox="0 0 24 24"><polygon points="12,2 15,9 22,9 16,14 18,22 12,17 6,22 8,14 2,9 9,9" fill="#eab308" stroke="black" stroke-width="1"/></svg>`),
  pemakaman: createCustomIcon(`<svg viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" fill="white" stroke="black" stroke-width="2"/><text x="12" y="17" font-size="14" text-anchor="middle" font-family="sans-serif" font-weight="bold" fill="black">P</text></svg>`),
  ews: createCustomIcon(`<svg viewBox="0 0 24 24"><polygon points="12,2 22,22 2,22" fill="#ef4444" stroke="white" stroke-width="2"/><text x="12" y="19" font-size="16" text-anchor="middle" fill="white" font-weight="bold" font-family="sans-serif">!</text></svg>`),
  titikKumpul: createCustomIcon(`<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="white" stroke="black" stroke-width="1"/><text x="12" y="16" font-size="10" text-anchor="middle" fill="black" font-weight="bold" font-family="sans-serif">AA</text></svg>`),
  longsor: createCustomIcon(`<svg viewBox="0 0 24 24"><polygon points="12,2 22,22 2,22" fill="black" stroke="white" stroke-width="2"/></svg>`),
  balita: createCustomIcon(`<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="8" fill="#3b82f6" stroke="white" stroke-width="1"/></svg>`),
  ibuHamil: createCustomIcon(`<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="8" fill="#eab308" stroke="white" stroke-width="1"/></svg>`),
  lansia: createCustomIcon(`<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="8" fill="#22c55e" stroke="white" stroke-width="1"/></svg>`),
  default: createCustomIcon(`<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="6" fill="black" stroke="white" stroke-width="1"/></svg>`),
};

// Data Types
type FeaturePolygon = { attributes: any; geometry: { rings: number[][][] } };
type FeaturePolyline = { attributes: any; geometry: { paths: number[][][] } };
type FeaturePoint = { attributes: any; geometry: { x: number; y: number } };

export default function BandunganMapComponent() {
  const [activeLayers, setActiveLayers] = useState<string[]>(["kavling", "risiko"]);
  const [isFilterExpanded, setIsFilterExpanded] = useState<boolean>(false);
  
  const [kavling, setKavling] = useState<[number, number][][]>([]);
  const [risiko, setRisiko] = useState<{ coords: [number, number][][], tingkat: string }[]>([]);
  const [evakuasi, setEvakuasi] = useState<[number, number][][]>([]);
  const [kerentanan, setKerentanan] = useState<{ coord: [number, number], jenis: string }[]>([]);
  const [titikKumpul, setTitikKumpul] = useState<{ coord: [number, number], nama: string, kategori: string }[]>([]);
  
  const [center, setCenter] = useState<[number, number] | null>(null);

  useEffect(() => {
    // Pada mobile, tutup filter secara otomatis, pada desktop bisa dibuka
    if (typeof window !== "undefined" && window.innerWidth >= 768) {
      setIsFilterExpanded(true);
    }

    const safeFetchJson = async (url: string) => {
      try {
        const res = await fetch(url);
        if (!res.ok) return null;
        const text = await res.text();
        if (!text || text.trim().startsWith('<')) return null;
        return JSON.parse(text);
      } catch (e) {
        return null;
      }
    };

    safeFetchJson("/maps/Bandungan/kavling bandungan.json").then(data => {
      if (data?.features?.length > 0) {
        const converted = convertRings(data.features[0].geometry.rings);
        setKavling(converted);
        if (converted.length > 0 && converted[0].length > 0) {
          const lats = converted[0].map((c) => c[0]);
          const lngs = converted[0].map((c) => c[1]);
          setCenter([
            (Math.min(...lats) + Math.max(...lats)) / 2, 
            (Math.min(...lngs) + Math.max(...lngs)) / 2
          ]);
        }
      }
    });

    safeFetchJson("/maps/Bandungan/tingkat risiko longsor bandungan.json").then(data => {
      if (data?.features) {
        setRisiko(data.features.map((f: FeaturePolygon) => ({
          coords: convertRings(f.geometry.rings),
          tingkat: f.attributes.Ket
        })));
      }
    });

    safeFetchJson("/maps/Bandungan/jalur evakuasi bandungan.json").then(data => {
      if (data?.features) {
        setEvakuasi(data.features.map((f: FeaturePolyline) => convertPaths(f.geometry.paths)[0]));
      }
    });

    safeFetchJson("/maps/Bandungan/kerentanan bandungan.json").then(data => {
      if (data?.features) {
        setKerentanan(data.features.map((f: FeaturePoint) => ({
          coord: convertCoord([f.geometry.x, f.geometry.y]),
          jenis: f.attributes.Jenis
        })));
      }
    });

    // We fetch both titik kumpul and kapasitas, and combine them. 
    Promise.all([
      safeFetchJson("/maps/Bandungan/titik kumpul bandungan.json"),
      safeFetchJson("/maps/Bandungan/kapasitas bandungan.json")
    ]).then(([titikData, kapasitasData]) => {
      const combined: any[] = [];
      const seen: Record<string, boolean> = {};

      // Helper untuk mencegah duplikat data dari dua file yang digabung
      const isDuplicate = (coord: [number, number], nama: string) => {
        const key = `${coord[0].toFixed(5)},${coord[1].toFixed(5)}-${nama.trim().toLowerCase()}`;
        if (seen[key]) return true;
        seen[key] = true;
        return false;
      };

      if (titikData?.features) {
        titikData.features.forEach((f: FeaturePoint) => {
          const baseCoord = convertCoord([f.geometry.x, f.geometry.y]);
          const nama = f.attributes.PALANG;
          if (!isDuplicate(baseCoord, nama)) {
            combined.push({
              coord: baseCoord,
              nama: nama,
              kategori: nama
            });
          }
        });
      }
      
      if (kapasitasData?.features) {
        kapasitasData.features.forEach((f: FeaturePoint) => {
          if (!f.attributes.Ket || f.attributes.Ket.trim() === "") return;
          const baseCoord = convertCoord([f.geometry.x, f.geometry.y]);
          const nama = f.attributes.FID_ || f.attributes.Ket;
          if (!isDuplicate(baseCoord, nama)) {
            combined.push({
              coord: baseCoord,
              nama: nama,
              kategori: f.attributes.Ket
            });
          }
        });
      }
      
      setTitikKumpul(combined);
    });
  }, []);

  if (!center) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-zinc-100">
        <span className="text-zinc-500 font-medium animate-pulse tracking-widest">MEMUAT DATA PETA...</span>
      </div>
    );
  }

  const getRisikoColor = (tingkat: string) => {
    switch (tingkat?.toLowerCase()) {
      case "tinggi": return { fill: "#ef4444", stroke: "#dc2626" }; // red
      case "menengah": 
      case "sedang": return { fill: "#fde047", stroke: "#eab308" }; // yellow
      case "rendah": return { fill: "#bbf7d0", stroke: "#22c55e" }; // light green
      default: return { fill: "#94a3b8", stroke: "#64748b" };
    }
  };

  const getTitikIcon = (kategori: string, nama: string) => {
    const text = (kategori + " " + nama).toLowerCase();
    if (text.includes("kepala dusun")) return svgIcons.kepalaDusun;
    if (text.includes("rt")) return svgIcons.ketuaRT;
    if (text.includes("rw")) return svgIcons.ketuaRW;
    if (text.includes("masjid") || text.includes("mushola")) return svgIcons.masjid;
    if (text.includes("makam") || text.includes("pemakaman")) return svgIcons.pemakaman;
    if (text.includes("ews") || text.includes("warning")) return svgIcons.ews;
    if (text.includes("longsor")) return svgIcons.longsor;
    if (text.includes("titik kumpul") || text.includes("kumpul")) return svgIcons.titikKumpul;
    return svgIcons.default;
  };

  const getKerentananIcon = (jenis: string) => {
    const text = jenis.toLowerCase();
    if (text.includes("balita")) return svgIcons.balita;
    if (text.includes("ibu hamil")) return svgIcons.ibuHamil;
    if (text.includes("lansia")) return svgIcons.lansia;
    return svgIcons.default;
  };

  const toggleLayer = (layer: string) => {
    setActiveLayers((prev) => 
      prev.includes(layer) 
        ? prev.filter((l) => l !== layer) 
        : [...prev, layer]
    );
  };

  return (
    <div className="w-full h-full relative overflow-hidden">
      {/* Panel Filter Layer (Melayang di dalam Map) */}
      <div 
        className={`absolute top-[10px] right-[10px] z-[1000] bg-white rounded-md shadow-md transition-all duration-300 ${isFilterExpanded ? 'w-[280px] p-4 cursor-default' : 'w-auto p-2 cursor-pointer hover:bg-gray-50'}`} 
        style={{ boxShadow: '0 2px 10px rgba(0,0,0,0.2)' }}
        onClick={() => !isFilterExpanded && setIsFilterExpanded(true)}
      >
        
        {/* Header/Toggle Button */}
        <div className={`flex items-center justify-between ${isFilterExpanded ? 'mb-4 border-b pb-2' : ''}`}>
          <div className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-700"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/></svg>
            {isFilterExpanded && <h3 className="font-bold text-gray-700 tracking-wide text-sm uppercase">Legenda & Filter</h3>}
          </div>
          {isFilterExpanded && (
            <button className="text-gray-400 hover:text-gray-700 p-1" onClick={(e) => { e.stopPropagation(); setIsFilterExpanded(false); }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>
          )}
        </div>
        
        {/* Content (Hanya Tampil Jika Expanded) */}
        {isFilterExpanded && (
          <div className="max-h-[60vh] md:max-h-[70vh] overflow-y-auto pr-1 custom-scrollbar">
            {/* Section Administratif */}
            <div className="mb-4">
              <h4 className="font-bold text-xs text-gray-500 tracking-wider mb-2 uppercase">Administratif</h4>
              <div className="flex flex-col gap-2 text-sm">
                <label className="flex items-center gap-3 cursor-pointer hover:bg-gray-50 p-1 -ml-1 rounded transition-colors">
                  <input type="checkbox" checked={activeLayers.includes("kavling")} onChange={() => toggleLayer("kavling")} className="w-4 h-4 accent-blue-600 rounded cursor-pointer" />
                  <div className="w-5 h-3 border-2 border-dashed border-gray-400"></div>
                  <span className="select-none">Batas Administrasi</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer hover:bg-gray-50 p-1 -ml-1 rounded transition-colors">
                  <input type="checkbox" checked={activeLayers.includes("risiko")} onChange={() => toggleLayer("risiko")} className="w-4 h-4 accent-blue-600 rounded cursor-pointer" />
                  <div className="w-5 h-3 bg-red-400 border border-red-600 opacity-80"></div>
                  <span className="select-none">Risiko Longsor</span>
                </label>
              </div>
            </div>

            {/* Section Lokasi / Jaringan */}
            <div>
              <h4 className="font-bold text-xs text-gray-500 tracking-wider mb-2 uppercase">Lokasi & Infrastruktur</h4>
              <div className="flex flex-col gap-2 text-sm">
                <label className="flex items-center gap-3 cursor-pointer hover:bg-gray-50 p-1 -ml-1 rounded transition-colors">
                  <input type="checkbox" checked={activeLayers.includes("evakuasi")} onChange={() => toggleLayer("evakuasi")} className="w-4 h-4 accent-blue-600 rounded cursor-pointer" />
                  <div className="w-5 h-0.5 bg-black relative"><div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 border-t border-r border-black rotate-45"></div></div>
                  <span className="select-none">Jalur Evakuasi</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer hover:bg-gray-50 p-1 -ml-1 rounded transition-colors">
                  <input type="checkbox" checked={activeLayers.includes("fasilitas")} onChange={() => toggleLayer("fasilitas")} className="w-4 h-4 accent-blue-600 rounded cursor-pointer" />
                  <svg width="16" height="16" viewBox="0 0 24 24" className="shrink-0"><polygon points="12,2 22,22 2,22" fill="#ef4444" stroke="black" strokeWidth="1"/></svg>
                  <span className="select-none leading-tight">Fasilitas & Posko</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer hover:bg-gray-50 p-1 -ml-1 rounded transition-colors">
                  <input type="checkbox" checked={activeLayers.includes("kerentanan")} onChange={() => toggleLayer("kerentanan")} className="w-4 h-4 accent-blue-600 rounded cursor-pointer" />
                  <svg width="16" height="16" viewBox="0 0 24 24" className="shrink-0"><circle cx="12" cy="12" r="10" fill="#3b82f6" stroke="black" strokeWidth="1"/></svg>
                  <span className="select-none leading-tight">Kelompok Rentan</span>
                </label>
              </div>
            </div>
          </div>
        )}
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .leaflet-container, .leaflet-grab, .leaflet-interactive {
          cursor: pointer !important;
        }
        .leaflet-control-zoom a {
          cursor: pointer !important;
        }
      `}} />
      <MapContainer
      center={center}
      zoom={16}
      zoomSnap={0.1}
      scrollWheelZoom={true}
      style={{ width: "100%", height: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.google.com/intl/id_id/help/terms_maps/">Google Maps</a>'
        url="https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}"
      />
      <FitBounds coords={kavling} />
      <RecenterButton coords={kavling} />
      
      {/* Layer Risiko Longsor (Polygon) */}
      {activeLayers.includes("risiko") && risiko.map((r, i) => {
        const colors = getRisikoColor(r.tingkat);
        return (
          <Polygon 
            key={`risiko-${i}`}
            positions={r.coords} 
            pathOptions={{ 
              color: colors.stroke,
              fillColor: colors.fill,
              fillOpacity: 0.5,
              weight: 1.5,
            }} 
          >
            <Popup>Risiko Longsor: <b>{r.tingkat}</b></Popup>
          </Polygon>
        );
      })}

      {/* Layer Kavling Batas Dusun (Polygon) */}
      {activeLayers.includes("kavling") && kavling.length > 0 && (
        <Polygon 
          positions={kavling} 
          pathOptions={{ 
            color: "#ffffff", 
            fillColor: "transparent", 
            weight: 3,
            dashArray: "5, 5"
          }} 
        />
      )}

      {/* Layer Jalur Evakuasi (Polyline) */}
      {activeLayers.includes("evakuasi") && evakuasi.map((path, i) => (
        <Polyline 
          key={`evakuasi-${i}`}
          positions={path}
          pathOptions={{ color: "#000000", weight: 4 }} // hitam solid
        >
          <Popup>Jalur Evakuasi</Popup>
        </Polyline>
      ))}

      {/* Layer Kerentanan (Point) */}
      {activeLayers.includes("kerentanan") && kerentanan.map((point, i) => (
        <Marker
          key={`kerentanan-${i}`}
          position={point.coord}
          icon={getKerentananIcon(point.jenis)}
          zIndexOffset={100}
        >
          <Popup>Kerentanan: <b>{point.jenis}</b></Popup>
        </Marker>
      ))}

      {/* Layer Titik Kumpul & Fasilitas (Point) */}
      {activeLayers.includes("fasilitas") && titikKumpul.map((point, i) => (
        <Marker
          key={`titikkumpul-${i}`}
          position={point.coord}
          icon={getTitikIcon(point.kategori, point.nama)}
          zIndexOffset={200}
        >
          <Popup><b>{point.nama}</b></Popup>
        </Marker>
      ))}
      
    </MapContainer>
    </div>
  );
}

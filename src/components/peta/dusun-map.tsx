"use client";

import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Polygon, Polyline, Marker, Popup, useMap } from "react-leaflet";
import proj4 from "proj4";
import "leaflet/dist/leaflet.css";

import L from "leaflet";

proj4.defs("EPSG:32748", "+proj=utm +zone=48 +south +datum=WGS84 +units=m +no_defs");
proj4.defs("EPSG:32749", "+proj=utm +zone=49 +south +datum=WGS84 +units=m +no_defs");

function convertCoord(coord: number[], wkid: number = 32749): [number, number] {
  if (!isFinite(coord[0]) || !isFinite(coord[1])) return [0, 0]; // fallback
  const [lng, lat] = proj4(`EPSG:${wkid}`, "EPSG:4326", [coord[0], coord[1]]);
  return [lat, lng];
}

function convertRings(rings: number[][][], wkid: number = 32749): [number, number][][] {
  return rings.map(ring => ring.map(c => convertCoord(c, wkid)).filter(c => c[0] !== 0 && c[1] !== 0));
}

function convertPaths(paths: number[][][], wkid: number = 32749): [number, number][][] {
  return paths.map(path => path.map(c => convertCoord(c, wkid)).filter(c => c[0] !== 0 && c[1] !== 0));
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
        title="Fokus ke Area Dusun"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="3" />
          <path d="M3 7V5a2 2 0 0 1 2-2h2" /><path d="M17 3h2a2 2 0 0 1 2 2v2" /><path d="M21 17v2a2 2 0 0 1-2 2h-2" /><path d="M7 21H5a2 2 0 0 1-2-2v-2" />
        </svg>
      </button>
    </div>
  );
}

const createCustomIcon = (svgString: string, size: [number, number] = [24, 24]) => {
  return L.divIcon({
    html: svgString,
    className: "custom-leaflet-icon",
    iconSize: size,
    iconAnchor: [size[0] / 2, size[1] / 2],
    popupAnchor: [0, -size[1] / 2],
  });
};

const svgStrings: Record<string, string> = {
  kepalaDusun: `<svg viewBox="0 0 24 24"><polygon points="12,2 22,22 2,22" fill="#3b82f6" stroke="white" stroke-width="2"/></svg>`,
  ketuaRT: `<svg viewBox="0 0 24 24"><polygon points="12,2 22,22 2,22" fill="#ef4444" stroke="white" stroke-width="2"/></svg>`,
  ketuaRW: `<svg viewBox="0 0 24 24"><polygon points="12,2 22,22 2,22" fill="#eab308" stroke="white" stroke-width="2"/></svg>`,
  masjid: `<svg viewBox="0 0 24 24"><polygon points="12,2 15,9 22,9 16,14 18,22 12,17 6,22 8,14 2,9 9,9" fill="#eab308" stroke="black" stroke-width="1"/></svg>`,
  pemakaman: `<svg viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" fill="white" stroke="black" stroke-width="2"/><text x="12" y="17" font-size="14" text-anchor="middle" font-family="sans-serif" font-weight="bold" fill="black">P</text></svg>`,
  ews: `<svg viewBox="0 0 24 24"><polygon points="12,2 22,22 2,22" fill="#ef4444" stroke="white" stroke-width="2"/><text x="12" y="19" font-size="16" text-anchor="middle" fill="white" font-weight="bold" font-family="sans-serif">!</text></svg>`,
  titikKumpul: `<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="white" stroke="black" stroke-width="1"/><text x="12" y="16" font-size="10" text-anchor="middle" fill="black" font-weight="bold" font-family="sans-serif">AA</text></svg>`,
  longsor: `<svg viewBox="0 0 24 24"><polygon points="12,2 22,22 2,22" fill="black" stroke="white" stroke-width="2"/></svg>`,
  balita: `<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="8" fill="#3b82f6" stroke="white" stroke-width="1"/></svg>`,
  ibuHamil: `<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="8" fill="#eab308" stroke="white" stroke-width="1"/></svg>`,
  lansia: `<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="8" fill="#22c55e" stroke="white" stroke-width="1"/></svg>`,
  default: `<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="6" fill="black" stroke="white" stroke-width="1"/></svg>`,
};

const svgIcons: Record<string, any> = Object.fromEntries(
  Object.entries(svgStrings).map(([key, svg]) => [key, createCustomIcon(svg)])
);

const getIconTypeAndLabel = (kategori: string, nama: string) => {
  const text = (kategori + " " + nama).toLowerCase();
  if (text.includes("kepala dusun")) return { key: 'kepalaDusun', label: 'Kepala Dusun' };
  if (text.includes("rt")) return { key: 'ketuaRT', label: 'Ketua RT' };
  if (text.includes("rw")) return { key: 'ketuaRW', label: 'Ketua RW' };
  if (text.includes("masjid") || text.includes("mushola")) return { key: 'masjid', label: 'Tempat Ibadah' };
  if (text.includes("makam") || text.includes("pemakaman")) return { key: 'pemakaman', label: 'Pemakaman' };
  if (text.includes("ews") || text.includes("warning")) return { key: 'ews', label: 'EWS' };
  if (text.includes("longsor")) return { key: 'longsor', label: 'Titik Longsor' };
  if (text.includes("titik kumpul") || text.includes("kumpul")) return { key: 'titikKumpul', label: 'Titik Kumpul' };
  return { key: 'default', label: 'Titik Lainnya' };
};

const getKerentananTypeAndLabel = (jenis: string) => {
  const text = (jenis || "").toLowerCase();
  if (text.includes("balita")) return { key: 'balita', label: 'Balita' };
  if (text.includes("ibu hamil")) return { key: 'ibuHamil', label: 'Ibu Hamil' };
  if (text.includes("lansia")) return { key: 'lansia', label: 'Lansia' };
  return { key: 'default', label: 'Kerentanan Lainnya' };
};

type FeaturePolygon = { attributes: any; geometry: { rings: number[][][] } };
type FeaturePolyline = { attributes: any; geometry: { paths: number[][][] } };
type FeaturePoint = { attributes: any; geometry: { x: number; y: number } };

export default function DusunMap({ dusunSlug }: { dusunSlug: string }) {
  const [isFilterExpanded, setIsFilterExpanded] = useState<boolean>(false);
  const [layers, setLayers] = useState({
    batas: true,
    risiko: true,
    jalan: false,
    evakuasi: false,
    fasilitas: false,
    titikKumpul: false,
    rentan: false
  });

  const toggleLayer = (key: keyof typeof layers) => {
    setLayers(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const [kavling, setKavling] = useState<[number, number][][]>([]);
  const [risiko, setRisiko] = useState<{ coords: [number, number][][], tingkat: string }[]>([]);
  const [jalan, setJalan] = useState<[number, number][][]>([]);
  const [evakuasi, setEvakuasi] = useState<[number, number][][]>([]);
  const [kerentanan, setKerentanan] = useState<{ coord: [number, number], jenis: string }[]>([]);
  const [titikKumpul, setTitikKumpul] = useState<{ coord: [number, number], nama: string, kategori: string }[]>([]);

  const [center, setCenter] = useState<[number, number] | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined" && window.innerWidth >= 768) {
      setIsFilterExpanded(true);
    }

    const folderName = dusunSlug === "tompo-gunung" ? "TompoGunung" : dusunSlug.charAt(0).toUpperCase() + dusunSlug.slice(1);
    const filePrefix = dusunSlug === "tompo-gunung" ? "tompo gunung" : dusunSlug;

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

    safeFetchJson(`/maps/${folderName}/kavling ${filePrefix}.json`).then(async data => {
      if (!data && dusunSlug === "tompo-gunung") {
        data = await safeFetchJson(`/maps/${folderName}/kavlling ${filePrefix}.json`);
      }
      if (data?.features?.length > 0) {
        const wkid = data.spatialReference?.wkid || 32749;
        const converted = convertRings(data.features[0].geometry.rings, wkid);
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
    }).catch(e => console.error(e));

    safeFetchJson(`/maps/${folderName}/tingkat risiko longsor ${filePrefix}.json`).then(async data => {
      if (!data) {
        data = await safeFetchJson(`/maps/${folderName}/tingkat risiko longsor.json`);
      }
      if (data?.features) {
        const wkid = data.spatialReference?.wkid || 32749;
        setRisiko(data.features.map((f: FeaturePolygon) => ({
          coords: convertRings(f.geometry.rings, wkid),
          tingkat: f.attributes.Ket || f.attributes.Status || f.attributes.STATUS || ""
        })));
      }
    }).catch(e => console.error(e));

    safeFetchJson(`/maps/${folderName}/jalan ${filePrefix}.json`).then(data => {
      if (data?.features) {
        const wkid = data.spatialReference?.wkid || 32749;
        setJalan(data.features.map((f: FeaturePolyline) => convertPaths(f.geometry.paths, wkid)[0]));
      }
    }).catch(e => console.error(e));

    safeFetchJson(`/maps/${folderName}/jalur evakuasi ${filePrefix}.json`).then(data => {
      if (data?.features) {
        const wkid = data.spatialReference?.wkid || 32749;
        setEvakuasi(data.features.map((f: FeaturePolyline) => convertPaths(f.geometry.paths, wkid)[0]));
      }
    }).catch(e => console.error(e));

    safeFetchJson(`/maps/${folderName}/kerentanan ${filePrefix}.json`).then(data => {
      if (data?.features) {
        const wkid = data.spatialReference?.wkid || 32749;
        setKerentanan(data.features.map((f: FeaturePoint) => ({
          coord: convertCoord([f.geometry.x, f.geometry.y], wkid),
          jenis: f.attributes.Jenis
        })));
      }
    }).catch(e => console.error(e));

    Promise.all([
      safeFetchJson(`/maps/${folderName}/titik kumpul ${filePrefix}.json`),
      safeFetchJson(`/maps/${folderName}/kapasitas ${filePrefix}.json`)
    ]).then(([titikData, kapasitasData]) => {
      const combined: any[] = [];
      const seen: Record<string, boolean> = {};

      const isDuplicate = (coord: [number, number], nama: string) => {
        if (!nama) return false;
        const key = `${coord[0].toFixed(5)},${coord[1].toFixed(5)}-${nama.trim().toLowerCase()}`;
        if (seen[key]) return true;
        seen[key] = true;
        return false;
      };

      if (titikData?.features) {
        const wkid = titikData.spatialReference?.wkid || 32749;
        titikData.features.forEach((f: FeaturePoint) => {
          if (!isFinite(f.geometry?.x) || !isFinite(f.geometry?.y)) return;
          const baseCoord = convertCoord([f.geometry.x, f.geometry.y], wkid);
          const nama = f.attributes.PALANG || "Titik Kumpul";
          if (!isDuplicate(baseCoord, nama)) {
            combined.push({ coord: baseCoord, nama: nama, kategori: nama });
          }
        });
      }

      if (kapasitasData?.features) {
        const wkid = kapasitasData.spatialReference?.wkid || 32749;
        kapasitasData.features.forEach((f: FeaturePoint) => {
          if (!f.attributes.Ket || f.attributes.Ket.trim() === "") return;
          if (!isFinite(f.geometry?.x) || !isFinite(f.geometry?.y)) return;
          const baseCoord = convertCoord([f.geometry.x, f.geometry.y], wkid);
          const nama = f.attributes.FID_ || f.attributes.Ket;
          if (!isDuplicate(baseCoord, nama)) {
            combined.push({ coord: baseCoord, nama: nama, kategori: f.attributes.Ket });
          }
        });
      }

      setTitikKumpul(combined);
    });
  }, [dusunSlug]);

  if (!center) {
    return (
      <div className="w-full h-[300px] md:h-[668px] flex items-center justify-center bg-gray-200">
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

  const getTitikIcon = (kategori: string, nama: string) => svgIcons[getIconTypeAndLabel(kategori, nama).key] || svgIcons.default;
  const getKerentananIcon = (jenis: string) => svgIcons[getKerentananTypeAndLabel(jenis).key] || svgIcons.default;

  const activeFasilitas = new Map<string, { svg: string, label: string }>();
  let hasTitikKumpul = false;

  titikKumpul.forEach(point => {
    const info = getIconTypeAndLabel(point.kategori, point.nama);
    if (info.key === 'titikKumpul') {
      hasTitikKumpul = true;
    } else {
      if (!activeFasilitas.has(info.key)) {
        activeFasilitas.set(info.key, { svg: svgStrings[info.key], label: info.label });
      }
    }
  });

  const activeKerentanan = new Map<string, { svg: string, label: string }>();

  kerentanan.forEach(point => {
    const info = getKerentananTypeAndLabel(point.jenis);
    if (!activeKerentanan.has(info.key)) {
      activeKerentanan.set(info.key, { svg: svgStrings[info.key], label: info.label });
    }
  });

  const legendContent = (
    <div className="flex flex-col gap-5 overflow-y-auto pr-2 pb-2 custom-scrollbar" style={{ flex: 1 }}>
      <div className="mb-5">
        <h4 className="font-bold text-[11px] text-gray-500 tracking-wider mb-3 uppercase">Administratif</h4>
        <div className="flex flex-col gap-3 text-sm">
          {kavling.length > 0 && (
            <label className="flex items-center gap-3 cursor-pointer">
              <input type="checkbox" checked={layers.batas} onChange={() => toggleLayer('batas')} className="w-4 h-4 cursor-pointer accent-blue-600 rounded" />
              <div className="w-5 h-3 border-2 border-dashed border-gray-400"></div>
              <span className="select-none text-gray-700">Batas Administrasi</span>
            </label>
          )}

          {risiko.length > 0 && (
            <div className="flex flex-col gap-2">
              <label className="flex items-center gap-3 cursor-pointer">
                <input type="checkbox" checked={layers.risiko} onChange={() => toggleLayer('risiko')} className="w-4 h-4 cursor-pointer accent-blue-600 rounded" />
                <div className="w-4 h-3 bg-red-400 border border-red-600"></div>
                <span className="select-none text-gray-700">Risiko Longsor</span>
              </label>
              {layers.risiko && (
                <div className="flex flex-col gap-1.5 ml-8 mt-1">
                  {risiko.some(r => r.tingkat.toLowerCase() === "tinggi") && (
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-2 bg-red-400 border border-red-600 opacity-80"></div>
                      <span className="select-none text-xs text-gray-500">Tinggi</span>
                    </div>
                  )}
                  {risiko.some(r => r.tingkat.toLowerCase() === "sedang" || r.tingkat.toLowerCase() === "menengah") && (
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-2 bg-yellow-400 border border-yellow-600 opacity-80"></div>
                      <span className="select-none text-xs text-gray-500">Sedang</span>
                    </div>
                  )}
                  {risiko.some(r => r.tingkat.toLowerCase() === "rendah") && (
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-2 bg-green-300 border border-green-500 opacity-80"></div>
                      <span className="select-none text-xs text-gray-500">Rendah</span>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      <div>
        <h4 className="font-bold text-[11px] text-gray-500 tracking-wider mb-3 uppercase">Lokasi & Infrastruktur</h4>
        <div className="flex flex-col gap-3 text-sm">
          {jalan.length > 0 && (
            <label className="flex items-center gap-3 cursor-pointer">
              <input type="checkbox" checked={layers.jalan} onChange={() => toggleLayer('jalan')} className="w-4 h-4 cursor-pointer accent-blue-600 rounded" />
              <div className="w-5 h-1 bg-red-500"></div>
              <span className="select-none text-gray-700">Jalan Utama</span>
            </label>
          )}
          {evakuasi.length > 0 && (
            <label className="flex items-center gap-3 cursor-pointer">
              <input type="checkbox" checked={layers.evakuasi} onChange={() => toggleLayer('evakuasi')} className="w-4 h-4 cursor-pointer accent-blue-600 rounded" />
              <div className="w-5 h-0.5 bg-black relative"><div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 border-t border-r border-black rotate-45"></div></div>
              <span className="select-none text-gray-700">Jalur Evakuasi</span>
            </label>
          )}

          {activeFasilitas.size > 0 && (
            <div className="flex flex-col gap-2">
              <label className="flex items-center gap-3 cursor-pointer">
                <input type="checkbox" checked={layers.fasilitas} onChange={() => toggleLayer('fasilitas')} className="w-4 h-4 cursor-pointer accent-blue-600 rounded" />
                <svg width="16" height="16" viewBox="0 0 24 24" className="shrink-0"><polygon points="12,2 22,22 2,22" fill="#ef4444" stroke="black" strokeWidth="1" /></svg>
                <span className="select-none text-gray-700">Fasilitas & Posko</span>
              </label>
              {layers.fasilitas && (
                <div className="flex flex-col gap-1.5 ml-8 mt-1">
                  {Array.from(activeFasilitas.values()).map((icon, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div dangerouslySetInnerHTML={{ __html: icon.svg }} className="shrink-0 flex items-center justify-center w-[14px] h-[14px]" />
                      <span className="select-none text-xs text-gray-500">{icon.label}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {hasTitikKumpul && (
            <label className="flex items-center gap-3 cursor-pointer">
              <input type="checkbox" checked={layers.titikKumpul} onChange={() => toggleLayer('titikKumpul')} className="w-4 h-4 cursor-pointer accent-blue-600 rounded" />
              <div dangerouslySetInnerHTML={{ __html: svgStrings.titikKumpul }} className="shrink-0 flex items-center justify-center w-[16px] h-[16px]" />
              <span className="select-none text-gray-700">Titik Kumpul</span>
            </label>
          )}

          {activeKerentanan.size > 0 && (
            <div className="flex flex-col gap-2">
              <label className="flex items-center gap-3 cursor-pointer">
                <input type="checkbox" checked={layers.rentan} onChange={() => toggleLayer('rentan')} className="w-4 h-4 cursor-pointer accent-blue-600 rounded" />
                <svg width="16" height="16" viewBox="0 0 24 24" className="shrink-0"><circle cx="12" cy="12" r="10" fill="#3b82f6" stroke="black" strokeWidth="1" /></svg>
                <span className="select-none text-gray-700">Kelompok Rentan</span>
              </label>
              {layers.rentan && (
                <div className="flex flex-col gap-1.5 ml-8 mt-1">
                  {Array.from(activeKerentanan.values()).map((icon, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div dangerouslySetInnerHTML={{ __html: icon.svg }} className="shrink-0 flex items-center justify-center w-[14px] h-[14px]" />
                      <span className="select-none text-xs text-gray-500">{icon.label}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <div className="w-full h-[300px] md:h-[668px] relative overflow-hidden">
      {/* DESKTOP LEGENDA */}
      <div
        className={`hidden md:flex absolute top-[10px] right-[10px] z-[1000] bg-white rounded-md shadow-md transition-all duration-300 flex-col ${isFilterExpanded ? 'w-[280px] p-4 cursor-default' : 'w-auto p-2 cursor-pointer hover:bg-gray-50'}`}
        style={{ boxShadow: '0 2px 10px rgba(0,0,0,0.2)' }}
        onClick={() => !isFilterExpanded && setIsFilterExpanded(true)}
      >
        <div className={`flex items-center justify-between ${isFilterExpanded ? 'mb-4 border-b pb-2' : ''}`}>
          <div className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-700"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" /></svg>
            {isFilterExpanded && <h3 className="font-bold text-gray-700 tracking-wide text-sm uppercase">Legenda</h3>}
          </div>
          {isFilterExpanded && (
            <button className="text-gray-400 hover:text-gray-700 p-1" onClick={(e) => { e.stopPropagation(); setIsFilterExpanded(false); }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>
          )}
        </div>
        {isFilterExpanded && (
          <div className="max-h-[70vh] overflow-hidden flex flex-col">
            {legendContent}
          </div>
        )}
      </div>

      {/* MOBILE LEGENDA */}
      {/* FAB Button */}
      <button
        onClick={(e) => { e.stopPropagation(); setIsFilterExpanded(true); }}
        className={`md:hidden absolute bottom-[30px] left-1/2 -translate-x-1/2 z-[999] bg-white text-black border-2 border-[rgba(0,0,0,0.2)] bg-clip-padding flex items-center gap-2 px-6 py-3 rounded-full hover:bg-[#f4f4f4] transition-all duration-300 ${isFilterExpanded ? 'opacity-0 pointer-events-none translate-y-10' : 'opacity-100 translate-y-0'}`}
        style={{ boxShadow: '0 1px 5px rgba(0,0,0,0.65)' }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" /></svg>
        <span className="font-semibold text-sm tracking-wide">LEGENDA</span>
      </button>

      {/* Bottom Sheet Overlay */}
      <div
        className={`md:hidden fixed inset-0 z-[9999] bg-black/40 transition-opacity duration-300 ${isFilterExpanded ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={(e) => { e.stopPropagation(); setIsFilterExpanded(false); }}
      />
      {/* Bottom Sheet Panel */}
      <div
        className={`md:hidden fixed bottom-0 left-0 right-0 z-[10000] bg-white rounded-t-3xl shadow-[0_-4px_20px_rgba(0,0,0,0.15)] flex flex-col transition-transform duration-300 ease-in-out ${isFilterExpanded ? 'translate-y-0' : 'translate-y-full'}`}
        style={{ height: '70vh', maxHeight: '70vh' }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="w-full flex justify-center py-3 cursor-pointer" onClick={(e) => { e.stopPropagation(); setIsFilterExpanded(false); }}>
          <div className="w-12 h-1.5 bg-gray-300 rounded-full"></div>
        </div>
        <div className="flex flex-row justify-between items-center px-6 pb-4 border-b border-gray-100">
          <div className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#3B2215]"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" /></svg>
            <span className="font-bold text-[15px] tracking-wide text-[#3B2215]">LEGENDA</span>
          </div>
          <button onClick={(e) => { e.stopPropagation(); setIsFilterExpanded(false); }} className="text-gray-400 p-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          </button>
        </div>
        <div className="flex-1 overflow-y-auto px-6 pt-4 pb-8 flex flex-col" style={{ WebkitOverflowScrolling: 'touch' }}>
          {legendContent}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
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

        {/* BATAS ADMINISTRASI */}
        {layers.batas && kavling.length > 0 && (
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

        {/* RISIKO LONGSOR */}
        {layers.risiko && risiko.length > 0 && risiko.map((r, i) => {
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

        {/* JALAN UTAMA */}
        {layers.jalan && jalan.length > 0 && jalan.map((path, idx) => (
          <Polyline key={idx} positions={path} pathOptions={{ color: "#ef4444", weight: 3 }} />
        ))}

        {/* JALUR EVAKUASI */}
        {layers.evakuasi && evakuasi.length > 0 && evakuasi.map((path, idx) => (
          <Polyline key={idx} positions={path} pathOptions={{ color: "black", weight: 4 }}>
            <Popup><div className="font-[Inter] text-sm font-semibold text-center">Jalur Evakuasi</div></Popup>
          </Polyline>
        ))}

        {/* FASILITAS / TITIK KUMPUL */}
        {titikKumpul.length > 0 && titikKumpul.map((point, idx) => {
          const info = getIconTypeAndLabel(point.kategori, point.nama);
          const isKumpul = info.key === 'titikKumpul';
          if (isKumpul && !layers.titikKumpul) return null;
          if (!isKumpul && !layers.fasilitas) return null;

          return (
            <Marker key={`fasilitas-${idx}`} position={point.coord} icon={getTitikIcon(point.kategori, point.nama)} zIndexOffset={200}>
              <Popup>
                <div className="font-[Inter] text-sm font-bold">{point.nama}</div>
                {point.kategori && <div className="text-xs text-gray-500 mt-1">{point.kategori}</div>}
              </Popup>
            </Marker>
          );
        })}

        {/* KELOMPOK RENTAN */}
        {layers.rentan && kerentanan.length > 0 && kerentanan.map((point, idx) => (
          <Marker key={`rentan-${idx}`} position={point.coord} icon={getKerentananIcon(point.jenis)} zIndexOffset={100}>
            <Popup>
              <div className="font-[Inter] text-sm font-bold text-center">Kerentanan: {point.jenis}</div>
            </Popup>
          </Marker>
        ))}

      </MapContainer>
    </div>
  );
}

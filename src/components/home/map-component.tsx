"use client";

import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Polygon, useMap } from "react-leaflet";
import proj4 from "proj4";
import "leaflet/dist/leaflet.css";

// Fix Leaflet marker icons in Next.js (optional but standard practice)
import L from "leaflet";
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

// Define UTM Zone 48S and 49S
// WKID 32748: WGS 84 / UTM zone 48S
proj4.defs("EPSG:32748", "+proj=utm +zone=48 +south +datum=WGS84 +units=m +no_defs");
proj4.defs("EPSG:32749", "+proj=utm +zone=49 +south +datum=WGS84 +units=m +no_defs");

function FitBounds({ coords }: { coords: [number, number][][] }) {
  const map = useMap();
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    if (coords.length > 0 && coords[0].length > 0) {
      const bounds = L.latLngBounds(coords[0]);
      // Beri sedikit waktu agar container peta selesai me-render sebelum fitBounds
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
        title="Fokus ke Basemap Kalongan"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="3"/>
          <path d="M3 7V5a2 2 0 0 1 2-2h2"/><path d="M17 3h2a2 2 0 0 1 2 2v2"/><path d="M21 17v2a2 2 0 0 1-2 2h-2"/><path d="M7 21H5a2 2 0 0 1-2-2v-2"/>
        </svg>
      </button>
    </div>
  );
}

export default function MapComponent() {
  const [polygonCoords, setPolygonCoords] = useState<[number, number][][]>([]);
  const [affectedDusuns, setAffectedDusuns] = useState<{name: string, coords: [number, number][][]}[]>([]);
  const [center, setCenter] = useState<[number, number] | null>(null);

  useEffect(() => {
    // Fetch and parse the basemap json
    fetch("/maps/basemapkalonganjson.json")
      .then((res) => res.json())
      .then((data) => {
        if (data && data.features && data.features.length > 0) {
          const rings = data.features[0].geometry.rings;
          
          // Convert coordinates from UTM 48S to LatLng (EPSG:4326)
          const convertedRings: [number, number][][] = rings.map((ring: number[][]) => 
            ring.map((coord: number[]) => {
              const [lng, lat] = proj4("EPSG:32748", "EPSG:4326", [coord[0], coord[1]]);
              return [lat, lng] as [number, number];
            })
          );
          
          setPolygonCoords(convertedRings);

          // Calculate center of the polygon
          if (convertedRings.length > 0 && convertedRings[0].length > 0) {
            const lats = convertedRings[0].map((c) => c[0]);
            const lngs = convertedRings[0].map((c) => c[1]);
            const minLat = Math.min(...lats);
            const maxLat = Math.max(...lats);
            const minLng = Math.min(...lngs);
            const maxLng = Math.max(...lngs);
            setCenter([(minLat + maxLat) / 2, (minLng + maxLng) / 2]);
          }
        }
      })
      .catch((error) => console.error("Error loading map data:", error));

    const dusuns = [
      { folder: "Dampu", prefix: "dampu" },
      { folder: "Bandungan", prefix: "bandungan" },
      { folder: "Glepung", prefix: "glepung" },
      { folder: "TompoGunung", prefix: "tompo gunung" },
    ];

    dusuns.forEach(d => {
      const fileName = d.folder === "TompoGunung" ? `kavlling ${d.prefix}.json` : `kavling ${d.prefix}.json`;
      fetch(`/maps/${d.folder}/${fileName}`)
        .then(res => res.ok ? res.json() : null)
        .then(async data => {
          if (data && data.features && data.features.length > 0) {
            const wkid = data.spatialReference?.wkid || 32749;
            const projDef = wkid === 32748 ? "EPSG:32748" : "EPSG:32749";
            
            const rings = data.features[0].geometry.rings;
            const convertedRings: [number, number][][] = rings.map((ring: number[][]) => 
              ring.map((coord: number[]) => {
                const [lng, lat] = proj4(projDef, "EPSG:4326", [coord[0], coord[1]]);
                return [lat, lng] as [number, number];
              })
            );
            setAffectedDusuns(prev => [...prev, { name: d.folder, coords: convertedRings }]);
          }
        })
        .catch(() => {});
    });
  }, []);

  if (!center) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-zinc-100">
        <span className="text-zinc-500 font-medium animate-pulse tracking-widest">MEMUAT DATA PETA...</span>
      </div>
    );
  }

  return (
    <>
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
        zoom={14}
        zoomSnap={0.1}
        scrollWheelZoom={true}
        style={{ width: "100%", height: "100%" }}
      >
        {/* Esri World Imagery (Satellite) */}
        <TileLayer
          attribution='&copy; <a href="https://www.google.com/intl/id_id/help/terms_maps/">Google Maps</a>'
          url="https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}"
        />
        <FitBounds coords={polygonCoords} />
        <RecenterButton coords={polygonCoords} />
        
        <Polygon 
          positions={polygonCoords} 
          pathOptions={{ 
            color: "#ffffff", 
            fillColor: "transparent", 
            weight: 2,
            dashArray: "5, 5" // Dashed line for boundary
          }} 
        />
        
        {affectedDusuns.map((dusun, idx) => (
          <Polygon 
            key={idx}
            positions={dusun.coords}
            pathOptions={{
              color: "#ef4444", 
              fillColor: "rgba(239, 68, 68, 0.15)", 
              weight: 2,
              dashArray: "4, 4"
            }}
          />
        ))}
      </MapContainer>
    </>
  );
}

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

// Define UTM Zone 48S
// WKID 32748: WGS 84 / UTM zone 48S
proj4.defs("EPSG:32748", "+proj=utm +zone=48 +south +datum=WGS84 +units=m +no_defs");

function FitBounds({ coords }: { coords: [number, number][][] }) {
  const map = useMap();
  useEffect(() => {
    if (coords.length > 0 && coords[0].length > 0) {
      const bounds = L.latLngBounds(coords[0]);
      // Beri sedikit waktu agar container peta selesai me-render sebelum fitBounds
      setTimeout(() => {
        if (map) {
          map.fitBounds(bounds, { padding: [0, 0] });
        }
      }, 200);
    }
  }, [coords, map]);
  return null;
}

export default function MapComponent() {
  const [polygonCoords, setPolygonCoords] = useState<[number, number][][]>([]);
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
  }, []);

  if (!center) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-zinc-100">
        <span className="text-zinc-500 font-medium animate-pulse tracking-widest">MEMUAT DATA PETA...</span>
      </div>
    );
  }

  return (
    <MapContainer
      center={center}
      zoom={14}
      zoomSnap={0.1}
      scrollWheelZoom={false}
      style={{ width: "100%", height: "100%" }}
    >
      <FitBounds coords={polygonCoords} />
      {/* Esri World Imagery (Satellite) */}
      <TileLayer
        attribution='&copy; <a href="https://www.esri.com/">Esri</a>'
        url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
      />
      
      <Polygon 
        positions={polygonCoords} 
        pathOptions={{ 
          color: "#ffffff", 
          fillColor: "transparent", 
          weight: 2,
          dashArray: "5, 5" // Dashed line for boundary
        }} 
      />
    </MapContainer>
  );
}

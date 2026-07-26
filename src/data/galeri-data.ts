export interface GaleriItem {
  id: string;
  title: string;
  image: string;
  heightType: 'short' | 'tall';
}

export const galeriData: GaleriItem[] = [
  { id: "g1", title: "CURUG TOMPO GUNUNG", image: "/assets/galeri/CURUG TOMPO GUNUNG 1.webp", heightType: "tall" },
  { id: "g2", title: "CURUG TOMPO GUNUNG", image: "/assets/galeri/CURUG TOMPO GUNUNG.webp", heightType: "short" },
  { id: "g3", title: "MAPPING DAMPU", image: "/assets/galeri/MAPPING DAMPU copy.webp", heightType: "tall" },
  { id: "g4", title: "MAPPING DAMPU", image: "/assets/galeri/MAPPING DAMPU.webp", heightType: "short" },
  { id: "g5", title: "OBSERVASI LONGSOR GLEPUNG", image: "/assets/galeri/OBSERVASI LONGSOR GLEPUNG.webp", heightType: "tall" },
  { id: "g6", title: "PINUSIA", image: "/assets/galeri/PINUSIA.webp", heightType: "short" },
  { id: "g7", title: "SAMPLING", image: "/assets/galeri/SAMPLING.webp", heightType: "tall" },
  { id: "g8", title: "SKYVIEW DARI LONGSOR", image: "/assets/galeri/SKYVIEW DARI LONGSOR.webp", heightType: "short" },
  { id: "g9", title: "SOWAN DESTANA", image: "/assets/galeri/SOWAN DESTANA.webp", heightType: "tall" },
  { id: "g10", title: "SOWAN RW 20 GLEPUNG", image: "/assets/galeri/SOWAN RW 20 GLEPUNG.webp", heightType: "short" },
  { id: "g11", title: "SOSIALISASI DAWIS RT 1", image: "/assets/galeri/Sosialisasi Dawis RT 1.webp", heightType: "tall" },
  { id: "g12", title: "MAPPING BANDUNGAN", image: "/assets/galeri/mapping bandungan.webp", heightType: "short" },
  { id: "g13", title: "MAPPING TOMPO GUNUNG", image: "/assets/galeri/mapping tompo gunung.webp", heightType: "tall" },
  { id: "g14", title: "MERAWAT TANAMAN TERASERING", image: "/assets/galeri/merawat tanaman terasering.webp", heightType: "short" },
  { id: "g15", title: "OBSERVASI LONGSOR BANDUNGAN", image: "/assets/galeri/observasi longsor bandungan.webp", heightType: "tall" },
];

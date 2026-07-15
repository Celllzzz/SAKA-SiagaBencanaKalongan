import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "lenis/dist/lenis.css";
import { SmoothScrollProvider } from "@/components/providers/smooth-scroll";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SAKA - Siaga Bencana Kalongan",
  description: "Portal Sistem Informasi Penanggulangan Bencana di Desa Kalongan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}

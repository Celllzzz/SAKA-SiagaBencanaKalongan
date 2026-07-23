"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetClose } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

export function Navbar() {
  const [navStyle, setNavStyle] = useState({
    bg: 'transparent',
    textColor: '#FFFFFF',
    theme: 'dark',
    isHidden: false
  });

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('[data-theme]');
      let currentSection: Element | null = null;
      let isFooterInView = false;

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();

        // Cek jika bagian atas footer sudah masuk layar
        if (section.tagName.toLowerCase() === 'footer' && rect.top < window.innerHeight) {
          isFooterInView = true;
        }

        if (rect.top <= 90 && rect.bottom >= 90) {
          currentSection = section;
        }
      });

      if (window.scrollY < 50 && !currentSection && sections.length > 0) {
        currentSection = sections[0];
      }

      if (currentSection) {
        const bg = window.scrollY < 50 ? 'transparent' : ((currentSection as HTMLElement).dataset.bg || 'transparent');
        const theme = (currentSection as HTMLElement).dataset.theme || 'dark';
        const textColor = theme === 'light' ? '#3B2215' : '#FFFFFF';
        setNavStyle({ bg, textColor, theme, isHidden: isFooterInView });
      } else {
        setNavStyle((prev) => ({ ...prev, isHidden: isFooterInView }));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isLight = navStyle.theme === 'light';

  const navLinks = [
    { label: "Beranda", href: "/" },
    { label: "Tentang", href: "/tentang" },
    { label: "Peta", href: "/peta" },
    { label: "Mitigasi", href: "/#mitigasi" },
    { label: "Pra & Pasca", href: "/#pra-pasca" },
    { label: "Galeri", href: "/galeri" },
  ];

  const handleScrollToTop = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href === "/" && window.location.pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 z-[9999] w-full transition-all duration-200 pointer-events-auto ${navStyle.isHidden ? '-translate-y-full opacity-0' : 'translate-y-0 opacity-100'}`}
      style={{ backgroundColor: navStyle.bg, color: navStyle.textColor }}
    >
      <div className="h-[90px] px-[50px] w-full max-w-[1440px] mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link href="/" onClick={(e) => handleScrollToTop(e, "/")} className="font-[Inter] font-extrabold text-[36px] md:text-[46px] xl:text-[58px] leading-none tracking-[-0.09em]">
            SAKA
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden xl:flex items-center space-x-10 text-[16px] font-semibold tracking-[-0.09em] uppercase">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={(e) => handleScrollToTop(e, link.href)}
              className={`cursor-pointer relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-full after:origin-bottom-left after:scale-x-0 after:transition-transform after:duration-300 after:ease-out hover:after:scale-x-100 transition-colors ${isLight ? "after:bg-[#3B2215] hover:text-[#3B2215]/70" : "after:bg-white hover:text-white"
                }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right Side / Mobile Menu */}
        <div className="flex items-center">
          <Button
            variant="secondary"
            className={`hidden xl:inline-flex rounded-[20px] px-6 py-5 text-[14px] tracking-[0.01em] font-semibold transition-all cursor-pointer uppercase ${isLight ? "bg-[#3B2215] text-white hover:bg-black" : "bg-white text-black hover:bg-gray-200"
              } hover:scale-105`}
          >
            HUBUNGI KAMI
          </Button>

          {/* Mobile Hamburger Menu */}
          <div className="xl:hidden ml-4">
            <Sheet>
              <SheetTrigger className={`inline-flex items-center justify-center rounded-md p-2 transition-colors ${isLight ? "text-[#3B2215] hover:bg-[#3B2215]/10" : "text-white hover:bg-white/20"
                }`}>
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle Menu</span>
              </SheetTrigger>
              <SheetContent side="right" showCloseButton={false} className="bg-[#111111] text-white border-none w-full sm:max-w-md h-[100dvh] flex flex-col pt-8 pb-10 px-8 shadow-2xl z-[9999]">
                <SheetTitle className="sr-only">Menu Navigasi</SheetTitle>
                {/* Top Bar: Logo & Close Icon */}
                <div className="flex justify-between items-start mb-16">
                  {/* SAKA Logo */}
                  <Link href="/" className="text-4xl font-extrabold tracking-tight leading-none uppercase text-white">
                    SAKA
                  </Link>
                  {/* Close Button */}
                  <SheetClose className="text-gray-400 hover:text-white transition-colors mt-1 focus:outline-none">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span className="sr-only">Close menu</span>
                  </SheetClose>
                </div>

                {/* Navigation Links */}
                <nav className="flex-grow flex flex-col gap-y-10">
                  {navLinks.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      className="text-lg font-bold uppercase tracking-wider hover:text-gray-300 transition-colors w-fit text-white"
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>

                {/* Bottom Action Button */}
                <div className="mt-12">
                  <Link
                    href="#"
                    className="inline-flex items-center justify-center bg-white text-black font-bold uppercase text-sm tracking-wide py-4 px-8 rounded-full hover:bg-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#111111] focus:ring-white w-auto self-start"
                  >
                    Hubungi Kami
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}

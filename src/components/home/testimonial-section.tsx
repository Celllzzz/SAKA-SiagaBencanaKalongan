"use client";

import { useRef, useCallback, useState } from "react";

const testimonials = [
  {
    role: "Ketua RW",
    video: "/assets/home/testimonials/testimonials_ketuarw.mp4",
  },
  {
    role: "Ketua RT",
    video: "/assets/home/testimonials/testimonials_ketuart.mp4",
  },
  {
    role: "Warga",
    video: "/assets/home/testimonials/testimonials_warga.mp4",
  },
];

function TestimonialCard({
  testimonial,
  onOpenModal,
}: {
  testimonial: (typeof testimonials)[number];
  onOpenModal: (videoSrc: string, role: string) => void;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = useCallback(() => {
    if (videoRef.current) {
      videoRef.current.muted = false;
      videoRef.current.play().catch(() => {
        // If unmuted autoplay is blocked, retry muted
        if (videoRef.current) {
          videoRef.current.muted = true;
          videoRef.current.play().catch(() => {});
        }
      });
    }
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
      videoRef.current.muted = true;
    }
  }, []);

  const handleClick = useCallback(() => {
    // Pause preview video before opening modal
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
      videoRef.current.muted = true;
    }
    onOpenModal(testimonial.video, testimonial.role);
  }, [onOpenModal, testimonial.video, testimonial.role]);

  return (
    <div
      className="relative w-full lg:w-[381px] h-[420px] lg:h-[562px] rounded-none overflow-hidden cursor-pointer group"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      {/* Video Element */}
      <video
        ref={videoRef}
        src={testimonial.video}
        muted
        playsInline
        loop
        preload="metadata"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Bottom Gradient Overlay */}
      <div className="absolute inset-x-0 bottom-0 h-[167px] bg-gradient-to-t from-[#1A1A1A] to-transparent pointer-events-none" />

      {/* Left Edge Gradient */}
      <div className="absolute inset-y-0 left-0 w-[120px] md:w-[172px] bg-gradient-to-r from-[#1A1A1A] to-transparent pointer-events-none" />

      {/* Right Edge Gradient */}
      <div className="absolute inset-y-0 right-0 w-[120px] md:w-[172px] bg-gradient-to-l from-[#1A1A1A] to-transparent pointer-events-none" />

      {/* Play Icon Hint (visible until hover) */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-60 group-hover:opacity-0 transition-opacity duration-300">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="white"
          className="w-12 h-12 md:w-16 md:h-16 drop-shadow-lg"
        >
          <path d="M8 5v14l11-7z" />
        </svg>
      </div>

      {/* Role Label */}
      <span className="absolute bottom-6 left-6 md:bottom-[50px] md:left-[37px] text-white font-semibold text-xl md:text-[33px] leading-[166%] tracking-[0.01em]">
        {testimonial.role}
      </span>
    </div>
  );
}

/* ─── Video Modal ─── */
function VideoModal({
  videoSrc,
  role,
  onClose,
}: {
  videoSrc: string;
  role: string;
  onClose: () => void;
}) {
  const backdropRef = useRef<HTMLDivElement>(null);

  const handleBackdropClick = useCallback(
    (e: React.MouseEvent) => {
      if (e.target === backdropRef.current) {
        onClose();
      }
    },
    [onClose]
  );

  return (
    <div
      ref={backdropRef}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-sm animate-fade-in"
      onClick={handleBackdropClick}
    >
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 md:top-10 md:right-10 text-white/70 hover:text-white transition-colors cursor-pointer z-10"
        aria-label="Tutup video"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-8 h-8 md:w-10 md:h-10"
        >
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>

      {/* Video Container — adapts to native video aspect ratio */}
      <div className="relative max-w-[90vw] max-h-[80vh] rounded-lg overflow-hidden shadow-2xl">
        <video
          src={videoSrc}
          controls
          autoPlay
          playsInline
          className="max-w-[90vw] max-h-[80vh] rounded-lg"
        />
      </div>

      {/* Role Label below video */}
      <span className="absolute bottom-6 md:bottom-10 text-white font-semibold text-lg md:text-2xl tracking-[0.01em]">
        {role}
      </span>
    </div>
  );
}

export function TestimonialSection() {
  const [modal, setModal] = useState<{
    videoSrc: string;
    role: string;
  } | null>(null);

  const handleOpenModal = useCallback((videoSrc: string, role: string) => {
    setModal({ videoSrc, role });
  }, []);

  const handleCloseModal = useCallback(() => {
    setModal(null);
  }, []);

  return (
    <>
      <section className="w-full bg-[#3B2215] text-white p-[50px] relative overflow-hidden">
        <div className="max-w-[1440px] mx-auto relative">
          {/* Opening Quote Mark (decorative) */}
          <div
            className="absolute top-0 md:top-[70px] left-0 md:left-[70px] text-[120px] md:text-[200px] font-serif leading-none select-none pointer-events-none rotate-180 opacity-40 md:opacity-100 z-0"
            style={{ color: "#5C4438" }}
            aria-hidden="true"
          >
            &ldquo;
          </div>

          {/* Section Title: KATA MEREKA */}
          <div className="relative mb-10 md:mb-16 z-10">
            <h2 className="text-[40px] md:text-[106px] font-[Inter] font-medium leading-none tracking-[-0.045em] uppercase break-words">
              KATA
            </h2>
            <h2 className="text-[40px] md:text-[106px] font-[Inter] font-medium leading-none tracking-[-0.045em] uppercase ml-[20%] md:ml-[211px] break-words">
              MEREKA
            </h2>
          </div>

          {/* Testimonial Cards */}
          <div className="flex flex-col lg:flex-row gap-[20px] lg:gap-[4px] lg:justify-center z-10 relative items-center">
            {testimonials.map((item, index) => (
              <TestimonialCard
                key={index}
                testimonial={item}
                onOpenModal={handleOpenModal}
              />
            ))}
          </div>

          {/* Closing Quote Mark (decorative) */}
          <div
            className="absolute bottom-0 right-0 md:bottom-[-20px] md:right-[20px] text-[120px] md:text-[200px] font-serif leading-none select-none pointer-events-none"
            style={{ color: "#5C4438" }}
            aria-hidden="true"
          >
            &ldquo;
          </div>
        </div>
      </section>

      {/* Full-screen Video Modal */}
      {modal && (
        <VideoModal
          videoSrc={modal.videoSrc}
          role={modal.role}
          onClose={handleCloseModal}
        />
      )}
    </>
  );
}

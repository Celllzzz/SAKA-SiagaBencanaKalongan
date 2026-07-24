"use client";

import { useState } from "react";
import { Send } from "lucide-react";

export function ComplaintForm() {
  const [formData, setFormData] = useState({
    nama: "",
    email: "",
    aduan: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulasi pengiriman data (karena fungsionalitas backend belum aktif)
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ nama: "", email: "", aduan: "" });
      
      // Reset status sukses setelah 3 detik
      setTimeout(() => setIsSubmitted(false), 3000);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section className="w-full bg-[#3B2215] text-white py-[50px] md:py-[100px] px-[50px] xl:min-h-[100vh] flex flex-col justify-center" data-theme="dark" data-bg="#3B2215">
      <div className="w-full max-w-[1340px] mx-auto flex flex-col xl:flex-row gap-[50px] xl:gap-[100px]">
        
        {/* Left Side: Form Information */}
        <div className="flex flex-col flex-1 animate-fade-in-up">
          <h2 className="font-[Inter] font-medium text-[32px] md:text-[50px] xl:text-[70px] leading-none tracking-[-0.045em] mb-6">
            FORM<br/>PENGADUAN
          </h2>
          <p className="font-[Inter] text-[18px] md:text-[20px] text-white/80 leading-[1.5] max-w-[500px]">
            Sampaikan laporan, aduan, atau informasi seputar potensi kebencanaan dan kondisi infrastruktur di lingkungan Anda. Laporan Anda akan sangat membantu upaya mitigasi bersama.
          </p>
        </div>

        {/* Right Side: The Form */}
        <div className="flex-[1.5] animate-fade-in-up delay-200">
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            
            {/* Input Nama */}
            <div className="flex flex-col gap-2">
              <label htmlFor="nama" className="font-[Inter] font-semibold text-[14px] uppercase tracking-wider text-white/70">
                Nama Lengkap
              </label>
              <input
                type="text"
                id="nama"
                name="nama"
                required
                value={formData.nama}
                onChange={handleChange}
                placeholder="Masukkan nama lengkap Anda"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-white/30 focus:outline-none focus:border-[#FAE3C7] focus:ring-1 focus:ring-[#FAE3C7] transition-all"
              />
            </div>

            {/* Input Email */}
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="font-[Inter] font-semibold text-[14px] uppercase tracking-wider text-white/70">
                Email Pengirim
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="alamat.email@contoh.com"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-white/30 focus:outline-none focus:border-[#FAE3C7] focus:ring-1 focus:ring-[#FAE3C7] transition-all"
              />
            </div>

            {/* Input Aduan */}
            <div className="flex flex-col gap-2">
              <label htmlFor="aduan" className="font-[Inter] font-semibold text-[14px] uppercase tracking-wider text-white/70">
                Isi Aduan / Laporan
              </label>
              <textarea
                id="aduan"
                name="aduan"
                required
                rows={5}
                value={formData.aduan}
                onChange={handleChange}
                placeholder="Jelaskan detail laporan Anda di sini..."
                className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-white/30 focus:outline-none focus:border-[#FAE3C7] focus:ring-1 focus:ring-[#FAE3C7] transition-all resize-y"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting || isSubmitted}
              className="mt-4 flex items-center justify-center gap-3 bg-[#FAE3C7] text-[#3B2215] hover:bg-white font-bold uppercase tracking-wider text-[16px] py-4 rounded-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed group"
            >
              {isSubmitting ? (
                <span>Mengirim...</span>
              ) : isSubmitted ? (
                <span>Terkirim!</span>
              ) : (
                <>
                  <span>Kirim Laporan</span>
                  <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>
            
          </form>
        </div>

      </div>
    </section>
  );
}

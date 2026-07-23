import Image from "next/image";
import Link from "next/link";

const allDusuns = [
  { id: "01", slug: "dampu", name: "DUSUN DAMPU", image: "/assets/peta/dampu.webp" },
  { id: "02", slug: "bandungan", name: "DUSUN BANDUNGAN", image: "/assets/peta/bandungan.webp" },
  { id: "03", slug: "glepung", name: "DUSUN GLEPUNG", image: "/assets/peta/glepung.webp" },
  { id: "04", slug: "tompo-gunung", name: "DUSUN TOMPO GUNUNG", image: "/assets/peta/tompo gunung.webp" }
];

export function OtherDusun({ currentSlug }: { currentSlug: string }) {
  const otherDusuns = allDusuns.filter(d => d.slug !== currentSlug);

  return (
    <section className="w-full bg-[#3B2215] py-[50px] px-[20px] md:px-[50px] flex flex-col items-center gap-[50px]">
      <h2 className="font-[Inter] font-medium text-[40px] md:text-[60px] lg:text-[106px] leading-none text-center tracking-[-0.045em] uppercase text-white w-full max-w-[1340px]">
        Lihat Peta Dusun Lain
      </h2>
      
      <div className="w-full max-w-[1340px] flex flex-col md:flex-row gap-[50px] justify-between">
        {otherDusuns.map((dusun) => (
          <Link href={`/peta/${dusun.slug}`} key={dusun.slug} className="group flex flex-col gap-[16px] w-full cursor-pointer transition-transform duration-300 hover:-translate-y-2">
            <div className="relative w-full aspect-[413/415] overflow-hidden">
              <Image
                src={dusun.image}
                alt={dusun.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            
            <div className="flex flex-row justify-between items-center w-full text-white">
              <span className="font-[Inter] font-semibold text-[18px] md:text-[24px] leading-none tracking-[-0.09em]">
                ({dusun.id})
              </span>
              <span className="font-[Inter] font-semibold text-[18px] md:text-[24px] leading-none tracking-[-0.05em] uppercase">
                {dusun.name}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

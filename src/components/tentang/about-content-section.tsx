import Image from "next/image";

export function AboutContentSection() {
  return (
    <section className="w-full bg-[#FAE3C7] text-[#3B2215] px-[20px] md:px-[50px] py-[50px] overflow-hidden" data-theme="light" data-bg="#FAE3C7">
      <div className="w-full flex flex-col relative">
        
        {/* Sub-bagian 1: Tujuan SAKA */}
        <div className="relative flex flex-col w-full mb-[50px] lg:mb-[80px]">
          {/* Text & Label Container */}
          <div className="flex flex-col lg:flex-row justify-between items-start w-full relative z-10">
            <h2 className="font-[Inter] font-medium text-[24px] md:text-[28px] lg:text-[36px] leading-[1.3] lg:leading-[1.2] tracking-[-0.045em] max-w-[800px] xl:max-w-[900px]">
              <span className="font-bold">SAKA</span> hadir untuk membantu warga Desa Kalongan mengenali risiko longsor di sekitar tempat tinggal mereka, mengetahui langkah yang harus diambil sebelum dan saat bencana terjadi, serta menyiapkan diri dengan lebih baik lewat panduan yang mudah dipahami
            </h2>
            <span className="font-[Inter] font-semibold text-[14px] lg:text-[16px] leading-none tracking-[-0.09em] lg:text-right shrink-0 mt-[20px] lg:mt-[10px] lg:absolute lg:right-0 lg:top-[10px] uppercase">
              Tentang Kami
            </span>
          </div>

          {/* Image */}
          <div className="relative w-full lg:w-[600px] h-[250px] md:h-[350px] lg:h-[350px] overflow-hidden mt-[30px] lg:mt-[40px] lg:self-end z-0">
            <Image
              src="/assets/about/section1.webp"
              alt="Pohon di Desa Kalongan"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Sub-bagian 2: Mengapa Ada SAKA? */}
        <div className="flex flex-col w-full mb-[50px] lg:mb-[50px]">
          {/* Title */}
          <div className="flex flex-col w-full mb-[30px] lg:mb-[50px]">
            <h2 className="font-[Inter] font-medium text-[36px] md:text-[56px] lg:text-[72px] leading-[1] tracking-[-0.045em]">
              MENGAPA
            </h2>
            <h2 className="font-[Inter] font-medium text-[36px] md:text-[56px] lg:text-[72px] leading-[1] tracking-[-0.045em] lg:ml-[150px]">
              ADA SAKA?
            </h2>
          </div>

          {/* Panorama Image */}
          <div className="relative w-full h-[200px] md:h-[350px] lg:h-[450px] overflow-hidden mb-[30px] lg:mb-[50px]">
            <Image
              src="/assets/about/section2.webp"
              alt="Kondisi wilayah rawan longsor"
              fill
              className="object-cover"
            />
          </div>

          {/* Paragraphs (Staggered diagonally on desktop) */}
          <div className="flex flex-col lg:flex-row justify-between w-full gap-[30px] lg:gap-0">
            <p className="font-[Inter] font-medium text-[16px] md:text-[20px] lg:text-[26px] leading-[1.4] lg:leading-[1.35] tracking-[-0.045em] lg:w-[48%]">
              Desa Kalongan memiliki luas sekitar 868,3 hektare dengan ketinggian 339 mdpl. Kondisi wilayahnya yang berbukit dan berlereng membuat desa ini rawan bencana, terutama tanah longsor, banjir, dan cuaca ekstrem.
            </p>
            <p className="font-[Inter] font-medium text-[16px] md:text-[20px] lg:text-[26px] leading-[1.4] lg:leading-[1.35] tracking-[-0.045em] lg:w-[48%] lg:mt-[120px]">
              Menjawab kondisi tersebut, Tim KKN Tematik Universitas Diponegoro mengembangkan SAKA — media digital untuk edukasi mitigasi dan informasi kebencanaan, guna mewujudkan Desa Kalongan yang lebih tangguh dan siap siaga.
            </p>
          </div>
        </div>

        {/* Sub-bagian 3: Visi & Misi */}
        <div className="flex flex-col lg:flex-row justify-between items-stretch w-full gap-[30px] lg:gap-[60px]">
          {/* Left Image */}
          <div className="relative w-full lg:w-[45%] min-h-[300px] md:min-h-[450px] lg:min-h-0 overflow-hidden shrink-0">
            <Image
              src="/assets/home/foto_footer.webp"
              alt="Tebing rawan longsor"
              fill
              className="object-cover object-top"
            />
          </div>

          {/* Right Content */}
          <div className="flex flex-col w-full lg:w-[50%]">
            <div className="flex flex-col gap-[20px] lg:gap-[30px]">
              <h3 className="font-[Inter] font-medium text-[20px] md:text-[28px] lg:text-[32px] leading-[1.3] lg:leading-[1.2] tracking-[-0.045em] mt-0">
                Mewujudkan Desa Kalongan yang siaga, mandiri, dan tanggap terhadap bencana longsor.
              </h3>
              
              <ul className="flex flex-col gap-2 font-[Inter] font-medium text-[14px] md:text-[18px] lg:text-[18px] leading-[1.4] lg:leading-[1.35] tracking-[-0.045em] list-disc pl-6 marker:text-[#3B2215]">
                <li>Menyediakan pemetaan wilayah rawan bencana yang mudah dipahami</li>
                <li>Membekali warga dengan prosedur mitigasi yang jelas dan aplikatif</li>
                <li>Mendorong kesiapsiagaan mandiri lewat panduan tas siaga bencana</li>
                <li>Mendokumentasikan dan mempublikasikan program-program KKN Tematik sebagai bentuk pengabdian kepada masyarakat.</li>
                <li>Memperkenalkan potensi, kondisi, dan karakteristik Desa Kalongan melalui media digital.</li>
              </ul>
            </div>

            {/* KKN Logo */}
            <div className="relative w-[200px] lg:w-[350px] h-[85px] lg:h-[150px] mt-[40px] lg:mt-[50px] self-center">
              <Image
                src="/logo/logo_kkn.png"
                alt="Logo KKN Desa Kalongan"
                fill
                className="object-contain object-bottom"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

import Image from "next/image";

export function AboutContentSection() {
  return (
    <section className="w-full bg-[#FAE3C7] text-[#3B2215] px-[20px] md:px-[50px] py-[50px] overflow-hidden" data-theme="light" data-bg="#FAE3C7">
      <div className="w-full flex flex-col relative">
        
        {/* Sub-bagian 1: Tujuan SAKA */}
        <div className="relative flex flex-col w-full mb-[50px] xl:mb-[80px]">
          {/* Text & Label Container */}
          <div className="flex flex-col xl:flex-row justify-between items-start w-full relative z-10">
            <h2 className="font-[Inter] font-medium text-[24px] md:text-[28px] xl:text-[46px] leading-[1.3] xl:leading-[1.14] tracking-[-0.045em] max-w-[800px] xl:max-w-[954px]">
              <span className="font-bold">SAKA</span> hadir untuk membantu warga Desa Kalongan mengenali risiko longsor di sekitar tempat tinggal mereka, mengetahui langkah yang harus diambil sebelum dan saat bencana terjadi, serta menyiapkan diri dengan lebih baik lewat panduan yang mudah dipahami
            </h2>
            <span className="font-[Inter] font-semibold text-[14px] xl:text-[16px] leading-none tracking-[-0.09em] xl:text-right shrink-0 mt-[20px] xl:mt-[10px] xl:absolute xl:right-0 xl:top-[10px] uppercase">
              Tentang Kami
            </span>
          </div>

          {/* Image */}
          <div className="relative w-full xl:w-[854px] h-[250px] md:h-[350px] xl:h-[480px] overflow-hidden mt-[30px] xl:mt-[40px] xl:self-end z-0">
            <Image
              src="/assets/about/section1.webp"
              alt="Pohon di Desa Kalongan"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Sub-bagian 2: Mengapa Ada SAKA? */}
        <div className="flex flex-col w-full mb-[50px] xl:mb-[50px]">
          {/* Title */}
          <div className="flex flex-col w-full mb-[30px] xl:mb-[50px]">
            <h2 className="font-[Inter] font-medium text-[36px] md:text-[56px] xl:text-[106px] leading-none tracking-[-0.045em]">
              MENGAPA
            </h2>
            <h2 className="font-[Inter] font-medium text-[36px] md:text-[56px] xl:text-[106px] leading-none tracking-[-0.045em] xl:ml-[150px]">
              ADA SAKA?
            </h2>
          </div>

          {/* Panorama Image */}
          <div className="relative w-full h-[200px] md:h-[350px] xl:h-[654px] overflow-hidden mb-[30px] xl:mb-[50px]">
            <Image
              src="/assets/about/section2.webp"
              alt="Kondisi wilayah rawan longsor"
              fill
              className="object-cover"
            />
          </div>

          {/* Paragraphs (Staggered diagonally on desktop) */}
          <div className="flex flex-col w-full gap-[30px] xl:gap-[50px]">
            <p className="font-[Inter] font-medium text-[16px] md:text-[20px] xl:text-[30px] leading-[1.4] xl:leading-[1.35] tracking-[-0.045em] xl:w-[761px]">
              Desa Kalongan memiliki luas sekitar 868,3 hektare dengan ketinggian 339 mdpl. Kondisi wilayahnya yang berbukit dan berlereng membuat desa ini rawan bencana, terutama tanah longsor, banjir, dan cuaca ekstrem.
            </p>
            <p className="font-[Inter] font-medium text-[16px] md:text-[20px] xl:text-[30px] leading-[1.4] xl:leading-[1.35] tracking-[-0.045em] xl:w-[670px] xl:self-end">
              Menjawab kondisi tersebut, Tim KKN Tematik Universitas Diponegoro mengembangkan SAKA — media digital untuk edukasi mitigasi dan informasi kebencanaan, guna mewujudkan Desa Kalongan yang lebih tangguh dan siap siaga.
            </p>
          </div>
        </div>

        {/* Sub-bagian 3: Visi & Misi */}
        <div className="flex flex-col xl:flex-row justify-between items-stretch w-full gap-[30px] xl:gap-[50px]">
          {/* Left Image */}
          <div className="relative w-full xl:w-[620px] h-[300px] md:h-[450px] xl:h-[775px] overflow-hidden shrink-0">
            <Image
              src="/assets/home/foto_footer.webp"
              alt="Tebing rawan longsor"
              fill
              className="object-cover object-top"
            />
          </div>

          {/* Right Content */}
          <div className="flex flex-col w-full xl:w-[670px] shrink-0">
            <div className="flex flex-col gap-[20px] xl:gap-[30px]">
              <h3 className="font-[Inter] font-medium text-[20px] md:text-[28px] xl:text-[46px] leading-[1.3] xl:leading-[1.14] tracking-[-0.045em] mt-0">
                Mewujudkan Desa Kalongan yang siaga, mandiri, dan tanggap terhadap bencana longsor.
              </h3>
              
              <ul className="flex flex-col gap-2 font-[Inter] font-medium text-[14px] md:text-[18px] xl:text-[29px] leading-[1.4] xl:leading-[1.25] tracking-[-0.045em] list-disc pl-6 marker:text-[#3B2215]">
                <li>Menyediakan pemetaan wilayah rawan bencana yang mudah dipahami</li>
                <li>Membekali warga dengan prosedur mitigasi yang jelas dan aplikatif</li>
                <li>Mendorong kesiapsiagaan mandiri lewat panduan tas siaga bencana</li>
                <li>Mendokumentasikan dan mempublikasikan program-program KKN Tematik sebagai bentuk pengabdian kepada masyarakat.</li>
                <li>Memperkenalkan potensi, kondisi, dan karakteristik Desa Kalongan melalui media digital.</li>
              </ul>
            </div>

            {/* KKN Logo */}
            <div className="relative w-[200px] xl:w-[294px] h-[85px] xl:h-[125px] mt-[40px] xl:mt-auto self-center">
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

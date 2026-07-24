import { MitigasiDetailSection as MitigasiDetailSectionType } from "@/data/mitigasi-detail-data";

interface MitigasiDetailSectionProps {
  data: MitigasiDetailSectionType;
  isLast: boolean;
}

export function MitigasiDetailSection({ data, isLast }: MitigasiDetailSectionProps) {
  return (
    <div className="w-full relative flex flex-col items-center">
      
      {/* Separator Line */}
      <div className="w-full h-[2px] bg-[#3B2215]/50 -rotate-[0.1deg]" />

      {/* Content Container */}
      <div className="w-full max-w-[1440px] flex flex-col items-start p-[50px] gap-[16px]">
        
        {/* Title */}
        <div className="flex flex-row items-start gap-[4px] lg:gap-[8px] shrink-0">
          <span className="font-[Inter] font-normal text-[13px] leading-[18px] tracking-[-0.006em] text-[#757575] mt-[2px] md:mt-[6px]">
            {data.number}
          </span>
          <h2 className="font-[Inter] font-medium text-[28px] md:text-[36px] leading-[1.1] tracking-[-0.0075em] text-[#3B2215]">
            {data.title}
          </h2>
        </div>

        {/* Content Subsections */}
        <div className="flex flex-col items-start gap-[32px] w-full pl-[22px] lg:pl-[26px]">
          {data.subsections.map((subsection, index) => (
            <div key={index} className="flex flex-col items-start gap-[16px] w-full">
              
              {/* Subtitle */}
              {subsection.subtitle && (
                <h3 className="font-[Inter] font-medium text-[20px] md:text-[24px] leading-[1.35] tracking-[-0.045em] text-[#3B2215]/80">
                  {subsection.subtitle}
                </h3>
              )}

              {/* Blocks */}
              <div className="flex flex-col items-start gap-[16px] w-full">
                {subsection.blocks.map((block, blockIndex) => {
                  if (block.type === 'text') {
                    // Split by \n\n and map to paragraphs
                    return (
                      <div key={blockIndex} className="flex flex-col gap-4">
                        {block.content.split('\n\n').map((paragraph, i) => (
                          <p key={i} className="font-[Inter] font-medium text-[16px] md:text-[24px] leading-[1.35] tracking-[-0.045em] text-[#3B2215]/80 text-justify">
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    );
                  }
                  
                  if (block.type === 'image') {
                    return (
                      <div key={blockIndex} className="w-full flex justify-center py-4">
                        <img 
                          src={block.src} 
                          alt={block.alt} 
                          className="w-full max-w-[800px] h-auto object-contain rounded-lg"
                        />
                      </div>
                    );
                  }
                  
                  if (block.type === 'heading') {
                    return (
                      <h4 key={blockIndex} className="font-[Inter] font-medium text-[16px] md:text-[24px] leading-[1.35] tracking-[-0.045em] text-[#3B2215]/80 uppercase">
                        {block.content}
                      </h4>
                    );
                  }

                  if (block.type === 'list') {
                    return (
                      <div key={blockIndex} className="flex flex-col gap-0 w-full">
                        {block.title && (
                          <h4 className="font-[Inter] font-medium text-[16px] md:text-[24px] leading-[1.35] tracking-[-0.045em] text-[#3B2215]/80 uppercase">
                            {block.title}
                          </h4>
                        )}
                        {block.listType === 'decimal' ? (
                          <ol className="list-decimal pl-[24px] font-[Inter] font-medium text-[16px] md:text-[24px] leading-[1.35] tracking-[-0.045em] text-[#3B2215]/80 text-justify flex flex-col gap-2">
                            {block.items.map((item, i) => (
                              <li key={i}>{item}</li>
                            ))}
                          </ol>
                        ) : (
                          <ul className="list-disc pl-[24px] font-[Inter] font-medium text-[16px] md:text-[24px] leading-[1.35] tracking-[-0.045em] text-[#3B2215]/80 text-justify flex flex-col gap-2">
                            {block.items.map((item, i) => (
                              <li key={i}>{item}</li>
                            ))}
                          </ul>
                        )}
                      </div>
                    );
                  }
                  
                  return null;
                })}
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* If it's the last item, we add a final separator line at the bottom */}
      {isLast && (
        <div className="w-full h-[2px] bg-[#3B2215]/50 -rotate-[0.1deg]" />
      )}
    </div>
  );
}

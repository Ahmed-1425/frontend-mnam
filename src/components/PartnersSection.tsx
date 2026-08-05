import React from "react";

interface PartnersSectionProps {
  lang: "ar" | "en";
}

export default function PartnersSection({ lang }: PartnersSectionProps) {
  // 4 logos with custom visual sizing to balance viewBox padding differences
  const partners = [
    {
      id: "airbnb",
      name: "Airbnb",
      logo: "/airbnb.svg",
      imgStyle: "h-8 sm:h-9 w-auto object-contain",
    },
    {
      id: "booking",
      name: "Booking.com",
      logo: "/booking-com.svg",
      imgStyle: "h-7 sm:h-8 w-auto object-contain",
    },
    {
      id: "gathern",
      name: "جاذر إن",
      logo: "/gather-n.svg",
      imgStyle: "h-20 sm:h-24 w-auto object-contain scale-[2.2]",
    },
    {
      id: "tourism",
      name: "وزارة السياحة",
      logo: "/ministry-of-tourism.svg",
      imgStyle: "h-24 sm:h-28 w-auto object-contain scale-[2.4]",
    },
  ];

  // Repeat partners list in each track so it easily fills wide screens
  const trackItems = [...partners, ...partners];

  return (
    <section className="py-12 md:py-16 bg-[#FAF8F3]/60 border-t border-[#243A2D]/10 overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center">
        <div className="inline-block px-3.5 py-1 rounded-full bg-[#243A2D]/10 text-[#243A2D] text-[11px] font-mono font-bold tracking-widest uppercase mb-3">
          SUCCESS PARTNERS & CERTIFIED PLATFORMS
        </div>

        <h2 className="text-xl sm:text-3xl font-bold text-[#203028]">
          {lang === "ar"
            ? "منظومة شركاء النجاح والمنصات المعتمدة"
            : "Success Partners & Certified Platforms"}
        </h2>
      </div>

      {/* Seamless Continuous 100% Infinite Loop Carousel */}
      <div className="relative w-full overflow-hidden py-3 flex">
        
        {/* Soft Fades on Sides */}
        <div className="absolute inset-y-0 left-0 w-20 sm:w-32 bg-gradient-to-r from-[#FAF8F3] to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-20 sm:w-32 bg-gradient-to-l from-[#FAF8F3] to-transparent z-10 pointer-events-none" />

        {/* Track 1 */}
        <div className="flex shrink-0 items-center gap-6 sm:gap-10 pr-6 sm:pr-10 animate-marquee-loop hover:[animation-play-state:paused]">
          {trackItems.map((partner, index) => (
            <div
              key={`t1-${index}`}
              className="px-6 py-4 rounded-2xl bg-[#FFFEFB] border border-[#243A2D]/15 shadow-sm hover:shadow-md transition-all flex items-center justify-center min-w-[170px] sm:min-w-[210px] h-20 sm:h-24 group cursor-pointer shrink-0 overflow-hidden"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className={`${partner.imgStyle} transition-transform duration-300 group-hover:scale-105`}
                loading="lazy"
              />
            </div>
          ))}
        </div>

        {/* Track 2 (Twin track right behind Track 1) */}
        <div className="flex shrink-0 items-center gap-6 sm:gap-10 pr-6 sm:pr-10 animate-marquee-loop hover:[animation-play-state:paused]" aria-hidden="true">
          {trackItems.map((partner, index) => (
            <div
              key={`t2-${index}`}
              className="px-6 py-4 rounded-2xl bg-[#FFFEFB] border border-[#243A2D]/15 shadow-sm hover:shadow-md transition-all flex items-center justify-center min-w-[170px] sm:min-w-[210px] h-20 sm:h-24 group cursor-pointer shrink-0 overflow-hidden"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className={`${partner.imgStyle} transition-transform duration-300 group-hover:scale-105`}
                loading="lazy"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

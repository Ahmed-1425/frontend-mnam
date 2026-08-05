import React from "react";
import { Star, MapPin, Bed, Bath, Users, ArrowLeft, ArrowRight } from "lucide-react";
import { Apartment, translationDict } from "../types";

interface FeaturedApartmentsProps {
  lang: "ar" | "en";
  apartments: Apartment[];
  onSelectApartment: (apt: Apartment) => void;
  onBookApartment: (apt: Apartment) => void;
  onViewAll: () => void;
}

export default function FeaturedApartments({
  lang,
  apartments,
  onSelectApartment,
  onBookApartment,
  onViewAll,
}: FeaturedApartmentsProps) {
  const t = translationDict[lang];
  const featuredList = apartments.slice(0, 3);

  return (
    <section className="py-16 md:py-24 bg-[#FFFEFB]">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-block px-3.5 py-1.5 rounded-full bg-[#243A2D]/10 text-[#243A2D] text-xs font-semibold uppercase tracking-wider mb-4">
            {lang === "ar" ? "شقق مختارة بعناية" : "Handpicked Apartments"}
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-[#203028] mb-4">
            {lang === "ar"
              ? "تصفح باقة مختارة من أرقى وحداتنا السكنية"
              : "Browse a Selection of Our Finest Suites"}
          </h2>

          <p className="text-base sm:text-lg text-[#68756D] leading-relaxed">
            {lang === "ar"
              ? "وحدات مجهزة بأحدث تقنيات الدخول الذكي والخدمات الفندقية المتكاملة لتمنحك إقامة لا تُنسى."
              : "Suites equipped with smart entry and integrated hospitality services for an unforgettable stay."}
          </p>
        </div>

        {/* 3 Featured Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredList.map((apt) => {
            const title = lang === "ar" ? apt.titleAr : apt.titleEn;
            const district = lang === "ar" ? apt.districtAr : apt.districtEn;

            return (
              <div
                key={apt.id}
                className="rounded-2xl bg-[#FFFEFB] border border-[#243A2D]/15 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group flex flex-col justify-between"
              >
                {/* Image Container with Price Badge */}
                <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                  <img
                    src={apt.image}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  {/* Price Tag Overlay */}
                  <div className="absolute top-4 right-4 bg-[#243A2D] text-white px-3.5 py-1.5 rounded-full text-xs font-bold shadow-md">
                    {apt.price} {t.perNight}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Rating & Location Row */}
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <div className="flex items-center gap-1.5 text-xs text-[#68756D]">
                        <MapPin className="w-4 h-4 text-[#7C9885] shrink-0" />
                        <span className="truncate">{district}</span>
                      </div>

                      <div className="flex items-center gap-1 bg-[#E8EEE3] text-[#243A2D] px-2.5 py-1 rounded-full text-xs font-bold shrink-0">
                        <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                        <span>{apt.rating}</span>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-bold text-[#203028] mb-4 line-clamp-1 group-hover:text-[#243A2D] transition-colors">
                      {title}
                    </h3>

                    {/* Specs Row */}
                    <div className="grid grid-cols-3 gap-2 py-3 border-y border-[#243A2D]/10 text-xs text-[#68756D] mb-6 text-center">
                      <div className="flex items-center justify-center gap-1.5">
                        <Bed className="w-4 h-4 text-[#7C9885]" />
                        <span>
                          {apt.bedrooms} {t.bedroomsCount}
                        </span>
                      </div>
                      <div className="flex items-center justify-center gap-1.5 border-x border-[#243A2D]/10">
                        <Bath className="w-4 h-4 text-[#7C9885]" />
                        <span>
                          {apt.bathrooms} {t.bathroomsCount}
                        </span>
                      </div>
                      <div className="flex items-center justify-center gap-1.5">
                        <Users className="w-4 h-4 text-[#7C9885]" />
                        <span>
                          {apt.guests} {t.guestsCount}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* 2 Buttons */}
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      onClick={() => onSelectApartment(apt)}
                      className="w-full py-2.5 px-3 rounded-xl border border-[#243A2D]/20 text-[#243A2D] font-semibold text-xs hover:bg-[#243A2D]/5 transition-colors cursor-pointer outline-none text-center"
                    >
                      {t.viewDetails}
                    </button>
                    <button
                      onClick={() => onBookApartment(apt)}
                      className="w-full py-2.5 px-3 rounded-xl bg-[#243A2D] text-white font-semibold text-xs hover:bg-[#182C20] transition-colors cursor-pointer outline-none text-center shadow-sm"
                    >
                      {t.bookNow}
                    </button>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <button
            onClick={onViewAll}
            className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl border border-[#243A2D]/30 text-[#243A2D] font-semibold text-base hover:bg-[#243A2D] hover:text-white transition-all shadow-sm cursor-pointer outline-none"
          >
            <span>
              {lang === "ar"
                ? "عرض جميع الشقق المتوفرة"
                : "View All Available Apartments"}
            </span>
            {lang === "ar" ? (
              <ArrowLeft className="w-5 h-5" />
            ) : (
              <ArrowRight className="w-5 h-5" />
            )}
          </button>
        </div>

      </div>
    </section>
  );
}

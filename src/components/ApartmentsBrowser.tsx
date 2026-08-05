import React, { useState, useEffect } from "react";
import { Search, MapPin, Star, Bed, Bath, Users, Sparkles, KeyRound, ShieldCheck } from "lucide-react";
import { Apartment, translationDict } from "../types";
import { sampleApartments } from "../data";

interface ApartmentsBrowserProps {
  lang: "ar" | "en";
  onSelectApartment?: (apt: Apartment) => void;
  onBookApartment?: (apt: Apartment) => void;
  onBookingSuccess?: () => void;
}

export default function ApartmentsBrowser({
  lang,
  onSelectApartment,
  onBookApartment,
}: ApartmentsBrowserProps) {
  const t = translationDict[lang];
  const [selectedCity, setSelectedCity] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Sync state with URL query parameters
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const cityParam = params.get("city");
    const qParam = params.get("q");

    if (cityParam) setSelectedCity(cityParam);
    if (qParam) setSearchQuery(qParam);
  }, []);

  // Update URL parameters when filter changes
  const handleCityChange = (city: string) => {
    setSelectedCity(city);
    const url = new URL(window.location.href);
    if (city === "all") {
      url.searchParams.delete("city");
    } else {
      url.searchParams.set("city", city);
    }
    window.history.replaceState({}, "", url.toString());
  };

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
    const url = new URL(window.location.href);
    if (!query) {
      url.searchParams.delete("q");
    } else {
      url.searchParams.set("q", query);
    }
    window.history.replaceState({}, "", url.toString());
  };

  // Filtered Apartments
  const filteredApartments = sampleApartments.filter((apt) => {
    const matchesCity = selectedCity === "all" || apt.city === selectedCity;
    const title = lang === "ar" ? apt.titleAr : apt.titleEn;
    const district = lang === "ar" ? apt.districtAr : apt.districtEn;
    const searchLower = searchQuery.toLowerCase().trim();

    const matchesSearch =
      !searchQuery ||
      title.toLowerCase().includes(searchLower) ||
      district.toLowerCase().includes(searchLower);

    return matchesCity && matchesSearch;
  });

  return (
    <div className="pb-20">
      
      {/* Text-Only Hero Header (Section 44 of prompt) */}
      <div className="bg-[#FAF8F3]/60 py-12 md:py-16 border-b border-[#243A2D]/10">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
          
          <div className="inline-block px-3.5 py-1.5 rounded-full bg-[#243A2D]/10 text-[#243A2D] text-xs font-semibold uppercase tracking-wider mb-4">
            {lang === "ar" ? "للنزلاء والضيوف" : "For Guests & Visitors"}
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#203028] mb-4 leading-tight">
            {t.guestTitle}
          </h1>

          <p className="text-base sm:text-lg text-[#68756D] leading-relaxed mb-8 max-w-3xl mx-auto">
            {t.guestSubtitle}
          </p>

          {/* 3 Horizontal Feature Pills */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#FFFEFB] border border-[#243A2D]/15 text-xs sm:text-sm font-semibold text-[#203028] shadow-sm">
              <Sparkles className="w-4 h-4 text-[#243A2D]" />
              <span>{t.guestFeature1Title}</span>
            </div>

            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#FFFEFB] border border-[#243A2D]/15 text-xs sm:text-sm font-semibold text-[#203028] shadow-sm">
              <KeyRound className="w-4 h-4 text-[#243A2D]" />
              <span>{t.guestFeature2Title}</span>
            </div>

            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#FFFEFB] border border-[#243A2D]/15 text-xs sm:text-sm font-semibold text-[#203028] shadow-sm">
              <ShieldCheck className="w-4 h-4 text-[#243A2D]" />
              <span>{t.guestFeature3Title}</span>
            </div>
          </div>

        </div>
      </div>

      {/* Filter Bar & Apartments Grid Container */}
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        
        {/* Interactive Filter Bar */}
        <div className="bg-[#FFFEFB] p-4 sm:p-6 rounded-2xl border border-[#243A2D]/15 shadow-sm mb-10 flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* City Tabs */}
          <div className="flex items-center gap-2 w-full md:w-auto overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            <button
              onClick={() => handleCityChange("all")}
              className={`px-5 py-2.5 rounded-xl font-semibold text-sm transition-all whitespace-nowrap cursor-pointer ${
                selectedCity === "all"
                  ? "bg-[#243A2D] text-white shadow-sm"
                  : "bg-transparent text-[#68756D] hover:bg-[#243A2D]/5 hover:text-[#203028]"
              }`}
            >
              {t.allCities}
            </button>
            <button
              onClick={() => handleCityChange("riyadh")}
              className={`px-5 py-2.5 rounded-xl font-semibold text-sm transition-all whitespace-nowrap cursor-pointer ${
                selectedCity === "riyadh"
                  ? "bg-[#243A2D] text-white shadow-sm"
                  : "bg-transparent text-[#68756D] hover:bg-[#243A2D]/5 hover:text-[#203028]"
              }`}
            >
              {t.cityRiyadh}
            </button>
            <button
              onClick={() => handleCityChange("jeddah")}
              className={`px-5 py-2.5 rounded-xl font-semibold text-sm transition-all whitespace-nowrap cursor-pointer ${
                selectedCity === "jeddah"
                  ? "bg-[#243A2D] text-white shadow-sm"
                  : "bg-transparent text-[#68756D] hover:bg-[#243A2D]/5 hover:text-[#203028]"
              }`}
            >
              {t.cityJeddah}
            </button>
            <button
              onClick={() => handleCityChange("khobar")}
              className={`px-5 py-2.5 rounded-xl font-semibold text-sm transition-all whitespace-nowrap cursor-pointer ${
                selectedCity === "khobar"
                  ? "bg-[#243A2D] text-white shadow-sm"
                  : "bg-transparent text-[#68756D] hover:bg-[#243A2D]/5 hover:text-[#203028]"
              }`}
            >
              {t.cityKhobar}
            </button>
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-80">
            <Search className={`absolute top-1/2 -translate-y-1/2 ${lang === "ar" ? "right-3.5" : "left-3.5"} w-4 h-4 text-[#68756D]`} />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => handleSearchChange(e.target.value)}
              placeholder={t.searchPlaceholder}
              className={`w-full py-2.5 ${lang === "ar" ? "pr-10 pl-4" : "pl-10 pr-4"} rounded-xl bg-[#FAF8F3] border border-[#243A2D]/15 text-sm text-[#203028] placeholder-[#68756D] focus:outline-none focus:border-[#243A2D] transition-colors`}
            />
          </div>

        </div>

        {/* Results Counter */}
        <div className="flex items-center justify-between mb-6 text-sm text-[#68756D]">
          <div>
            {lang === "ar"
              ? `عرض ${filteredApartments.length} شقة سكنية`
              : `Showing ${filteredApartments.length} luxury suites`}
          </div>
        </div>

        {/* Apartments Grid */}
        {filteredApartments.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredApartments.map((apt) => {
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
                    <div className="absolute top-4 right-4 bg-[#243A2D] text-white px-3.5 py-1.5 rounded-full text-xs font-bold shadow-md">
                      {apt.price} {t.perNight}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      {/* Location & Rating */}
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

                      {/* Specs */}
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

                    {/* Action Buttons */}
                    <div className="grid grid-cols-2 gap-3">
                      <button
                        onClick={() => onSelectApartment && onSelectApartment(apt)}
                        className="w-full py-2.5 px-3 rounded-xl border border-[#243A2D]/20 text-[#243A2D] font-semibold text-xs hover:bg-[#243A2D]/5 transition-colors cursor-pointer text-center outline-none"
                      >
                        {t.viewDetails}
                      </button>
                      <button
                        onClick={() => onBookApartment && onBookApartment(apt)}
                        className="w-full py-2.5 px-3 rounded-xl bg-[#243A2D] text-white font-semibold text-xs hover:bg-[#182C20] transition-colors cursor-pointer text-center outline-none shadow-sm"
                      >
                        {t.bookNow}
                      </button>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          /* Empty State */
          <div className="text-center py-20 bg-[#FFFEFB] rounded-2xl border border-[#243A2D]/15 p-8">
            <h3 className="text-xl font-bold text-[#203028] mb-2">
              {lang === "ar"
                ? "لم نجد نتائج بهذه الخيارات"
                : "No apartments match your criteria"}
            </h3>
            <p className="text-sm text-[#68756D] mb-6">
              {lang === "ar"
                ? "جرب اختيار مدينة أخرى أو مسح نص البحث."
                : "Try selecting another city or clearing your search."}
            </p>
            <button
              onClick={() => {
                handleCityChange("all");
                handleSearchChange("");
              }}
              className="px-6 py-2.5 rounded-xl bg-[#243A2D] text-white font-semibold text-sm hover:bg-[#182C20] transition-colors cursor-pointer"
            >
              {lang === "ar" ? "مسح الفلاتر" : "Reset Filters"}
            </button>
          </div>
        )}

      </div>
    </div>
  );
}

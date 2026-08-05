import React from "react";
import { X, MapPin, Star, Bed, Bath, Users, CheckCircle2, KeyRound } from "lucide-react";
import { Apartment, translationDict } from "../../types";

interface ApartmentDetailsModalProps {
  lang: "ar" | "en";
  apartment: Apartment | null;
  onClose: () => void;
  onBookNow: (apt: Apartment) => void;
}

export default function ApartmentDetailsModal({
  lang,
  apartment,
  onClose,
  onBookNow,
}: ApartmentDetailsModalProps) {
  if (!apartment) return null;
  const t = translationDict[lang];

  const title = lang === "ar" ? apartment.titleAr : apartment.titleEn;
  const district = lang === "ar" ? apartment.districtAr : apartment.districtEn;
  const description =
    lang === "ar" ? apartment.descriptionAr : apartment.descriptionEn;
  const features =
    lang === "ar" ? apartment.featuresAr : apartment.featuresEn;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#203028]/60 backdrop-blur-md transition-opacity animate-fade-in"
        onClick={onClose}
      />

      {/* Dialog Container */}
      <div className="relative w-full max-w-3xl bg-[#FFFEFB] rounded-3xl shadow-2xl overflow-hidden border border-[#243A2D]/20 z-10 my-8 animate-scale-up">
        
        {/* Header Close Button */}
        <button
          onClick={onClose}
          className={`absolute top-4 ${
            lang === "ar" ? "left-4" : "right-4"
          } z-20 w-10 h-10 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center transition-colors cursor-pointer outline-none`}
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Cover Photo */}
        <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-slate-100">
          <img
            src={apartment.image}
            alt={title}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-4 right-4 bg-[#243A2D] text-white px-4 py-2 rounded-full text-xs font-bold shadow-lg">
            {apartment.price} {t.perNight}
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[60vh] overflow-y-auto">
          
          {/* Header Info */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-3 py-1 rounded-full bg-[#243A2D]/10 text-[#243A2D] text-xs font-bold uppercase tracking-wider">
                {apartment.city.toUpperCase()}
              </span>
              <div className="flex items-center gap-1 bg-[#E8EEE3] text-[#243A2D] px-2.5 py-1 rounded-full text-xs font-bold">
                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                <span>{apartment.rating} ({apartment.reviewsCount})</span>
              </div>
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold text-[#203028] mb-2">
              {title}
            </h2>

            <div className="flex items-center gap-1.5 text-sm text-[#68756D]">
              <MapPin className="w-4 h-4 text-[#7C9885]" />
              <span>{district}</span>
            </div>
          </div>

          {/* Specs Row */}
          <div className="grid grid-cols-3 gap-3 py-4 border-y border-[#243A2D]/10 text-xs sm:text-sm text-[#68756D] text-center bg-[#FAF8F3] rounded-2xl">
            <div className="flex items-center justify-center gap-2">
              <Bed className="w-4 h-4 text-[#243A2D]" />
              <span className="font-bold text-[#203028]">
                {apartment.bedrooms} {t.bedroomsCount}
              </span>
            </div>
            <div className="flex items-center justify-center gap-2 border-x border-[#243A2D]/10">
              <Bath className="w-4 h-4 text-[#243A2D]" />
              <span className="font-bold text-[#203028]">
                {apartment.bathrooms} {t.bathroomsCount}
              </span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Users className="w-4 h-4 text-[#243A2D]" />
              <span className="font-bold text-[#203028]">
                {apartment.guests} {t.guestsCount}
              </span>
            </div>
          </div>

          {/* Description */}
          <div>
            <h3 className="text-base font-bold text-[#203028] mb-2">
              {lang === "ar" ? "الوصف التفصيلي" : "Detailed Description"}
            </h3>
            <p className="text-sm text-[#68756D] leading-relaxed">
              {description}
            </p>
          </div>

          {/* Features / Amenities */}
          <div>
            <h3 className="text-base font-bold text-[#203028] mb-3">
              {lang === "ar" ? "المزايا الفندقية المرفقة" : "Hospitality Amenities"}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {features.map((feat, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-xs text-[#203028] bg-[#FAF8F3] p-2.5 rounded-xl border border-[#243A2D]/10">
                  <CheckCircle2 className="w-4 h-4 text-[#243A2D] shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Footer Bar with Sticky Price & CTA */}
        <div className="p-6 bg-[#FAF8F3] border-t border-[#243A2D]/10 flex items-center justify-between gap-4">
          <div>
            <div className="text-xs text-[#68756D]">
              {lang === "ar" ? "السعر لكل ليلة" : "Price per night"}
            </div>
            <div className="text-xl sm:text-2xl font-bold text-[#243A2D]">
              SAR {apartment.price}
            </div>
          </div>

          <button
            onClick={() => {
              onClose();
              onBookNow(apartment);
            }}
            className="py-3 px-8 rounded-xl bg-[#243A2D] text-white font-semibold text-base hover:bg-[#182C20] transition-colors cursor-pointer outline-none shadow-md flex items-center gap-2"
          >
            <KeyRound className="w-4 h-4 text-[#B7C9A8]" />
            <span>{t.bookNow}</span>
          </button>
        </div>

      </div>
    </div>
  );
}

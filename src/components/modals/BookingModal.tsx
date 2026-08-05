import React, { useState } from "react";
import { X, CheckCircle, ShieldCheck, Plus, Minus, Calendar } from "lucide-react";
import { Apartment, translationDict } from "../../types";

interface BookingModalProps {
  lang: "ar" | "en";
  apartment: Apartment | null;
  onClose: () => void;
  onSuccess?: () => void;
}

export default function BookingModal({
  lang,
  apartment,
  onClose,
  onSuccess,
}: BookingModalProps) {
  if (!apartment) return null;
  const t = translationDict[lang];

  const [guestName, setGuestName] = useState("");
  const [guestPhone, setGuestPhone] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guestsCount, setGuestsCount] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  const title = lang === "ar" ? apartment.titleAr : apartment.titleEn;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (guestName && guestPhone && checkIn && checkOut) {
      setSubmitted(true);
      if (onSuccess) onSuccess();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#203028]/60 backdrop-blur-md transition-opacity animate-fade-in"
        onClick={onClose}
      />

      {/* Dialog Container */}
      <div className="relative w-full max-w-lg bg-[#FFFEFB] rounded-3xl shadow-2xl overflow-hidden border border-[#243A2D]/20 z-10 my-8 animate-scale-up p-6 sm:p-8">
        
        {/* Header Close Button */}
        <button
          onClick={onClose}
          className={`absolute top-4 ${
            lang === "ar" ? "left-4" : "right-4"
          } text-[#68756D] hover:text-[#203028] p-2 rounded-full hover:bg-[#243A2D]/10 transition-colors cursor-pointer outline-none`}
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-[#203028] mb-1">
              {t.bookingModalTitle}
            </h2>
            
            <div className="text-xs font-semibold text-[#243A2D] bg-[#E8EEE3] px-3 py-1.5 rounded-lg inline-block mb-6">
              {lang === "ar" ? `الوحدة: ${title}` : `Suite: ${title}`}
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name */}
              <div>
                <label className="block text-xs font-semibold text-[#203028] mb-1.5">
                  {t.formName} *
                </label>
                <input
                  type="text"
                  value={guestName}
                  onChange={(e) => setGuestName(e.target.value)}
                  placeholder={
                    lang === "ar"
                      ? "مثال: عبد العزيز الرويلي"
                      : "e.g. Abdulaziz Al-Ruwaili"
                  }
                  required
                  className="w-full py-3 px-4 rounded-xl bg-[#FAF8F3] border border-[#243A2D]/15 text-sm text-[#203028] focus:outline-none focus:border-[#243A2D] transition-colors"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-xs font-semibold text-[#203028] mb-1.5">
                  {t.formPhone} *
                </label>
                <input
                  type="tel"
                  value={guestPhone}
                  onChange={(e) => setGuestPhone(e.target.value)}
                  placeholder="+966 5x xxx xxxx"
                  required
                  className="w-full py-3 px-4 rounded-xl bg-[#FAF8F3] border border-[#243A2D]/15 text-sm text-[#203028] focus:outline-none focus:border-[#243A2D] transition-colors dir-ltr text-start"
                />
              </div>

              {/* Check-In / Check-Out */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-[#203028] mb-1.5">
                    {t.bookingCheckIn} *
                  </label>
                  <input
                    type="date"
                    value={checkIn}
                    onChange={(e) => setCheckIn(e.target.value)}
                    required
                    className="w-full py-3 px-3 rounded-xl bg-[#FAF8F3] border border-[#243A2D]/15 text-xs text-[#203028] focus:outline-none focus:border-[#243A2D] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#203028] mb-1.5">
                    {t.bookingCheckOut} *
                  </label>
                  <input
                    type="date"
                    value={checkOut}
                    onChange={(e) => setCheckOut(e.target.value)}
                    required
                    className="w-full py-3 px-3 rounded-xl bg-[#FAF8F3] border border-[#243A2D]/15 text-xs text-[#203028] focus:outline-none focus:border-[#243A2D] transition-colors"
                  />
                </div>
              </div>

              {/* Guests Count Stepper */}
              <div>
                <label className="block text-xs font-semibold text-[#203028] mb-1.5">
                  {t.bookingGuests} *
                </label>
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setGuestsCount(Math.max(1, guestsCount - 1))}
                    className="w-10 h-10 rounded-xl bg-[#FAF8F3] border border-[#243A2D]/15 text-[#203028] flex items-center justify-center hover:bg-[#243A2D]/10 font-bold transition-colors cursor-pointer"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="w-12 text-center text-sm font-bold text-[#203028]">
                    {guestsCount} {t.guestsCount}
                  </span>
                  <button
                    type="button"
                    onClick={() => setGuestsCount(Math.min(apartment.guests, guestsCount + 1))}
                    className="w-10 h-10 rounded-xl bg-[#FAF8F3] border border-[#243A2D]/15 text-[#203028] flex items-center justify-center hover:bg-[#243A2D]/10 font-bold transition-colors cursor-pointer"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Guarantee Banner */}
              <div className="p-3 rounded-xl bg-[#FAF8F3] border border-[#243A2D]/15 flex items-center gap-2.5 text-xs text-[#243A2D] font-medium">
                <ShieldCheck className="w-4 h-4 shrink-0" />
                <span>
                  {lang === "ar"
                    ? "ضمان الدخول الذكي والدفع الإلكتروني المعتمد 100%"
                    : "100% Guaranteed Smart Access & Secure Pay"}
                </span>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-4 px-6 rounded-xl bg-[#243A2D] text-white font-semibold text-base hover:bg-[#182C20] transition-colors cursor-pointer outline-none shadow-md mt-2"
              >
                {t.bookingSubmit}
              </button>
            </form>
          </div>
        ) : (
          /* Success State */
          <div className="text-center py-8">
            <div className="w-16 h-16 rounded-full bg-[#E8EEE3] text-[#243A2D] flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10" />
            </div>

            <h3 className="text-2xl font-bold text-[#203028] mb-3">
              {lang === "ar"
                ? "تم تأكيد طلب حجزك!"
                : "Booking Request Confirmed!"}
            </h3>

            <p className="text-sm text-[#68756D] leading-relaxed mb-8">
              {t.bookingSuccess}
            </p>

            <button
              onClick={onClose}
              className="px-8 py-3 rounded-xl bg-[#243A2D] text-white font-semibold text-sm hover:bg-[#182C20] transition-colors cursor-pointer"
            >
              {lang === "ar" ? "إغلاق النافذة" : "Close Window"}
            </button>
          </div>
        )}

      </div>
    </div>
  );
}

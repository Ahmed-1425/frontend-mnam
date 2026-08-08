import React, { useState } from "react";
import { CheckCircle, AlertCircle, ArrowLeft, ArrowRight, ShieldCheck, TrendingUp, Plus, Minus } from "lucide-react";
import { translationDict } from "../types";

interface LandlordSectionProps {
  lang: "ar" | "en";
  onInquirySubmitted?: () => void;
}

export default function LandlordSection({ lang }: LandlordSectionProps) {
  const t = translationDict[lang];
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Form Fields
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [unitsCount, setUnitsCount] = useState(1);
  const [city, setCity] = useState("");
  const [unitType, setUnitType] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && phone && city && unitType) {
      setSubmitted(true);
    }
  };

  const handleReset = () => {
    setName("");
    setPhone("");
    setUnitsCount(1);
    setCity("");
    setUnitType("");
    setSubmitted(false);
  };

  return (
    <div className="pb-20">
      
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Right Column: Information & Value Pitch */}
          <div>
            <div className="inline-block px-3.5 py-1.5 rounded-full bg-[#243A2D]/10 text-[#243A2D] text-xs font-semibold uppercase tracking-wider mb-4">
              {lang === "ar" ? "للملاك والمستثمرين" : "For Owners & Investors"}
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#203028] mb-6 leading-tight">
              {lang === "ar"
                ? "ضاعف عوائد عقارك دون أي عناء تشغيلي"
                : "Double Your Property Returns Effortlessly"}
            </h1>

            <p className="text-base sm:text-lg text-[#68756D] leading-relaxed mb-8">
              {t.heroSubtitle}
            </p>

            {/* 2 Highlight Value Cards */}
            <div className="space-y-4 mb-8">
              <div className="p-5 rounded-2xl bg-[#FFFEFB] border border-[#243A2D]/15 shadow-sm flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#243A2D]/10 text-[#243A2D] flex items-center justify-center shrink-0">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-[#203028]">
                    {lang === "ar"
                      ? "عائد شهري يتجاوز ضعف الإيجار السنوي"
                      : "Monthly returns exceeding double annual rent"}
                  </h4>
                  <p className="text-xs text-[#68756D]">
                    {lang === "ar"
                      ? "تقنيات تسعير ديناميكية ذكية ترتفع مع مواسم السياحة والفعاليات"
                      : "Dynamic AI pricing adapting to Saudi peak seasons and events"}
                  </p>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-[#FFFEFB] border border-[#243A2D]/15 shadow-sm flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#243A2D]/10 text-[#243A2D] flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-[#203028]">
                    {lang === "ar"
                      ? "إدارة تشغيلية فندقية شاملة (360 درجة)"
                      : "Full 360-degree hotel operations & upkeep"}
                  </h4>
                  <p className="text-xs text-[#68756D]">
                    {lang === "ar"
                      ? "استقبال وتنظيف يومي وصيانة دورية شاملة لحفظ قيمة عقارك"
                      : "Reception, housekeeping, and preventive maintenance"}
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Left Column: Readiness Terms -> Form -> Success State */}
          <div className="bg-[#FFFEFB] p-6 sm:p-8 rounded-3xl border border-[#243A2D]/15 shadow-lg">
            
            {/* Step 1: Readiness & Contracting Terms */}
            {!agreedToTerms && !submitted && (
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#203028] mb-2">
                  {lang === "ar"
                    ? "شروط الجاهزية والتعاقد لشركاء منام"
                    : "Readiness & Contracting Terms"}
                </h3>
                <p className="text-xs sm:text-sm text-[#68756D] mb-6">
                  {lang === "ar"
                    ? "يرجى الاطلاع والموافقة على شروط قبول الوحدات قبل البدء بعملية التسجيل."
                    : "Please review and accept our unit readiness terms before proceeding."}
                </p>

                {/* Alert Note */}
                <div className="p-4 rounded-xl bg-[#FAF8F3] border border-[#243A2D]/20 mb-6 flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-[#243A2D] shrink-0 mt-0.5" />
                  <div className="text-xs text-[#203028] leading-relaxed">
                    <span className="font-bold">
                      {lang === "ar" ? "ملاحظة هامة: " : "Important Note: "}
                    </span>
                    {lang === "ar"
                      ? "نحرص في منام على جودة الوحدات لضمان أعلى عائد للمالك وأفضل تجربة للضيف."
                      : "At Manam we strictly enforce unit quality standards to ensure maximum yield."}
                  </div>
                </div>

                {/* Scrollable Terms Content */}
                <div className="max-h-72 overflow-y-auto pr-2 space-y-4 mb-8 text-xs text-[#68756D] leading-relaxed border-y border-[#243A2D]/10 py-4">
                  <div>
                    <h5 className="font-bold text-[#203028] text-sm mb-1">
                      1. ملكية العقار وموقعه
                    </h5>
                    <p>
                      تقديم صك ملكية إلكتروني ساري المفعول أو وكالة شرعية رسمية. أن يقع العقار في الرياض، جدة، أو الخبر في حي مكتمل الخدمات.
                    </p>
                  </div>

                  <div>
                    <h5 className="font-bold text-[#203028] text-sm mb-1">
                      2. جاهزية الوحدة الانشائية
                    </h5>
                    <p>
                      أن تكون الوحدة بحالة إنشائية ممتازة خالية من الشقوق والتسربات، مع مكيفات سبليت أو مركزية بحالة ممتازة ومطبخ مركب.
                    </p>
                  </div>

                  <div>
                    <h5 className="font-bold text-[#203028] text-sm mb-1">
                      3. التأثيث والدخول الذكي
                    </h5>
                    <p>
                      توفير أثاث فندقي معتمد، شاشة ذكية Smart TV، إنترنت فايبر سريع، وقفل باب ذكي إلكتروني.
                    </p>
                  </div>

                  <div>
                    <h5 className="font-bold text-[#203028] text-sm mb-1">
                      4. الرسوم وتحويل الأرباح
                    </h5>
                    <p>
                      تتراوح نسبة الإدارة بين 20% و 25% من إجمالي الدخل. تحول الأرباح للمالك قبل اليوم العاشر من كل شهر ميلادي.
                    </p>
                  </div>
                </div>

                {/* Action Button to Agree & Proceed */}
                <button
                  onClick={() => setAgreedToTerms(true)}
                  className="w-full py-4 px-6 rounded-xl bg-[#243A2D] text-white font-semibold text-base hover:bg-[#182C20] transition-colors flex items-center justify-center gap-3 cursor-pointer outline-none shadow-md"
                >
                  <span>
                    {lang === "ar"
                      ? "موافق، ابدأ التسجيل"
                      : "I Agree, Start Registration"}
                  </span>
                  {lang === "ar" ? (
                    <ArrowLeft className="w-5 h-5" />
                  ) : (
                    <ArrowRight className="w-5 h-5" />
                  )}
                </button>
              </div>
            )}

            {/* Step 2: 5-Field Registration Form */}
            {agreedToTerms && !submitted && (
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl sm:text-2xl font-bold text-[#203028]">
                    {t.formTitle}
                  </h3>
                  <button
                    onClick={() => setAgreedToTerms(false)}
                    className="text-xs text-[#243A2D] underline font-semibold cursor-pointer"
                  >
                    {lang === "ar" ? "عرض الشروط" : "View Terms"}
                  </button>
                </div>

                <p className="text-xs sm:text-sm text-[#68756D] mb-6">
                  {t.formSubtitle}
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Field 1: Name */}
                  <div>
                    <label className="block text-xs font-semibold text-[#203028] mb-1.5">
                      {t.formName} *
                    </label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder={
                        lang === "ar"
                          ? "مثال: عبد العزيز الرويلي"
                          : "e.g. Abdulaziz Al-Ruwaili"
                      }
                      required
                      className="w-full py-3 px-4 rounded-xl bg-[#FAF8F3] border border-[#243A2D]/15 text-sm text-[#203028] focus:outline-none focus:border-[#243A2D] transition-colors"
                    />
                  </div>

                  {/* Field 2: Phone */}
                  <div>
                    <label className="block text-xs font-semibold text-[#203028] mb-1.5">
                      {t.formPhone} *
                    </label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="05xxxxxxxx"
                      required
                      className="w-full py-3 px-4 rounded-xl bg-[#FAF8F3] border border-[#243A2D]/15 text-sm text-[#203028] focus:outline-none focus:border-[#243A2D] transition-colors dir-ltr text-start"
                    />
                  </div>

                  {/* Field 3: Number of Units Stepper */}
                  <div>
                    <label className="block text-xs font-semibold text-[#203028] mb-1.5">
                      {t.formUnitsCount} *
                    </label>
                    <div className="flex items-center gap-3">
                      <button
                        type="button"
                        onClick={() => setUnitsCount(Math.max(1, unitsCount - 1))}
                        className="w-10 h-10 rounded-xl bg-[#FAF8F3] border border-[#243A2D]/15 text-[#203028] flex items-center justify-center hover:bg-[#243A2D]/10 font-bold transition-colors cursor-pointer"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="w-12 text-center text-base font-bold text-[#203028]">
                        {unitsCount}
                      </span>
                      <button
                        type="button"
                        onClick={() => setUnitsCount(unitsCount + 1)}
                        className="w-10 h-10 rounded-xl bg-[#FAF8F3] border border-[#243A2D]/15 text-[#203028] flex items-center justify-center hover:bg-[#243A2D]/10 font-bold transition-colors cursor-pointer"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Field 4: City */}
                  <div>
                    <label className="block text-xs font-semibold text-[#203028] mb-1.5">
                      {t.formCity} *
                    </label>
                    <input
                      type="text"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      placeholder={
                        lang === "ar"
                          ? "مثال: الرياض"
                          : "e.g. Riyadh"
                      }
                      required
                      className="w-full py-3 px-4 rounded-xl bg-[#FAF8F3] border border-[#243A2D]/15 text-sm text-[#203028] focus:outline-none focus:border-[#243A2D] transition-colors"
                    />
                  </div>

                  {/* Field 5: Property Type */}
                  <div>
                    <label className="block text-xs font-semibold text-[#203028] mb-1.5">
                      {t.formUnitType} *
                    </label>
                    <input
                      type="text"
                      value={unitType}
                      onChange={(e) => setUnitType(e.target.value)}
                      placeholder={
                        lang === "ar"
                          ? "مثال: شقة، فيلا، أدوار"
                          : "e.g. Apartment, Villa"
                      }
                      required
                      className="w-full py-3 px-4 rounded-xl bg-[#FAF8F3] border border-[#243A2D]/15 text-sm text-[#203028] focus:outline-none focus:border-[#243A2D] transition-colors"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-4 px-6 rounded-xl bg-[#243A2D] text-white font-semibold text-base hover:bg-[#182C20] transition-colors cursor-pointer outline-none shadow-md mt-2"
                  >
                    {t.formSubmit}
                  </button>
                </form>
              </div>
            )}

            {/* Step 3: Success State inside the card */}
            {submitted && (
              <div className="text-center py-10">
                <div className="w-16 h-16 rounded-full bg-[#E8EEE3] text-[#243A2D] flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-10 h-10" />
                </div>

                <h3 className="text-2xl font-bold text-[#203028] mb-3">
                  {lang === "ar"
                    ? "شكرًا لانضمامك لشركاء منام!"
                    : "Thank you for joining Manam!"}
                </h3>

                <p className="text-sm text-[#68756D] leading-relaxed mb-8 max-w-md mx-auto">
                  {t.formSuccess}
                </p>

                <button
                  onClick={handleReset}
                  className="px-6 py-3 rounded-xl border border-[#243A2D]/20 text-[#243A2D] font-semibold text-sm hover:bg-[#243A2D]/5 transition-colors cursor-pointer"
                >
                  {lang === "ar"
                    ? "تقديم طلب لوحدة أخرى"
                    : "Submit Request for Another Property"}
                </button>
              </div>
            )}

          </div>

        </div>
      </div>
    </div>
  );
}

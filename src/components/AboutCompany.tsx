import React from "react";
import { ShieldCheck, Sparkles, LineChart, Wrench, ArrowLeft, ArrowRight } from "lucide-react";
import { translationDict } from "../types";

interface AboutCompanyProps {
  lang: "ar" | "en";
  onNavigateToTab: (tab: "home" | "suites" | "landlords") => void;
}

export default function AboutCompany({ lang, onNavigateToTab }: AboutCompanyProps) {
  const t = translationDict[lang];

  return (
    <section className="py-16 md:py-24 bg-[#FAF8F3]/60 relative">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* Right Column: Text & 2x2 Stats Grid */}
          <div>
            <div className="inline-block px-3.5 py-1.5 rounded-full bg-[#243A2D]/10 text-[#243A2D] text-xs font-semibold uppercase tracking-wider mb-4">
              {lang === "ar" ? "عن شركتنا" : "About Manam"}
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#203028] mb-6">
              {t.aboutTitle}
            </h2>

            <p className="text-base sm:text-lg text-[#68756D] leading-relaxed mb-10">
              {t.aboutSubtitle}
            </p>

            {/* 2x2 Statistics Grid */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              <div className="p-6 rounded-2xl bg-[#FFFEFB] border border-[#243A2D]/15 shadow-sm text-center">
                <div className="text-3xl sm:text-4xl font-bold text-[#243A2D] mb-1">
                  +120
                </div>
                <div className="text-xs sm:text-sm font-medium text-[#68756D]">
                  {t.statsProperties}
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-[#FFFEFB] border border-[#243A2D]/15 shadow-sm text-center">
                <div className="text-3xl sm:text-4xl font-bold text-[#243A2D] mb-1">
                  91.4%
                </div>
                <div className="text-xs sm:text-sm font-medium text-[#68756D]">
                  {t.statsOccupancy}
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-[#FFFEFB] border border-[#243A2D]/15 shadow-sm text-center">
                <div className="text-3xl sm:text-4xl font-bold text-[#243A2D] mb-1">
                  2x - 3x
                </div>
                <div className="text-xs sm:text-sm font-medium text-[#68756D]">
                  {t.statsReturns}
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-[#FFFEFB] border border-[#243A2D]/15 shadow-sm text-center">
                <div className="text-3xl sm:text-4xl font-bold text-[#243A2D] mb-1">
                  +15K
                </div>
                <div className="text-xs sm:text-sm font-medium text-[#68756D]">
                  {t.statsActiveGuests}
                </div>
              </div>
            </div>
          </div>

          {/* Left Column: 4 Operational Service Cards */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#203028] mb-6">
              {lang === "ar"
                ? "خدماتنا التشغيلية المتكاملة"
                : "Our Integrated Operational Services"}
            </h3>

            <div className="space-y-4">
              {/* Service 1 */}
              <div className="p-5 sm:p-6 rounded-2xl bg-[#FFFEFB] border border-[#243A2D]/15 shadow-sm flex items-start gap-4 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-[#243A2D]/10 text-[#243A2D] flex items-center justify-center shrink-0 mt-0.5">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-[#203028] mb-1">
                    {t.service1Title}
                  </h4>
                  <p className="text-sm text-[#68756D] leading-relaxed">
                    {t.service1Desc}
                  </p>
                </div>
              </div>

              {/* Service 2 */}
              <div className="p-5 sm:p-6 rounded-2xl bg-[#FFFEFB] border border-[#243A2D]/15 shadow-sm flex items-start gap-4 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-[#243A2D]/10 text-[#243A2D] flex items-center justify-center shrink-0 mt-0.5">
                  <Sparkles className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-[#203028] mb-1">
                    {t.service4Title}
                  </h4>
                  <p className="text-sm text-[#68756D] leading-relaxed">
                    {t.service4Desc}
                  </p>
                </div>
              </div>

              {/* Service 3 */}
              <div className="p-5 sm:p-6 rounded-2xl bg-[#FFFEFB] border border-[#243A2D]/15 shadow-sm flex items-start gap-4 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-[#243A2D]/10 text-[#243A2D] flex items-center justify-center shrink-0 mt-0.5">
                  <LineChart className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-[#203028] mb-1">
                    {t.service3Title}
                  </h4>
                  <p className="text-sm text-[#68756D] leading-relaxed mb-2">
                    {t.service3Desc}
                  </p>
                  <button
                    onClick={() => onNavigateToTab("landlords")}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#243A2D] hover:underline cursor-pointer outline-none"
                  >
                    <span>
                      {lang === "ar"
                        ? "ابدأ الاستثمار معنا"
                        : "Start Investing With Us"}
                    </span>
                    {lang === "ar" ? (
                      <ArrowLeft className="w-3.5 h-3.5" />
                    ) : (
                      <ArrowRight className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>
              </div>

              {/* Service 4 */}
              <div className="p-5 sm:p-6 rounded-2xl bg-[#FFFEFB] border border-[#243A2D]/15 shadow-sm flex items-start gap-4 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-[#243A2D]/10 text-[#243A2D] flex items-center justify-center shrink-0 mt-0.5">
                  <Wrench className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-[#203028] mb-1">
                    {t.service2Title}
                  </h4>
                  <p className="text-sm text-[#68756D] leading-relaxed">
                    {t.service2Desc}
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

import React from "react";
import { KeyRound, Building2, CheckCircle2 } from "lucide-react";
import { translationDict } from "../types";

interface HeroProps {
  lang: "ar" | "en";
  onNavigateToTab: (tab: "home" | "suites" | "landlords") => void;
}

export default function Hero({ lang, onNavigateToTab }: HeroProps) {
  const t = translationDict[lang];

  return (
    <section className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        {/* Centralized Text Title */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-[#203028] leading-[1.3] tracking-tight max-w-4xl mx-auto mb-6">
          {lang === "ar" ? (
            <>
              أعد تعريف{" "}
              <span className="text-[#243A2D] font-extrabold px-2 py-0.5 rounded-lg bg-[#243A2D]/10">
                استثمارك العقاري
              </span>{" "}
              وسكنك الفاخر مع منام
            </>
          ) : (
            <>
              Redefine Your{" "}
              <span className="text-[#243A2D] font-extrabold px-2 py-0.5 rounded-lg bg-[#243A2D]/10">
                Real Estate Investment
              </span>{" "}
              and Luxury Stay with Manam
            </>
          )}
        </h1>

        {/* Subtitle Description */}
        <p className="text-lg sm:text-xl text-[#68756D] leading-relaxed max-w-3xl mx-auto mb-10">
          {t.heroSubtitle}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
          <button
            onClick={() => onNavigateToTab("suites")}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#243A2D] text-white font-semibold text-base hover:bg-[#182C20] transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex items-center justify-center gap-3 cursor-pointer outline-none"
          >
            <KeyRound className="w-5 h-5 text-[#B7C9A8]" />
            <span>{t.heroActionBook}</span>
          </button>

          <button
            onClick={() => onNavigateToTab("landlords")}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#FFFEFB] border border-[#243A2D]/20 text-[#243A2D] font-semibold text-base hover:bg-[#243A2D]/5 transition-all shadow-sm hover:shadow flex items-center justify-center gap-3 cursor-pointer outline-none"
          >
            <Building2 className="w-5 h-5 text-[#243A2D]" />
            <span>{t.heroActionList}</span>
          </button>
        </div>

        {/* 3 White Trust Pills */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 max-w-4xl mx-auto">
          <div className="flex items-center gap-2.5 px-5 py-3 rounded-full bg-[#FFFEFB] border border-[#243A2D]/15 shadow-sm text-sm font-medium text-[#203028]">
            <CheckCircle2 className="w-4 h-4 text-[#243A2D]" />
            <span>
              {lang === "ar"
                ? "دخول ذاتي ذكي بالكامل"
                : "100% Smart Self Check-in"}
            </span>
          </div>

          <div className="flex items-center gap-2.5 px-5 py-3 rounded-full bg-[#FFFEFB] border border-[#243A2D]/15 shadow-sm text-sm font-medium text-[#203028]">
            <CheckCircle2 className="w-4 h-4 text-[#243A2D]" />
            <span>
              {lang === "ar"
                ? "إشراف وصيانة دورية شاملة"
                : "Comprehensive Regular Care"}
            </span>
          </div>

          <div className="flex items-center gap-2.5 px-5 py-3 rounded-full bg-[#FFFEFB] border border-[#243A2D]/15 shadow-sm text-sm font-medium text-[#203028]">
            <CheckCircle2 className="w-4 h-4 text-[#243A2D]" />
            <span>
              {lang === "ar"
                ? "شفافية وحسابات معتمدة"
                : "Audited & Transparent Accounting"}
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}

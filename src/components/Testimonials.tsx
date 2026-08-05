import React from "react";
import { Star, Quote } from "lucide-react";
import { sampleTestimonials } from "../data";
import { translationDict } from "../types";

interface TestimonialsProps {
  lang: "ar" | "en";
}

export default function Testimonials({ lang }: TestimonialsProps) {
  const t = translationDict[lang];

  return (
    <section className="py-16 md:py-24 bg-[#FAF8F3]/60 relative">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-block px-3.5 py-1.5 rounded-full bg-[#243A2D]/10 text-[#243A2D] text-xs font-semibold uppercase tracking-wider mb-4">
            {lang === "ar" ? "تجارب شركائنا" : "Partner Experiences"}
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-[#203028] mb-4">
            {t.testimonialsTitle}
          </h2>

          <p className="text-base sm:text-lg text-[#68756D] leading-relaxed">
            {t.testimonialsSubtitle}
          </p>
        </div>

        {/* 3 Testimonials Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {sampleTestimonials.map((test) => {
            const name = lang === "ar" ? test.nameAr : test.nameEn;
            const role = lang === "ar" ? test.roleAr : test.roleEn;
            const comment = lang === "ar" ? test.commentAr : test.commentEn;

            return (
              <div
                key={test.id}
                className="p-8 rounded-2xl bg-[#FFFEFB] border border-[#243A2D]/15 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  {/* Rating Stars & Quote Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-1">
                      {[...Array(test.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 fill-[#243A2D] text-[#243A2D]"
                        />
                      ))}
                    </div>

                    <Quote className="w-8 h-8 text-[#7C9885]/30 rotate-180" />
                  </div>

                  {/* Comment */}
                  <p className="text-base text-[#203028] leading-relaxed mb-8 italic">
                    "{comment}"
                  </p>
                </div>

                {/* Reviewer Details */}
                <div className="flex items-center gap-4 pt-4 border-t border-[#243A2D]/10">
                  <img
                    src={test.avatar}
                    alt={name}
                    className="w-12 h-12 rounded-full object-cover border border-[#243A2D]/20 shrink-0"
                    loading="lazy"
                  />
                  <div>
                    <h3 className="text-base font-bold text-[#203028]">
                      {name}
                    </h3>
                    <div className="text-xs font-medium text-[#68756D]">
                      {role}
                    </div>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

import React, { useState } from "react";
import { ChevronDown, Building2, UserCheck } from "lucide-react";
import { translationDict } from "../types";

interface FaqSectionProps {
  lang: "ar" | "en";
}

export default function FaqSection({ lang }: FaqSectionProps) {
  const t = translationDict[lang];
  const [openFaq, setOpenFaq] = useState<string | null>("g-1");

  const toggleFaq = (id: string) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  const guestFaqs = [
    {
      id: "g-1",
      qAr: "ما الذي يميز شقق \"منام\" الفندقية الفاخرة؟",
      qEn: "What distinguishes Manam luxury hotel suites?",
      aAr: "نجمع بين رفاهية وخدمة الفنادق 5 نجوم (كالدخول الذكي، النظافة الاحترافية، التعقيم، الضيافة) وبين رحابة وخصوصية البيت المستقل لنوفر تجربة معيشية متكاملة.",
      aEn: "We combine 5-star hotel luxury and services (smart entry, professional housekeeping, sanitization, hospitality) with the privacy and comfort of an independent home.",
    },
    {
      id: "g-2",
      qAr: "هل جميع وحدات منام مرخصة رسمياً؟",
      qEn: "Are all Manam units officially licensed?",
      aAr: "نعم، كافة وحداتنا السكنية مرخصة بالكامل من وزارة السياحة السعودية ومربوطة بنظام شموس الأمني المعتمد لضمان أعلى مستويات الأمان والنظامية.",
      aEn: "Yes, all our residential units are fully licensed by the Saudi Ministry of Tourism and connected to the official Shamous security portal.",
    },
    {
      id: "g-3",
      qAr: "كيف يتم تسجيل الدخول للوحدة الفندقية؟",
      qEn: "How does check-in work for the hotel suite?",
      aAr: "تسجيل الدخول ذاتي بالكامل وبكل سهولة. نرسل لك كود الدخول الذكي للباب الإلكتروني فور تأكيد الحجز والتحقق من الهوية، لتتمكن من الدخول مباشرة دون الحاجة للانتظار.",
      aEn: "Self-check-in is seamless. We send your smart door passcode immediately after booking confirmation and ID verification.",
    },
    {
      id: "g-4",
      qAr: "هل تتوفر خدمات تنظيف للوحدة أثناء إقامتي؟",
      qEn: "Are housekeeping services available during my stay?",
      aAr: "بالتأكيد، نوفر خدمات تنظيف دورية وتغيير للبياضات والمناشف ومستلزمات العناية الشخصية الفاخرة عند الطلب طوال فترة إقامتك لراحة تامة.",
      aEn: "Certainly! We provide periodic cleaning, linen/towel refreshes, and luxury amenities on demand throughout your stay.",
    },
  ];

  const ownerFaqs = [
    {
      id: "o-1",
      qAr: "كيف تضمنون سلامة عقاري ومحتويات الشقة؟",
      qEn: "How do you guarantee my property's safety & contents?",
      aAr: "نتبع نظاماً صارماً لحماية أصولك: نوثّق هويات جميع النزلاء عبر بوابة شموس الأمنية، كما نقوم بفحص الوحدة فور مغادرة كل ضيف، ونوفر تغطية تأمينية وصيانة وقائية يومية.",
      aEn: "We strictly verify guest IDs via Shamous, inspect the unit immediately after every checkout, and maintain preventive daily maintenance.",
    },
    {
      id: "o-2",
      qAr: "كيف تفوق عوائد منام الإيجار السنوي التقليدي؟",
      qEn: "How do Manam's yields outperform annual traditional rent?",
      aAr: "بفضل تشغيل عقارك بنظام التأجير اليومي السياحي، واستخدام خوارزميات التسعير الديناميكي التي ترفع الأسعار تماشياً مع مواسم الرياض وجدة ومعدلات الطلب، مما يرفع الدخل السنوي بنسبة تتراوح بين 60% إلى 80%.",
      aEn: "By operating on a boutique short-term hospitality model with dynamic pricing algorithms that capitalize on peak Saudi seasons, boosting annual income by 60% to 80%.",
    },
    {
      id: "o-3",
      qAr: "هل يمكنني متابعة تفاصيل أداء عقاري لحظة بلحظة؟",
      qEn: "Can I track my property's performance in real time?",
      aAr: "نعم، نمنحك حساباً خاصاً على لوحة تحكم الملاك لتتمكن من رؤية نسب الإشغال، الحجوزات القادمة، والإيرادات المحققة مع إمكانية تحميل التقارير المالية شهرياً بمنتهى الشفافية.",
      aEn: "Yes, you get access to our Owner Dashboard to view occupancy rates, upcoming bookings, and monthly financial reports with total transparency.",
    },
    {
      id: "o-4",
      qAr: "ما هي شروط انضمام عقاري إلى منصة منام؟",
      qEn: "What are the requirements for listing my property?",
      aAr: "يجب أن يكون العقار في موقع حيوي مميز في المدن التي نغطيها (الرياض، جدة، الخبر)، وبحالة إنشائية ممتازة، ومجهز بالتكييف والمطبخ ليتولى فريقنا تجهيزه فندقياً بالكامل.",
      aEn: "The property must be in a prime location within our active cities (Riyadh, Jeddah, Khobar), in excellent condition, with AC and kitchen installed.",
    },
    {
      id: "o-5",
      qAr: "كم تبلغ رسوم الإدارة والتشغيل في منام؟",
      qEn: "What are Manam's management and operational fees?",
      aAr: "نعمل بنظام مشاركة الأرباح بنسبة تتراوح بين 20% إلى 25% من إجمالي الدخل المحقق فقط. لا توجد أي رسوم خفية أو رسوم تسجيل ثابتة؛ نجاحنا مرتبط بنجاح عقارك.",
      aEn: "We operate on a revenue-share model of 20% to 25% of gross earnings. No hidden charges or fixed registration fees; our success is tied to yours.",
    },
    {
      id: "o-6",
      qAr: "متى وكيف أستلم أرباح عقاري الشهرية؟",
      qEn: "When and how do I receive my monthly earnings?",
      aAr: "يتم تحويل الأرباح مباشرة إلى حسابك البنكي شهرياً في موعد أقصاه اليوم العاشر من كل شهر ميلادي، مرفقاً بتقرير مالي تفصيلي يوضح كافة الحجوزات ونسب الإشغال.",
      aEn: "Earnings are wired directly to your bank account monthly by the 10th of every month, accompanied by a detailed financial statement.",
    },
    {
      id: "o-7",
      qAr: "هل يوجد عقد تشغيل رسمي؟ وما هي مدته؟",
      qEn: "Is there an official operating contract, and what is its duration?",
      aAr: "نعم، يتم توقيع عقد تشغيل وإدارة رسمي موثق متوافق مع لوائح وأنظمة وزارة السياحة السعودية. مدة العقد تبدأ من سنة ميلادية واحدة قابلة للتجديد تلقائياً.",
      aEn: "Yes, an official contract fully compliant with Ministry of Tourism regulations is signed. Standard term is 1 renewable year.",
    },
    {
      id: "o-8",
      qAr: "هل أستطيع استخدام شقتي لإقامتي الشخصية؟",
      qEn: "Can I use my suite for personal stays?",
      aAr: "بكل تأكيد، نوفر لك مرونة تامة لاستخدام عقارك لإقامتك الشخصية أو لضيوفك في أي وقت تشاء. كل ما عليك هو إبلاغنا وتحديد التواريخ مسبقاً عبر لوحة التحكم.",
      aEn: "Absolutely! You have full flexibility to reserve your property for personal or guest stays anytime by marking dates in advance on the dashboard.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-[#FFFEFB]">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-block px-3.5 py-1.5 rounded-full bg-[#243A2D]/10 text-[#243A2D] text-xs font-semibold uppercase tracking-wider mb-4">
            {lang === "ar" ? "الإجابات الفورية" : "Instant Answers"}
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-[#203028] mb-4">
            {t.faqTitle}
          </h2>

          <p className="text-base sm:text-lg text-[#68756D] leading-relaxed">
            {t.faqSubtitle}
          </p>
        </div>

        {/* 2-Column FAQ Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          
          {/* Column 1: Guests FAQs */}
          <div>
            <div className="flex items-center gap-3 mb-6 pb-3 border-b border-[#243A2D]/15">
              <UserCheck className="w-5 h-5 text-[#243A2D]" />
              <h3 className="text-xl font-bold text-[#203028]">
                {lang === "ar" ? "أسئلة النزلاء والضيوف" : "Guest & Visitor FAQs"}
              </h3>
            </div>

            <div className="space-y-4">
              {guestFaqs.map((faq) => {
                const question = lang === "ar" ? faq.qAr : faq.qEn;
                const answer = lang === "ar" ? faq.aAr : faq.aEn;
                const isOpen = openFaq === faq.id;

                return (
                  <div
                    key={faq.id}
                    className="rounded-2xl bg-[#FFFEFB] border border-[#243A2D]/15 overflow-hidden transition-colors"
                  >
                    <button
                      onClick={() => toggleFaq(faq.id)}
                      className="w-full p-5 text-start font-bold text-base text-[#203028] flex items-center justify-between gap-4 cursor-pointer outline-none hover:text-[#243A2D]"
                      aria-expanded={isOpen}
                    >
                      <span>{question}</span>
                      <ChevronDown
                        className={`w-5 h-5 text-[#7C9885] shrink-0 transition-transform duration-200 ${
                          isOpen ? "rotate-180 text-[#243A2D]" : ""
                        }`}
                      />
                    </button>

                    {isOpen && (
                      <div className="px-5 pb-5 pt-1 text-sm text-[#68756D] leading-relaxed border-t border-[#243A2D]/10">
                        {answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Column 2: Owners FAQs */}
          <div>
            <div className="flex items-center gap-3 mb-6 pb-3 border-b border-[#243A2D]/15">
              <Building2 className="w-5 h-5 text-[#243A2D]" />
              <h3 className="text-xl font-bold text-[#203028]">
                {lang === "ar"
                  ? "أسئلة الملاك والمستثمرين"
                  : "Owner & Investor FAQs"}
              </h3>
            </div>

            <div className="space-y-4">
              {ownerFaqs.map((faq) => {
                const question = lang === "ar" ? faq.qAr : faq.qEn;
                const answer = lang === "ar" ? faq.aAr : faq.aEn;
                const isOpen = openFaq === faq.id;

                return (
                  <div
                    key={faq.id}
                    className="rounded-2xl bg-[#FFFEFB] border border-[#243A2D]/15 overflow-hidden transition-colors"
                  >
                    <button
                      onClick={() => toggleFaq(faq.id)}
                      className="w-full p-5 text-start font-bold text-base text-[#203028] flex items-center justify-between gap-4 cursor-pointer outline-none hover:text-[#243A2D]"
                      aria-expanded={isOpen}
                    >
                      <span>{question}</span>
                      <ChevronDown
                        className={`w-5 h-5 text-[#7C9885] shrink-0 transition-transform duration-200 ${
                          isOpen ? "rotate-180 text-[#243A2D]" : ""
                        }`}
                      />
                    </button>

                    {isOpen && (
                      <div className="px-5 pb-5 pt-1 text-sm text-[#68756D] leading-relaxed border-t border-[#243A2D]/10">
                        {answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

import React from "react";
import { X, ShieldCheck, FileText, AlertCircle } from "lucide-react";

interface LegalModalProps {
  lang: "ar" | "en";
  type: "privacy" | "terms" | null;
  onClose: () => void;
}

export default function LegalModal({
  lang,
  type,
  onClose,
}: LegalModalProps) {
  if (!type) return null;

  const isPrivacy = type === "privacy";
  const title = isPrivacy
    ? lang === "ar"
      ? "سياسة الخصوصية وحماية البيانات"
      : "Privacy & Data Protection Policy"
    : lang === "ar"
    ? "الشروط والأحكام"
    : "Terms & Conditions";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#203028]/60 backdrop-blur-md transition-opacity animate-fade-in"
        onClick={onClose}
      />

      {/* Dialog Container */}
      <div className="relative w-full max-w-2xl bg-[#FFFEFB] rounded-3xl shadow-2xl overflow-hidden border border-[#243A2D]/20 z-10 my-8 animate-scale-up flex flex-col max-h-[85vh]">
        
        {/* Fixed Header */}
        <div className="p-6 border-b border-[#243A2D]/10 flex items-center justify-between shrink-0 bg-[#FAF8F3]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#243A2D]/10 text-[#243A2D] flex items-center justify-center">
              {isPrivacy ? (
                <ShieldCheck className="w-5 h-5" />
              ) : (
                <FileText className="w-5 h-5" />
              )}
            </div>
            <div>
              <h2 className="text-xl font-bold text-[#203028]">{title}</h2>
              <div className="text-xs text-[#68756D]">
                {lang === "ar"
                  ? "آخر تحديث: 1 يناير 2026"
                  : "Last Updated: January 1, 2026"}
              </div>
            </div>
          </div>

          <button
            onClick={onClose}
            className="text-[#68756D] hover:text-[#203028] p-2 rounded-full hover:bg-[#243A2D]/10 transition-colors cursor-pointer outline-none"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-sm text-[#68756D] leading-relaxed flex-1">
          
          {/* Top Alert Note */}
          <div className="p-4 rounded-2xl bg-[#FAF8F3] border border-[#243A2D]/20 flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-[#243A2D] shrink-0 mt-0.5" />
            <div className="text-xs text-[#203028]">
              {isPrivacy ? (
                lang === "ar"
                  ? "نحترم في شركة منام خصوصيتك ونلتزم بحماية بياناتك الشخصية وفقًا للأنظمة واللوائح المعمول بها في المملكة العربية السعودية (نظام حماية البيانات الشخصية)."
                  : "At Manam we strictly respect your privacy and protect your personal data in full compliance with KSA Personal Data Protection Laws."
              ) : (
                lang === "ar"
                  ? "يُرجى قراءة هذه الشروط والأحكام بعناية قبل استخدام منصتنا أو حجز أي من وحداتنا السكنية الفاخرة."
                  : "Please read these Terms and Conditions carefully before using our platform or booking any of our luxury residential suites."
              )}
            </div>
          </div>

          {isPrivacy ? (
            /* Privacy Content */
            <div className="space-y-4">
              <div>
                <h3 className="font-bold text-[#203028] text-base mb-1">
                  1. جمع البيانات والمعلومات
                </h3>
                <p>
                  نجمع البيانات اللازمة لتقديم وتنفيذ خدمات الضيافة والحجز والدخول الذكي، وتشمل: الاسم الكامل، رقم الجوال، البريد الإلكتروني، وتاريخ الحجز، وبيانات الهوية الوطنية أو الإقامة وفق متطلبات الأنظمة السياحية والأمنية بالمملكة.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-[#203028] text-base mb-1">
                  2. استخدام البيانات
                </h3>
                <p>
                  تُستخدم بياناتك لإصدار وتأكيد الحجوزات، توليد رموز الدخول الذكي، التواصل معك طوال فترة الإقامة، تحسين تجربة النزيل، وإرسال النشرات الاستثمارية عند الموافقة.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-[#203028] text-base mb-1">
                  3. مشاركة وحماية البيانات
                </h3>
                <p>
                  لا نبيع أو نؤجر بياناتك الشخصية لأي طرف ثالث. تتم مشاركة البيانات فقط مع الجهات الحكومية والتنظيمية المصرح لها نظامًا (مثل وزارة السياحة والجهات الأمنية) بحسب الأنظمة.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-[#203028] text-base mb-1">
                  4. ملفات الارتباط (Cookies)
                </h3>
                <p>
                  تستخدم منصة منام ملفات الارتباط الضرورية لضمان عمل الموقع وسرعة التحميل وحفظ تفضيلات اللغة والتصفح دون جمع بيانات تتبع شخصية غير مصرح بها.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-[#203028] text-base mb-1">
                  5. حقوق المستخدم والتواصل
                </h3>
                <p>
                  يحق لك طلب تعديل أو تحديث أو حذف بياناتك الشخصية في أي وقت من خلال التواصل مع مسؤول الحماية عبر البريد الإلكتروني: info@usemanam.com.
                </p>
              </div>
            </div>
          ) : (
            /* Terms Content */
            <div className="space-y-4">
              <div>
                <h3 className="font-bold text-[#203028] text-base mb-1">
                  1. قبول الشروط والأهلية
                </h3>
                <p>
                  بإجراء أي حجز أو تقديم طلب عبر منصة منام، فإنك تقر بأهليتك القانونية للتعاقد وموافقتك التامة على جميع الشروط والأحكام المدونة.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-[#203028] text-base mb-1">
                  2. سياسة الحجز والدفع
                </h3>
                <p>
                  يتم تأكيد الحجز فور استكمال الدفع الإلكتروني المعتمد. تشمل الأسعار المعروضة جميع الرسوم الموضحة وتكاليف النظافة والخدمة الفندقية.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-[#203028] text-base mb-1">
                  3. الدخول والمغادرة الذكية
                </h3>
                <p>
                  يبدأ موعد الدخول للوحدة السكنية من الساعة 3:00 مساءً وموعد المغادرة حتى الساعة 12:00 ظهرًا. تُستخدم أقفال إلكترونية ذكية تنتهي صلاحية رموزها تلقائيًا عند انتهاء فترة الحجز.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-[#203028] text-base mb-1">
                  4. مسؤوليات النزيل وسلامة العقار
                </h3>
                <p>
                  يلتزم النزيل بالحفاظ على محتويات الوحدة والأثاث والأجهزة، وعدم إقامة الحفلات أو التدخين داخل الغرف، والمحافظة على الهدوء والنظام العام بالحي.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-[#203028] text-base mb-1">
                  5. القانون والاختصاص القضائي
                </h3>
                <p>
                  تخضع هذه الاتفاقية وتُفسر وفقًا للأنظمة واللوائح المعمول بها في المملكة العربية السعودية، وتختص المحاكم السعودية بمدينة الرياض بالفصل في أي نزاع قد ينشأ.
                </p>
              </div>
            </div>
          )}

        </div>

        {/* Fixed Footer */}
        <div className="p-4 bg-[#FAF8F3] border-t border-[#243A2D]/10 shrink-0 text-center">
          <button
            onClick={onClose}
            className="px-8 py-2.5 rounded-xl bg-[#243A2D] text-white font-semibold text-sm hover:bg-[#182C20] transition-colors cursor-pointer outline-none"
          >
            {lang === "ar" ? "إغلاق النافذة" : "Close Window"}
          </button>
        </div>

      </div>
    </div>
  );
}

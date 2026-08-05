import React, { useState } from "react";
import { Send, Phone, Mail, MapPin } from "lucide-react";
import { translationDict } from "../types";

interface FooterProps {
  lang: "ar" | "en";
  onNavigateToTab: (tab: "home" | "suites" | "landlords") => void;
  onOpenPrivacyModal?: () => void;
  onOpenTermsModal?: () => void;
}

export default function Footer({
  lang,
  onNavigateToTab,
  onOpenPrivacyModal,
  onOpenTermsModal,
}: FooterProps) {
  const t = translationDict[lang];
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setNewsletterSubscribed(true);
      setNewsletterEmail("");
      setTimeout(() => setNewsletterSubscribed(false), 4000);
    }
  };

  return (
    <footer className="bg-[#243A2D] text-white pt-16 pb-12 border-t border-[#243A2D]/20 relative z-10">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 4 Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 pb-12 border-b border-white/10">
          
          {/* Column 1: Brand Info & Socials */}
          <div className="space-y-5">
            <div className="bg-white/95 p-3 rounded-2xl inline-block">
              <img
                src="/dark-logo.png"
                alt="Manam Logo"
                className="h-[48px] w-auto object-contain"
              />
            </div>

            <p className="text-sm text-white/80 leading-relaxed">
              {t.footerDesc}
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://wa.me/966538721499"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors text-white text-xs font-semibold"
                title="WhatsApp"
              >
                WA
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors text-white text-xs font-semibold"
                title="LinkedIn"
              >
                IN
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors text-white text-xs font-semibold"
                title="TikTok"
              >
                TK
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors text-white text-xs font-semibold"
                title="Instagram"
              >
                IG
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors text-white text-xs font-semibold"
                title="X (Twitter)"
              >
                X
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-base font-bold text-white mb-5 pb-2 border-b border-white/10">
              {t.footerLinks}
            </h4>
            <ul className="space-y-3 text-sm text-white/80">
              <li>
                <button
                  onClick={() => onNavigateToTab("home")}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  {t.navHome}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateToTab("suites")}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  {t.navUnits}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateToTab("landlords")}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  {t.navLandlords}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateToTab("home")}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  {t.faqTitle}
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h4 className="text-base font-bold text-white mb-5 pb-2 border-b border-white/10">
              {t.footerContact}
            </h4>
            <ul className="space-y-3.5 text-sm text-white/80">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#B7C9A8] shrink-0 mt-1" />
                <span>
                  {lang === "ar"
                    ? "المملكة العربية السعودية، الرياض، حي الملقا، طريق الملك سلمان"
                    : "King Salman Rd, Al Malqa, Riyadh, Saudi Arabia"}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#B7C9A8] shrink-0" />
                <a
                  href="mailto:info@usemanam.com"
                  className="hover:underline dir-ltr text-start"
                >
                  info@usemanam.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#B7C9A8] shrink-0" />
                <a
                  href="tel:+966538721499"
                  className="hover:underline dir-ltr text-start"
                >
                  +966 53 872 1499
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h4 className="text-base font-bold text-white mb-5 pb-2 border-b border-white/10">
              {t.footerNewsletter}
            </h4>
            <p className="text-sm text-white/80 leading-relaxed mb-4">
              {t.footerNewsletterDesc}
            </p>

            <form onSubmit={handleNewsletterSubmit} className="space-y-2">
              <div className="relative flex items-center">
                <input
                  type="email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder={t.footerNewsletterPlaceholder}
                  required
                  className="w-full py-3 px-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 text-sm focus:outline-none focus:border-white transition-colors"
                />
                <button
                  type="submit"
                  className={`absolute ${
                    lang === "ar" ? "left-1.5" : "right-1.5"
                  } p-2 rounded-lg bg-[#7C9885] hover:bg-[#B7C9A8] hover:text-[#243A2D] text-white transition-colors cursor-pointer`}
                  aria-label="Subscribe"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>

              {newsletterSubscribed && (
                <div className="text-xs text-[#B7C9A8] font-medium pt-1">
                  {lang === "ar"
                    ? "شكرًا لاشتراكك في نشرتنا الاستثمارية!"
                    : "Thank you for subscribing!"}
                </div>
              )}
            </form>
          </div>

        </div>

        {/* Bottom Rights & Compliance Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/70">
          <div>{t.footerRights}</div>

          <div className="flex items-center gap-6">
            <button
              onClick={onOpenPrivacyModal}
              className="hover:text-white transition-colors underline cursor-pointer"
            >
              {lang === "ar" ? "سياسة الخصوصية" : "Privacy Policy"}
            </button>
            <button
              onClick={onOpenTermsModal}
              className="hover:text-white transition-colors underline cursor-pointer"
            >
              {lang === "ar" ? "الشروط والأحكام" : "Terms & Conditions"}
            </button>
          </div>
        </div>

        {/* Mandatory Statutory Registration Details Line */}
        <div className="mt-6 pt-4 border-t border-white/5 text-[11px] text-white/50 text-center space-y-1">
          <div>
            {lang === "ar"
              ? "شركة منام لإدارة وتشغيل المرافق - سجل تجاري رقم: 1010834279 | مرخصة من وزارة السياحة بترخيص تشغيل رقم: 41002345"
              : "Manam Facility Operations Co. - CR: 1010834279 | Tourism Ministry License No: 41002345"}
          </div>
          <div>
            {lang === "ar"
              ? "العنوان الوطني: 7384 طريق الملك سلمان، حي الملقا، الرياض 13524، المملكة العربية السعودية"
              : "National Address: 7384 King Salman Rd, Al Malqa, Riyadh 13524, Kingdom of Saudi Arabia"}
          </div>
        </div>

      </div>
    </footer>
  );
}

import React, { useState, useEffect } from "react";
import { Globe, Menu, X } from "lucide-react";
import { translationDict } from "../types";

interface NavbarProps {
  lang: "ar" | "en";
  setLang: (lang: "ar" | "en") => void;
  activeTab: "home" | "suites" | "landlords";
  setActiveTab: (tab: "home" | "suites" | "landlords") => void;
}

export default function Navbar({
  lang,
  setLang,
  activeTab,
  setActiveTab,
}: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const t = translationDict[lang];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (tab: "home" | "suites" | "landlords") => {
    setActiveTab(tab);
    setMobileMenuOpen(false);
  };

  const toggleLanguage = () => {
    setLang(lang === "ar" ? "en" : "ar");
  };

  return (
    <header
      className={`sticky top-0 z-40 w-full bg-[#FFFEFB]/95 backdrop-blur-md border-b border-[#243A2D]/10 transition-all duration-300 ${
        scrolled ? "shadow-md py-1" : ""
      }`}
    >
      <div className="max-w-[1360px] mx-auto px-4 sm:px-8 h-[96px] md:h-[112px] flex items-center justify-between transition-all">
        {/* Brand Logo - strictly using /dark-logo.png */}
        <button
          onClick={() => handleNavClick("home")}
          className="flex items-center gap-3 cursor-pointer outline-none group"
          aria-label="Manam Logo Home"
        >
          <img
            src="/dark-logo.png"
            alt="Manam Logo"
            className="h-[48px] md:h-[56px] w-auto object-contain transition-transform group-hover:scale-[1.02]"
          />
        </button>

        {/* Desktop Centered Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-12">
          <button
            onClick={() => handleNavClick("home")}
            className={`relative py-2 text-base font-semibold transition-colors cursor-pointer outline-none ${
              activeTab === "home"
                ? "text-[#243A2D]"
                : "text-[#68756D] hover:text-[#243A2D]"
            }`}
          >
            {t.navHome}
            {activeTab === "home" && (
              <span className="absolute bottom-0 inset-x-0 h-[3px] bg-[#243A2D] rounded-full animate-fade-in" />
            )}
          </button>

          <button
            onClick={() => handleNavClick("suites")}
            className={`relative py-2 text-base font-semibold transition-colors cursor-pointer outline-none ${
              activeTab === "suites"
                ? "text-[#243A2D]"
                : "text-[#68756D] hover:text-[#243A2D]"
            }`}
          >
            {t.navUnits}
            {activeTab === "suites" && (
              <span className="absolute bottom-0 inset-x-0 h-[3px] bg-[#243A2D] rounded-full animate-fade-in" />
            )}
          </button>

          <button
            onClick={() => handleNavClick("landlords")}
            className={`relative py-2 text-base font-semibold transition-colors cursor-pointer outline-none ${
              activeTab === "landlords"
                ? "text-[#243A2D]"
                : "text-[#68756D] hover:text-[#243A2D]"
            }`}
          >
            {t.navLandlords}
            {activeTab === "landlords" && (
              <span className="absolute bottom-0 inset-x-0 h-[3px] bg-[#243A2D] rounded-full animate-fade-in" />
            )}
          </button>
        </nav>

        {/* Language Switcher Pill */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-2 px-4 py-2 rounded-full border border-[#243A2D]/20 text-[#243A2D] hover:bg-[#243A2D]/5 font-semibold text-sm transition-all cursor-pointer outline-none"
            title={lang === "ar" ? "Switch to English" : "التحويل للغة العربية"}
          >
            <Globe className="w-4 h-4 text-[#7C9885]" />
            <span>{lang === "ar" ? "English" : "العربية"}</span>
          </button>
        </div>

        {/* Mobile Menu Trigger & Language Pill */}
        <div className="flex md:hidden items-center gap-3">
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1 px-3 py-1.5 rounded-full border border-[#243A2D]/20 text-[#243A2D] font-semibold text-xs transition-all cursor-pointer"
          >
            <Globe className="w-3.5 h-3.5" />
            <span>{lang === "ar" ? "EN" : "عربي"}</span>
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 rounded-xl border border-[#243A2D]/15 text-[#243A2D] hover:bg-[#243A2D]/5 transition-colors cursor-pointer outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[96px] bg-[#FFFEFB] border-b border-[#243A2D]/15 shadow-xl p-6 flex flex-col gap-4 animate-fade-in z-50">
          <button
            onClick={() => handleNavClick("home")}
            className={`w-full text-start py-3 px-4 rounded-xl text-lg font-semibold min-h-[44px] ${
              activeTab === "home"
                ? "bg-[#243A2D] text-white"
                : "text-[#203028] hover:bg-[#243A2D]/5"
            }`}
          >
            {t.navHome}
          </button>
          <button
            onClick={() => handleNavClick("suites")}
            className={`w-full text-start py-3 px-4 rounded-xl text-lg font-semibold min-h-[44px] ${
              activeTab === "suites"
                ? "bg-[#243A2D] text-white"
                : "text-[#203028] hover:bg-[#243A2D]/5"
            }`}
          >
            {t.navUnits}
          </button>
          <button
            onClick={() => handleNavClick("landlords")}
            className={`w-full text-start py-3 px-4 rounded-xl text-lg font-semibold min-h-[44px] ${
              activeTab === "landlords"
                ? "bg-[#243A2D] text-white"
                : "text-[#203028] hover:bg-[#243A2D]/5"
            }`}
          >
            {t.navLandlords}
          </button>
        </div>
      )}
    </header>
  );
}

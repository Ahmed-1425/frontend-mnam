import React, { useState, useEffect } from "react";
import { ArrowUp, MessageCircle } from "lucide-react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutCompany from "./components/AboutCompany";
import FeaturedApartments from "./components/FeaturedApartments";
import Testimonials from "./components/Testimonials";
import FaqSection from "./components/FaqSection";
import PartnersSection from "./components/PartnersSection";
import Footer from "./components/Footer";
import ApartmentsBrowser from "./components/ApartmentsBrowser";
import LandlordSection from "./components/LandlordSection";
import BottomNavBar from "./components/BottomNavBar";
import ApartmentDetailsModal from "./components/modals/ApartmentDetailsModal";
import BookingModal from "./components/modals/BookingModal";
import LegalModal from "./components/modals/LegalModal";
import { sampleApartments } from "./data";
import { Apartment } from "./types";
import { motion, AnimatePresence } from "motion/react";

export default function App() {
  const [lang, setLang] = useState<"ar" | "en">("ar");
  const [activeTab, setActiveTab] = useState<"home" | "suites" | "landlords">("home");
  const [loading, setLoading] = useState(true);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Modal States
  const [selectedApartment, setSelectedApartment] = useState<Apartment | null>(null);
  const [bookingApartment, setBookingApartment] = useState<Apartment | null>(null);
  const [legalModalType, setLegalModalType] = useState<"privacy" | "terms" | null>(null);

  // Sync document language and direction
  useEffect(() => {
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = lang;

    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, [lang]);

  // Handle scroll to show scroll-to-top button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSetTabAndScroll = (tab: "home" | "suites" | "landlords") => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // High-End Crisp Light Splash Loader
  if (loading) {
    return (
      <div className="fixed inset-0 bg-[#FAF8F3] flex flex-col items-center justify-center z-50 text-[#203028] selection:bg-[#243A2D] selection:text-white">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="relative flex flex-col items-center p-8 text-center max-w-sm w-full"
        >
          {/* Logo with Soft Glow Background */}
          <div className="relative mb-6">
            <div className="absolute inset-0 bg-[#243A2D]/10 rounded-full filter blur-2xl animate-pulse" />
            <img
              src="/dark-logo.png"
              alt="Manam Logo"
              className="h-20 sm:h-24 w-auto object-contain relative z-10 drop-shadow-md"
            />
          </div>

          {/* Crisp Bold Arabic Tagline */}
          <h2 className="text-[#243A2D] text-xl sm:text-2xl font-extrabold tracking-tight mb-1.5 antialiased">
            {lang === "ar" ? "مساحتك… بطريقتك" : "Your Space... Your Way"}
          </h2>

          <p className="text-xs font-semibold text-[#68756D] uppercase tracking-widest mb-6">
            {lang === "ar" ? "منام للضيافة الفاخرة" : "Manam Luxury Hospitality"}
          </p>

          {/* Premium Animated Gradient Progress Bar */}
          <div className="w-48 h-1.5 bg-[#243A2D]/15 rounded-full overflow-hidden relative shadow-inner">
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: "0%" }}
              transition={{ duration: 1.1, ease: "easeInOut" }}
              className="h-full bg-gradient-to-r from-[#243A2D] via-[#45634F] to-[#7C9885] rounded-full shadow-sm"
            />
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="bg-geometric-pattern min-h-screen relative selection:bg-[#243A2D] selection:text-white pb-28">
      
      {/* Navigation Header */}
      <Navbar
        lang={lang}
        setLang={setLang}
        activeTab={activeTab}
        setActiveTab={handleSetTabAndScroll}
      />

      {/* Main Content Area */}
      <main className="min-h-[60vh]">
        <AnimatePresence mode="wait">
          
          {/* 1. HOME TAB (Strict 7-Section Order) */}
          {activeTab === "home" && (
            <motion.div
              key="home"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              {/* Section 1: Hero */}
              <Hero lang={lang} onNavigateToTab={handleSetTabAndScroll} />

              {/* Section 2: About & Operational Services */}
              <AboutCompany lang={lang} onNavigateToTab={handleSetTabAndScroll} />

              {/* Section 3: Featured Handpicked Apartments */}
              <FeaturedApartments
                lang={lang}
                apartments={sampleApartments}
                onSelectApartment={(apt) => setSelectedApartment(apt)}
                onBookApartment={(apt) => setBookingApartment(apt)}
                onViewAll={() => handleSetTabAndScroll("suites")}
              />

              {/* Section 4: Guest Testimonials */}
              <Testimonials lang={lang} />

              {/* Section 5: FAQs (2-Column Layout) */}
              <FaqSection lang={lang} />

              {/* Section 6: Success Partners */}
              <PartnersSection lang={lang} />

              {/* Section 7: Footer */}
              <Footer
                lang={lang}
                onNavigateToTab={handleSetTabAndScroll}
                onOpenPrivacyModal={() => setLegalModalType("privacy")}
                onOpenTermsModal={() => setLegalModalType("terms")}
              />
            </motion.div>
          )}

          {/* 2. SUITES / APARTMENTS TAB */}
          {activeTab === "suites" && (
            <motion.div
              key="suites"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <ApartmentsBrowser
                lang={lang}
                onSelectApartment={(apt) => setSelectedApartment(apt)}
                onBookApartment={(apt) => setBookingApartment(apt)}
              />

              <Footer
                lang={lang}
                onNavigateToTab={handleSetTabAndScroll}
                onOpenPrivacyModal={() => setLegalModalType("privacy")}
                onOpenTermsModal={() => setLegalModalType("terms")}
              />
            </motion.div>
          )}

          {/* 3. LANDLORDS / OWNERS TAB */}
          {activeTab === "landlords" && (
            <motion.div
              key="landlords"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <LandlordSection lang={lang} />

              <Footer
                lang={lang}
                onNavigateToTab={handleSetTabAndScroll}
                onOpenPrivacyModal={() => setLegalModalType("privacy")}
                onOpenTermsModal={() => setLegalModalType("terms")}
              />
            </motion.div>
          )}

        </AnimatePresence>
      </main>

      {/* Floating Bottom Navigation Bar for Mobile */}
      <BottomNavBar
        lang={lang}
        activeTab={activeTab}
        setActiveTab={handleSetTabAndScroll}
      />

      {/* Floating WhatsApp / Chat Button (Bottom-Left) */}
      <a
        href="https://wa.me/966538721499"
        target="_blank"
        rel="noreferrer"
        className={`fixed bottom-24 ${
          lang === "ar" ? "left-6" : "right-6"
        } w-13 h-13 bg-[#243A2D] text-white rounded-full shadow-2xl flex items-center justify-center hover:bg-[#182C20] hover:scale-105 transition-all z-40 cursor-pointer border border-[#B7C9A8]/40`}
        aria-label="Contact Manam Support on WhatsApp"
        title={lang === "ar" ? "تواصل معنا عبر واتساب" : "Contact us on WhatsApp"}
      >
        <MessageCircle className="w-6 h-6 text-[#B7C9A8]" />
        <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-emerald-500 border-2 border-white rounded-full" />
      </a>

      {/* Floating Scroll-to-Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={scrollToTop}
            className={`fixed bottom-24 ${
              lang === "ar" ? "left-22" : "right-22"
            } p-3.5 bg-[#FFFEFB] border border-[#243A2D]/20 text-[#243A2D] hover:bg-[#243A2D] hover:text-white rounded-2xl shadow-xl transition-all cursor-pointer z-40 outline-none`}
            title={lang === "ar" ? "الرجوع للأعلى" : "Scroll to Top"}
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Quick View Apartment Modal */}
      <ApartmentDetailsModal
        lang={lang}
        apartment={selectedApartment}
        onClose={() => setSelectedApartment(null)}
        onBookNow={(apt) => {
          setSelectedApartment(null);
          setBookingApartment(apt);
        }}
      />

      {/* Booking Confirmation Modal */}
      <BookingModal
        lang={lang}
        apartment={bookingApartment}
        onClose={() => setBookingApartment(null)}
      />

      {/* Privacy & Terms Legal Dialog Modal */}
      <LegalModal
        lang={lang}
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />

    </div>
  );
}

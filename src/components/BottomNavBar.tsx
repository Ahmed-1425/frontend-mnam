import React, { useState, useEffect } from "react";
import { Home, KeyRound, TrendingUp } from "lucide-react";
import { motion } from "motion/react";

interface BottomNavBarProps {
  lang: "ar" | "en";
  activeTab: "home" | "suites" | "landlords";
  setActiveTab: (tab: "home" | "suites" | "landlords") => void;
}

export default function BottomNavBar({
  lang,
  activeTab,
  setActiveTab,
}: BottomNavBarProps) {
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // If scrolling down by more than 10px -> hide
      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setVisible(false);
      } else {
        // Scrolling up -> show
        setVisible(true);
      }

      setLastScrollY(currentScrollY);

      // When user stops scrolling for 400ms -> show bar
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setVisible(true);
      }, 400);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timeoutId);
    };
  }, [lastScrollY]);

  const tabs = [
    {
      id: "home" as const,
      labelAr: "الرئيسية",
      labelEn: "Home",
      icon: Home,
    },
    {
      id: "suites" as const,
      labelAr: "تصفح الشقق",
      labelEn: "Suites",
      icon: KeyRound,
    },
    {
      id: "landlords" as const,
      labelAr: "للملاك والمستثمرين",
      labelEn: "For Owners",
      icon: TrendingUp,
    },
  ];

  return (
    <div
      className={`fixed bottom-6 left-0 right-0 z-50 flex md:hidden justify-center px-4 transition-all duration-400 ease-out ${
        visible ? "translate-y-0 opacity-100 pointer-events-auto" : "translate-y-28 opacity-0 pointer-events-none"
      }`}
    >
      <nav
        className="bg-[#FFFEFB]/85 backdrop-blur-2xl border border-[#243A2D]/20 shadow-[0_12px_40px_rgba(36,58,45,0.15)] rounded-2xl p-1.5 flex items-center justify-between gap-1 max-w-sm w-full"
        style={{ direction: lang === "ar" ? "rtl" : "ltr" }}
        id="interactive-bottom-bar"
      >
        {tabs.map((tab) => {
          const IconComponent = tab.icon;
          const isActive = activeTab === tab.id;
          const label = lang === "ar" ? tab.labelAr : tab.labelEn;

          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`relative flex-1 py-2.5 px-2 rounded-xl flex flex-col items-center justify-center gap-1 text-xs font-bold transition-all duration-300 outline-none cursor-pointer select-none overflow-hidden ${
                isActive ? "text-[#243A2D]" : "text-[#68756D] hover:text-[#203028]"
              }`}
            >
              {/* Sliding Brand Green Capsule Indicator */}
              {isActive && (
                <motion.div
                  layoutId="activeTabIndicator"
                  className="absolute inset-0 bg-[#243A2D]/10 rounded-xl -z-10 border border-[#243A2D]/20"
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
              )}

              <IconComponent
                className={`w-5 h-5 transition-transform duration-300 ${
                  isActive ? "scale-110 text-[#243A2D]" : "text-[#68756D]"
                }`}
              />

              <span className="text-[11px] font-semibold tracking-tight whitespace-nowrap">
                {label}
              </span>
            </button>
          );
        })}
      </nav>
    </div>
  );
}

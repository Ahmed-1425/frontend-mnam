# منصة منام - الموقع العام (Manam Public Website - Without Dashboard)

هذا المجلد يمثل **الموقع العام المباشر لمنصة منام للضيافة الفاخرة** بدون لوحات التحكم التشغيلية (Without Dashboard).

---

## 🌟 الميزات والمكونات الرئيسية:

- **الواجهة الرئيسية (Hero Section)**: العرض والتعريف بخدمات منام للضيافة الفاخرة (`src/components/Hero.tsx`).
- **تصفح الشقق والوحدات (Apartments Catalog)**: تصفح الشقق، الأسعار، التفاصيل، وحجز الإقامة (`src/components/ApartmentsBrowser.tsx`).
- **بوابة الملاك والمستثمرين (Landlord & Investors Portal)**: شروط الجاهزية ونموذج تقديم الطلبات (`src/components/LandlordSection.tsx`).
- **عن الشركة والأسئلة الشائعة**: (`src/components/AboutCompany.tsx` & `src/components/FaqSection.tsx`).
- **آراء النزلاء وتقييماتهم**: (`src/components/Testimonials.tsx`).
- **المساعد الذكي (Smart Chatbot)**: بوت المساعدة التفاعلي للزوار (`src/components/Chatbot.tsx`).

---

## 🚀 التشغيل والبناء المباشر:

1. **تشغيل بيئة التطوير (Dev Mode):**
   ```bash
   npm run dev
   ```

2. **بناء المشروع للإنتاج (Production Build):**
   ```bash
   npm run build
   ```

3. **النشر على Netlify (Deploy to Netlify):**
   ```bash
   npx netlify deploy --prod
   ```

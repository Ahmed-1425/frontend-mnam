import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

async function startServer() {
  const app = express();
  app.use(express.json());
  const PORT = 3000;

  // Initialize Gemini if key is present
  let ai: GoogleGenAI | null = null;
  if (process.env.GEMINI_API_KEY) {
    ai = new GoogleGenAI({
      apiKey: process.env.GEMINI_API_KEY,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        }
      }
    });
  }

  // Pre-seed some mock inquiries and bookings for the dashboard demonstration
  const inquiries: any[] = [
    {
      id: "INQ-2401",
      name: "سليمان الراجحي",
      phone: "+966 50 123 4567",
      city: "riyadh",
      unitsCount: 3,
      unitType: "apartment",
      date: new Date(Date.now() - 36 * 60 * 60 * 1000).toISOString(),
      status: "تم التواصل"
    },
    {
      id: "INQ-2402",
      name: "أمل العتيبي",
      phone: "+966 55 987 6543",
      city: "jeddah",
      unitsCount: 1,
      unitType: "villa",
      date: new Date(Date.now() - 12 * 60 * 60 * 1000).toISOString(),
      status: "قيد الدراسة"
    }
  ];

  const bookings: any[] = [
    {
      id: "RES-982711",
      unitId: "r-studio",
      unitName: "أستوديو منام النخبة - الملقا",
      guestName: "محمد الشمري",
      guestPhone: "+966 54 111 2222",
      checkIn: "2026-07-15",
      checkOut: "2026-07-18",
      guestsCount: 2,
      totalPrice: 1350,
      date: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      status: "Confirmed"
    },
    {
      id: "RES-482910",
      unitId: "j-penthouse",
      unitName: "بنتهاوس منام الملكي المطل على البحر",
      guestName: "John Doe",
      guestPhone: "+1 555 123 4567",
      checkIn: "2026-07-20",
      checkOut: "2026-07-25",
      guestsCount: 4,
      totalPrice: 9000,
      date: new Date(Date.now() - 18 * 60 * 60 * 1000).toISOString(),
      status: "Confirmed"
    }
  ];

  // API Route for Chatbot proxy
  app.post("/api/chat", async (req, res) => {
    try {
      const { message, history } = req.body;
      if (!message) {
        return res.status(400).json({ error: "Message is required" });
      }

      if (!ai) {
        // High quality informative response even if API key is missing
        return res.json({
          text: `أهلاً بك في منام! يسعدني جداً خدمتك. 

نحن في "منام" نقوم بإدارة وتشغيل الوحدات السكنية والسياحية الفاخرة بالمملكة بالكامل فندقياً وبأحدث تقنيات التسعير الديناميكي.

إذا كنت ترغب بـ:
1. **حجز شقة فاخرة**: يمكنك الانتقال إلى قسم "تصفح الشقق" واستعراض وحداتنا الفاخرة في الرياض وجدة والخبر بميزات الدخول الذكي والنظافة الفندقية الشاملة.
2. **عرض عقارك للإدارة**: تفضل بملء استمارة الملاك في قسم "شركاء النجاح" وسيقوم مستشارنا العقاري بالتواصل معك لتقديم دراسة عوائد مجانية مخصصة لرفع عوائد عقارك لضعف الإيجار التقليدي!

(ملاحظة: يمكنك التواصل معنا أيضاً على info@usemanam.com أو عبر الجوال 966538721499+)`
        });
      }

      const systemInstruction = `
You are "منام بوت" (Manam Bot), an elegant, professional, and highly hospitable AI assistant for "منام" (Manam), a premium luxury residential and tourism property management company in Saudi Arabia (Riyadh, Jeddah, Al-Khobar).

Your voice should be very warm, helpful, welcoming, premium, and professional. You should support both Arabic (primarily) and English, matching the user's language.

Key Information about Manam:
1. For Owners (الملاك):
   - We manage and operate properties as luxury hotels/furnished units.
   - We guarantee the highest monthly returns, exceeding double (x2) of traditional/long-term renting.
   - We handle everything (360-degree operational management): guest reception, daily professional hotel cleaning, and maintenance (preventative and emergency).
   - We have an instant maintenance and cleaning team.
   - Owners get an advanced, transparent Owner Dashboard (لوحة تحكم الملاك) to track bookings, occupancy rates, and detailed financial reports.
   - Elite furnishing standards: furnishing with elite 5-star hotel furnishings, linens, and accessories.
   
2. For Guests (النزلاء):
   - Luxury and hospitality with the comfort and privacy of home.
   - Locations: Riyadh (الرياض), Jeddah (جدة), Al-Khobar (الخبر) - all in premium, elite neighborhoods (like Al-Malqa, Al-Aqeeq, Al-Hamra, Ash Shati).
   - Smart self-check-in: dynamic electronic lock codes sent automatically upon booking.
   - High-speed fiber internet, daily/regular professional cleaning, premium linens, and Saudi hospitality.
   - Core units:
     - أستوديو منام النخبة - الملقا (Riyadh Luxury Studio): 450 SAR / night.
     - شقة منام التنفيذية - العقيق (Riyadh Executive 1-Bedroom): 650 SAR / night.
     - جناح منام الملكي - الحمراء (Jeddah Royal 2-Bedroom Suite): 1100 SAR / night.
     - بنتهاوس منام المطل على البحر - الشاطئ (Jeddah Sea View Penthouse): 1800 SAR / night.
     - شقة منام البوتيك - الحزام الذهبي (Khobar Boutique Apartment): 550 SAR / night.
     - شقة منام العائلية الفاخرة - كورنيش الخبر (Khobar Premium 2-Bedroom): 850 SAR / night.

3. Contact Info:
   - Head Office: Saudi Arabia, Riyadh, Al-Malqa District, King Salman Road (المملكة العربية السعودية، الرياض، حي الملقا، طريق الملك سلمان)
   - Email: info@usemanam.com
   - Phone: +966 53 872 1499

Format your responses with clean Markdown, lists, and a friendly luxury hospitality tone. Encourage owners to submit their properties using the property form, and guests to explore our real-time availability in Riyadh, Jeddah, and Al-Khobar.
`;

      const contents = [];
      if (history && Array.isArray(history)) {
        for (const turn of history) {
          contents.push({
            role: turn.role === "user" ? "user" : "model",
            parts: [{ text: turn.text }]
          });
        }
      }
      contents.push({
        role: "user",
        parts: [{ text: message }]
      });

      const response = await ai.models.generateContent({
        model: "gemini-3.5-flash",
        contents: contents,
        config: {
          systemInstruction: systemInstruction,
          temperature: 0.7,
        }
      });

      return res.json({ text: response.text });
    } catch (error: any) {
      console.error("Gemini Error:", error);
      return res.status(500).json({ error: error.message || "Something went wrong" });
    }
  });

  // API Route to submit Property Inquiry
  app.post("/api/inquiries", (req, res) => {
    const { name, phone, city, unitsCount, unitType } = req.body;
    if (!name || !phone || !city) {
      return res.status(400).json({ error: "Missing required fields" });
    }
    const newInquiry = {
      id: "INQ-" + Math.floor(1000 + Math.random() * 9000),
      name,
      phone,
      city,
      unitsCount: Number(unitsCount) || 1,
      unitType: unitType || "apartment",
      date: new Date().toISOString(),
      status: "قيد الدراسة"
    };
    inquiries.push(newInquiry);
    res.json({ success: true, inquiry: newInquiry });
  });

  app.get("/api/inquiries", (req, res) => {
    res.json(inquiries);
  });

  // API Route to submit booking
  app.post("/api/bookings", (req, res) => {
    const { unitId, unitName, guestName, guestPhone, checkIn, checkOut, guestsCount, totalPrice } = req.body;
    if (!unitId || !guestName || !guestPhone || !checkIn || !checkOut) {
      return res.status(400).json({ error: "Missing required fields" });
    }
    const newBooking = {
      id: "RES-" + Math.floor(100000 + Math.random() * 900000),
      unitId,
      unitName,
      guestName,
      guestPhone,
      checkIn,
      checkOut,
      guestsCount: Number(guestsCount) || 1,
      totalPrice: Number(totalPrice),
      date: new Date().toISOString(),
      status: "Confirmed"
    };
    bookings.push(newBooking);
    res.json({ success: true, booking: newBooking });
  });

  app.get("/api/bookings", (req, res) => {
    res.json(bookings);
  });

  // Serve static assets in production or use Vite middleware in development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();

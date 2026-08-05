import { Apartment, Testimonial } from "./types";

export const sampleApartments: Apartment[] = [
  {
    id: "r-studio",
    titleAr: "أستوديو منام النخبة - الملقا",
    titleEn: "Manam Elite Studio - Al Malqa",
    city: "riyadh",
    districtAr: "الملقا، شمال الرياض",
    districtEn: "Al Malqa, North Riyadh",
    price: 450,
    bedrooms: 1,
    bathrooms: 1,
    guests: 2,
    rating: 4.9,
    reviewsCount: 38,
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80",
    descriptionAr: "أستوديو فخم ومريح في أرقى أحياء الملقا بالرياض، مجهز بدخول ذاتي ذكي، شاشة ذكية، إنترنت سريع، وضيافة فاخرة.",
    descriptionEn: "A luxury studio in elite Al Malqa with smart self-check-in, a smart TV, fast fiber Wi-Fi, and premium amenities.",
    featuresAr: ["دخول ذاتي ذكي", "إنترنت فايبر سريع", "ركن قهوة مجهز", "شاشة 4K ذكية", "موقف خاص مغطى"],
    featuresEn: ["Smart Self-Check-in", "Fiber Wi-Fi", "Espresso Corner", "4K Smart TV", "Covered Parking"]
  },
  {
    id: "r-executive",
    titleAr: "شقة منام التنفيذية - العقيق",
    titleEn: "Manam Executive Suite - Al Aqeeq",
    city: "riyadh",
    districtAr: "العقيق، بالقرب من مركز الملك عبد الله المالي",
    districtEn: "Al Aqeeq, Close to KAFD",
    price: 650,
    bedrooms: 1,
    bathrooms: 2,
    guests: 3,
    rating: 4.85,
    reviewsCount: 42,
    image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=800&q=80",
    descriptionAr: "شقة مميزة للأعمال دقائق من مركز الملك عبدالله المالي (KAFD)، بصالة أنيقة، مرتبة فندقية، ومكتب عمل متكامل.",
    descriptionEn: "An upscale business suite minutes from KAFD, with a workspace, premium hotel bedding, and a sleek living lounge.",
    featuresAr: ["قريب من مركز KAFD", "مكتب عمل مجهز", "دخول ذاتي ذكي", "غسالة ملابس متكاملة", "ضيافة فاخرة"],
    featuresEn: ["Minutes to KAFD", "Work Desk", "Smart Check-In", "In-unit Washer", "VIP Amenities"]
  },
  {
    id: "j-royal",
    titleAr: "جناح منام الملكي - الحمراء",
    titleEn: "Manam Royal Suite - Al Hamra",
    city: "jeddah",
    districtAr: "الحمراء، بالقرب من كورنيش جدة والنافورة",
    districtEn: "Al Hamra, Near Jeddah Corniche & Fountain",
    price: 1100,
    bedrooms: 2,
    bathrooms: 2,
    guests: 5,
    rating: 4.92,
    reviewsCount: 29,
    image: "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=800&q=80",
    descriptionAr: "جناح ملكي فاخر بالحمراء بالقرب من كورنيش جدة والنافورة، بأسقف مرتفعة، بياضات 5 نجوم ومطبخ مجهز بالكامل.",
    descriptionEn: "A royal suite in Al Hamra near the fountain, featuring premium bedding, high ceilings, and a fully-equipped kitchen.",
    featuresAr: ["قريب من النافورة", "بياضات فندقية فاخرة", "مطبخ متكامل مجهز", "دخول ذكي وسريع", "حراسة أمنية 24/7"],
    featuresEn: ["Near Fountain & Sea", "Luxury Bed Linens", "Full Kitchen", "Keyless Smart Lock", "24/7 Security Desk"]
  },
  {
    id: "j-penthouse",
    titleAr: "بنتهاوس منام المطل على البحر - الشاطئ",
    titleEn: "Manam Sea View Penthouse - Ash Shati",
    city: "jeddah",
    districtAr: "الشاطئ، إطلالة بانورامية على البحر الأحمر",
    districtEn: "Ash Shati, Panoramic Red Sea View",
    price: 1800,
    bedrooms: 3,
    bathrooms: 3,
    guests: 6,
    rating: 4.97,
    reviewsCount: 15,
    image: "https://images.unsplash.com/photo-1502672023488-70e25813eb80?auto=format&fit=crop&w=800&q=80",
    descriptionAr: "بنتهاوس فاخر بحي الشاطئ بإطلالة بانورامية كاملة على البحر الأحمر، بتصميم داخلي مبهر وتراس خارجي فسيح.",
    descriptionEn: "A premium penthouse in Ash Shati with full panoramic Red Sea views, designer interiors, and a private terrace.",
    featuresAr: ["إطلالة بانورامية كاملة", "تراس خارجي فسيح", "نظام تحكم ذكي بالمنزل", "مصعد خاص مباشر", "مستلزمات فندقية 5 نجوم"],
    featuresEn: ["Full Panoramic Sea Views", "Spacious Private Terrace", "Smart Home Automation", "Private Elevator Access", "5-Star Premium Amenities"]
  },
  {
    id: "k-boutique",
    titleAr: "شقة منام البوتيك - الحزام الذهبي",
    titleEn: "Manam Boutique Apartment - Al Hezam Al Thahaby",
    city: "khobar",
    districtAr: "الحزام الذهبي، الخبر",
    districtEn: "Al Hezam Al Thahaby, Al Khobar",
    price: 550,
    bedrooms: 1,
    bathrooms: 1,
    guests: 2,
    rating: 4.78,
    reviewsCount: 24,
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80",
    descriptionAr: "شقة بوتيك بالحزام الذهبي تجمع الحداثة بالأصالة، مجهزة بتكييف مركزي، إنترنت فايبر، وشاشة ذكية لعائلتك.",
    descriptionEn: "A boutique suite in Al Hezam Al Thahaby with central AC, fiber Wi-Fi, and premium cozy interiors.",
    featuresAr: ["موقع هادئ ونخبوية", "تكييف مركزي ذكي", "دخول إلكتروني ذكي", "آلة قهوة نسبريسو", "نظافة فندقية معقمة"],
    featuresEn: ["Quiet & Prestigious", "Central Smart AC", "Keyless Digital Lock", "Nespresso Coffee Maker", "Hotel-Standard Disinfected"]
  },
  {
    id: "k-premium",
    titleAr: "شقة منام العائلية الفاخرة - كورنيش الخبر",
    titleEn: "Manam Premium Family Residence - Corniche",
    city: "khobar",
    districtAr: "كورنيش الخبر، دقيقة من البحر",
    districtEn: "Al Khobar Corniche, 1 minute to coast",
    price: 850,
    bedrooms: 2,
    bathrooms: 2,
    guests: 4,
    rating: 4.88,
    reviewsCount: 31,
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80",
    descriptionAr: "شقة عائلية فخمة على كورنيش الخبر بخطوات من البحر، غرفتين نوم وصالة عائلية واسعة لتجمعاتكم.",
    descriptionEn: "A spacious family suite on the Al Khobar Corniche, steps from the sea, featuring two bedrooms and a large lounge.",
    featuresAr: ["خطوات من كورنيش الخبر", "صالة جلوس فسيحة جداً", "دخول ذاتي ذكي وسريع", "شاشتين ذكية لعائلتك", "نظافة احترافية دورية"],
    featuresEn: ["Steps from Corniche", "Extremely Spacious Lounge", "Smart Lock Check-In", "Two Smart TVs", "Regular Professional Cleaning"]
  }
];

export const sampleTestimonials: Testimonial[] = [
  {
    id: "t1",
    nameAr: "خالد بن محمد",
    nameEn: "Khaled Bin Mohammed",
    roleAr: "مالك عقار بالرياض",
    roleEn: "Property Owner in Riyadh",
    commentAr: "منام غيرت مفهومي عن الاستثمار العقاري بالكامل. كنت أؤجر شقتي سنوياً بـ 50 ألف ريال، ومع منام وإدارتهم الفندقية الذكية والتسعير الديناميكي تجاوز عائدي الشهري الصافي حاجز الـ 110 ألف ريال سنوياً دون أي عناء صيانة أو تشغيل!",
    commentEn: "Manam completely changed my rental investment outlook. I used to lease my Riyadh apartment annually for 50k SAR, but with their hotel management and dynamic pricing, my net yield now exceeds 110k SAR a year with zero maintenance worries!",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80"
  },
  {
    id: "t2",
    nameAr: "سارة اليوسف",
    nameEn: "Sarah Al-Yousef",
    roleAr: "نزيلة متكررة - جدة",
    roleEn: "Frequent Guest - Jeddah",
    commentAr: "الشقق نظيفة بشكل يعادل بل يتفوق على فنادق الخمس نجوم! الدخول الذاتي سريع للغاية وسلس، ونظام التطهير والتعقيم الدقيق يمنحني وعائلتي طمأنينة وراحة نفسية بالغة. ضيافتهم السعودية تثلج الصدر.",
    commentEn: "The apartments are spectacularly clean, easily matching or beating 5-star hotels! Self-check-in is incredibly quick, and the rigid sanitization protocol gives my family extreme peace of mind. Exceptional local hospitality.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80"
  },
  {
    id: "t3",
    nameAr: "عبد الله الدوسري",
    nameEn: "Abdullah Al-Dossary",
    roleAr: "مالك 4 وحدات بالخبر",
    roleEn: "Owner of 4 Units in Al-Khobar",
    commentAr: "الشفافية هي أهم ميزة في منام. لوحة تحكم الملاك تعرض لي بدقة كل حجز قادم، المبالغ المستلمة، ونسب الإشغال لكل شقة لحظة بلحظة. فريق الصيانة الفوري لديهم رائع ويحافظ على الشقق كأنها جديدة تماماً.",
    commentEn: "Transparency is Manam's greatest strength. The Owner Dashboard allows me to precisely trace every guest booking, transaction details, and occupancy metrics instantly. Their maintenance team is top-notch.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80"
  }
];
export const faqsList = [
  {
    qAr: "كيف تضمن منام عائداً يتجاوز ضعف الإيجار التقليدي؟",
    qEn: "How does Manam guarantee yields exceeding double the traditional rent?",
    aAr: "عبر تشغيل عقارك بنظام الفندقة قصيرة المدى وتوظيف الذكاء الاصطناعي للتسعير الديناميكي بناءً على العرض والطلب والفعاليات والطلبات الموسيقية والرياضية المحيطة بالرياض وجدة والخبر، مما يضمن رفع العوائد بشكل قياسي مع المحافظة على العقار كأنه جديد.",
    aEn: "By operating your property on a premium short-term rental model and utilizing custom AI pricing algorithms that adapt dynamically to tourist seasons, corporate demand, and high traffic in major Saudi business centers."
  },
  {
    qAr: "هل أتحمل كمالك أي تكاليف صيانة أو نظافة دورية وعناء؟",
    qEn: "Do I have to bear any ongoing maintenance or housekeeping costs?",
    aAr: "لا، منام تتكفل بالإشراف والصيانة الفورية والوقائية والطارئة، والنظافة الفندقية اليومية الاحترافية والعميقة عبر كادرنا الخاص لضمان رضا الضيف التام وسلامة عقارك دون أي عناء تشغيلي منك مطلقاً.",
    aEn: "No, Manam fully covers all daily professional housekeeping, deep disinfections, guest relations, and on-demand maintenance through our internal staff, preserving your asset in brand-new condition."
  },
  {
    qAr: "كيف تتم عملية الدخول الذكي والسريع للوحدات؟",
    qEn: "How does the smart and fast self-check-in work?",
    aAr: "نظام الدخول لدينا رقمي بالكامل؛ يحصل الضيف على رمز دخول مخصص وذكي وصالح فقط لفترة إقامته يصله آلياً بمجرد تأكيد الحجز والدفع دون الحاجة لمقابلة أحد أو الانتظار.",
    aEn: "Our units feature smart electronic locks. Guests receive a unique, time-sensitive pin code immediately upon booking, allowing instant, independent check-in at any hour without reception delays."
  }
];

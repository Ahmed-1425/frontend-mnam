export interface Apartment {
  id: string;
  titleAr: string;
  titleEn: string;
  city: "riyadh" | "jeddah" | "khobar";
  districtAr: string;
  districtEn: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  guests: number;
  rating: number;
  reviewsCount: number;
  image: string;
  featuresAr: string[];
  featuresEn: string[];
  descriptionAr: string;
  descriptionEn: string;
  googleMapUrl?: string;
}

export interface Inquiry {
  id: string;
  name: string;
  phone: string;
  city: string;
  unitsCount: number;
  unitType: string;
  date: string;
  status: string;
}

export interface Booking {
  id: string;
  unitId: string;
  unitName: string;
  guestName: string;
  guestPhone: string;
  checkIn: string;
  checkOut: string;
  guestsCount: number;
  totalPrice: number;
  date: string;
  status: string;
}

export interface Testimonial {
  id: string;
  nameAr: string;
  nameEn: string;
  roleAr: string;
  roleEn: string;
  commentAr: string;
  commentEn: string;
  rating: number;
  avatar: string;
}

export const translationDict = {
  ar: {
    brandName: "منام",
    brandTagline: "إدارة وتشغيل الوحدات السكنية والسياحية الفاخرة",
    navHome: "الرئيسية",
    navAbout: "لماذا منام؟",
    navUnits: "تصفح الشقق",
    navLandlords: "للملاك والمستثمرين",
    navDashboard: "لوحة تحكم الملاك",
    navFaq: "الأسئلة الشائعة",
    
    heroTitle: "أعد تعريف استثمارك العقاري وسكنك الفاخر",
    heroSubtitle: "ندير عقارك السكني ونشغله فندقياً بالكامل لنضمن لك أعلى عائد شهري يتجاوز ضعف الإيجار التقليدي، دون أي عناء صيانة أو تشغيل.",
    heroActionBook: "احجز إقامتك الفاخرة",
    heroActionList: "اعرض عقارك للإدارة",
    
    statsProperties: "وحدة عقارية فاخرة",
    statsOccupancy: "متوسط نسبة الإشغال",
    statsReturns: "ضعف الإيجار التقليدي",
    statsActiveGuests: "نزيل سعيد سنوياً",
    
    aboutTitle: "في منام",
    aboutSubtitle: "ندمج الضيافة الفاخرة بذكاء التقنية لنضمن لعقاراتكم أعلى معدل إشغال وأفضل عائد استثماري دون عناء.",
    
    service1Title: "إدارة تشغيلية شاملة 360 درجة",
    service1Desc: "استقبال الضيوف، تنظيف فندقي يومي، وإشراف وصيانة متكاملة للحفاظ على جودة العقار.",
    service2Title: "فريق صيانة ونظافة فوري",
    service2Desc: "فريق دعم وصيانة متكامل متواجد على مدار الساعة لتلبية متطلبات الضيوف فورياً.",
    service3Title: "تقارير شفافة أولاً بأول",
    service3Desc: "متابعة دقيقة لنسب الإشغال والحجوزات والأرباح بشفافية تامة.",
    service4Title: "تجهيز وتأثيث بمعايير فندقية نخبوية",
    service4Desc: "نجهّز عقارك بأرقى قطع الأثاث والبياضات الفاخرة لنرتقي به إلى مستوى 5 نجوم.",

    guestTitle: "فخامة وخدمة فندقية راقية، ودفء وخصوصية البيت",
    guestSubtitle: "شقق فندقية فاخرة ومجهزة بالكامل في أرقى الأحياء. دخول ذاتي ذكي، إنترنت فايبر سريع، خدمات صيانة دورية وضيافة سعودية أصيلة.",
    
    guestFeature1Title: "نظافة وتعقيم بمعايير فندقية",
    guestFeature1Desc: "تعقيم متكامل وتغيير شامل لجميع البياضات والمستلزمات فور مغادرة كل ضيف.",
    guestFeature2Title: "دخول ذاتي ذكي وسريع",
    guestFeature2Desc: "يصلك رمز الدخول المخصص لقفل الباب الإلكتروني فور تأكيد حجزك، لتنعم بدخول مباشر دون انتظار.",
    guestFeature3Title: "أحياء حيوية ونخبوية بالقرب منك",
    guestFeature3Desc: "تقع جميع وحداتنا في مواقع مميزة قريبة من أهم مراكز الأعمال والمطاعم الفاخرة.",

    formTitle: "انضم إلى شركاء نجاح منام",
    formSubtitle: "سجل تفاصيل عقارك الآن وسيقوم مستشارنا العقاري بالتواصل معك لتقديم دراسة عوائد مجانية مخصصة لعقارك.",
    formName: "الاسم الكريم",
    formPhone: "رقم الجوال",
    formCity: "المدينة",
    formSelectCity: "اختر المدينة",
    formUnitsCount: "عدد الوحدات العقارية",
    formUnitType: "نوع الوحدة العقارية",
    formSelectType: "اختر نوع الوحدة",
    formSubmit: "إرسال وتجهيز دراسة العوائد",
    formSuccess: "تم إرسال طلبك بنجاح! سيتواصل معك مستشار منام العقاري قريباً.",
    
    unitTypeApartment: "شقة سكنية فاخرة",
    unitTypeStudio: "أستوديو فاخر",
    unitTypeVilla: "فيلا / بنتهاوس",
    
    cityRiyadh: "الرياض",
    cityJeddah: "جدة",
    cityKhobar: "الخبر",
    
    testimonialsTitle: "تقييمات النزلاء وتجاربهم",
    testimonialsSubtitle: "ماذا يقول ضيوفنا عن تجربتهم الفندقية الاستثنائية في شقق منام الفاخرة.",
    
    footerDesc: "شركة منام لإدارة وتشغيل الوحدات السكنية والسياحية الفاخرة بالمملكة. نسخر التقنية الحديثة وخبرات الضيافة العالمية لنصنع تجربة سكنية واستثمارية استثنائية.",
    footerLinks: "روابط سريعة",
    footerContact: "مكتبنا الرئيسي",
    footerNewsletter: "النشرة البريدية الاستثمارية",
    footerNewsletterDesc: "اشترك معنا للحصول على آخر التقارير العقارية وفرص الاستثمار الحصرية.",
    footerNewsletterPlaceholder: "البريد الإلكتروني",
    footerNewsletterBtn: "اشترك الآن",
    footerRights: "جميع الحقوق محفوظة لشركة منام لإدارة وتشغيل الوحدات السكنية © 2026",
    
    searchPlaceholder: "البحث عن شقة (مثال: الملقا، العقيق...)",
    allCities: "كل المدن",
    perNight: "ريال / ليلة",
    bookNow: "احجز الآن",
    viewDetails: "عرض التفاصيل",
    bedroomsCount: "غرفة نوم",
    bathroomsCount: "دورة مياه",
    guestsCount: "أشخاص",
    
    bookingModalTitle: "تأكيد حجز وحدتك السكنية",
    bookingCheckIn: "تاريخ الدخول",
    bookingCheckOut: "تاريخ المغادرة",
    bookingGuests: "عدد النزلاء",
    bookingTotalDays: "إجمالي الليالي",
    bookingPricePerNight: "سعر الليلة الواحدة",
    bookingTax: "الرسوم والخدمات الفندقية",
    bookingTotal: "المبلغ الإجمالي",
    bookingSubmit: "تأكيد الحجز والدفع الذكي",
    bookingSuccess: "تهانينا! تم تأكيد حجزك بنجاح. سنرسل رمز الدخول الذكي وتفاصيل الوصول إلى جوالك قريباً.",
    
    dbTotalRevenue: "إجمالي الأرباح المتوقعة",
    dbOccupancyRate: "متوسط نسبة الإشغال",
    dbActiveBookings: "الحجوزات النشطة",
    dbAverageDailyRate: "متوسط سعر الليلة",
    dbInquiriesList: "طلبات الملاك المستلمة",
    dbBookingsList: "جدول حجوزات النزلاء",
    dbOwnerPortalTitle: "لوحة تحكم ملاك عقارات منام",
    dbOwnerPortalSubtitle: "بوابة الملاك التفاعلية لمتابعة عوائد ونسب تشغيل عقارك بذكاء وشفافية كاملة على مدار الساعة.",
    dbStatusPending: "قيد الدراسة",
    dbStatusApproved: "تم التواصل",
    
    faqTitle: "الأسئلة الشائعة",
    faqSubtitle: "كل ما تود معرفته عن إدارة منام لعقارك أو عن إقامتك معنا.",
    faqQ1: "كيف تضمن منام عائداً يتجاوز ضعف الإيجار التقليدي؟",
    faqA1: "عبر تشغيل عقارك بنظام الفندقة قصيرة المدى وتوظيف الذكاء الاصطناعي للتسعير الديناميكي بناءً على العرض والطلب والفعاليات المحيطة بالرياض وجدة والخبر، مما يرفع العوائد بشكل قياسي مع الحفاظ على العقار.",
    faqQ2: "هل أتحمل كمالك أي تكاليف صيانة أو نظافة دورية؟",
    faqA2: "لا، منام تتكفل بالإشراف والصيانة الفورية الوقائية والطارئة، والنظافة الفندقية اليومية عبر كادرنا الخاص لضمان رضا الضيف التام وسلامة عقارك دون أي عناء تشغيلي منك.",
    faqQ3: "كيف تتم عملية الدخول الذكي للوحدات؟",
    faqA3: "نظام الدخول لدينا رقمي بالكامل؛ يحصل الضيف على رمز دخول مخصص وذكي وصالح فقط لفترة إقامته يصله آلياً بمجرد تأكيد الحجز والدفع دون الحاجة لمقابلة أحد.",
    
    chatbotWelcome: "مرحباً بك في منام للضيافة الفاخرة! أنا مساعدك الذكي. كيف يمكنني مساعدتك اليوم؟ يمكنك سؤالي عن حجز الشقق، أو كيفية إدارة عقارك للملاك والمستثمرين.",
    chatbotInputPlaceholder: "اكتب رسالتك هنا..."
  },
  en: {
    brandName: "Manam",
    brandTagline: "Luxury Residential & Tourism Units Management",
    navHome: "Home",
    navAbout: "Why Manam?",
    navUnits: "Browse Apartments",
    navLandlords: "For Owners & Investors",
    navDashboard: "Owner Dashboard",
    navFaq: "FAQ",
    
    heroTitle: "Redefine Your Real Estate Investment & Luxury Stay",
    heroSubtitle: "We manage and operate your property to guarantee you double traditional rent, with zero operational hassle.",
    heroActionBook: "Book Luxury Stay",
    heroActionList: "List Your Property",
    
    statsProperties: "Luxury Units Managed",
    statsOccupancy: "Average Occupancy Rate",
    statsReturns: "Double Traditional Rent",
    statsActiveGuests: "Happy Guests Annually",
    
    aboutTitle: "In Manam",
    aboutSubtitle: "We combine luxury hospitality with smart tech to ensure maximum occupancy and the best returns.",
    
    service1Title: "360-Degree Management",
    service1Desc: "Guest reception, daily premium cleaning, and full upkeep to preserve your asset.",
    service2Title: "On-Demand Care Team",
    service2Desc: "Dedicated 24/7 team ready for instant cleaning and support.",
    service3Title: "Transparent Reports",
    service3Desc: "Track occupancy rates and earnings with absolute clarity.",
    service4Title: "Premium 5-Star Furnishing",
    service4Desc: "We furnish your unit to match 5-star standard aesthetics.",

    guestTitle: "Boutique Luxury & Privacy of Home",
    guestSubtitle: "Fully equipped luxury hotel apartments in premium neighborhoods. Smart self-check-in, fast Wi-Fi, and authentic hospitality.",
    
    guestFeature1Title: "Hotel-Standard Housekeeping",
    guestFeature1Desc: "Complete sanitization and fresh linens change after every guest departure.",
    guestFeature2Title: "Instant Smart Self-Check-In",
    guestFeature2Desc: "An electronic lock code sent upon booking for direct access without delays.",
    guestFeature3Title: "Prestigious Neighborhoods",
    guestFeature3Desc: "Suites located in strategic prime districts near business and dining hubs.",

    formTitle: "Join Manam's Partners of Success",
    formSubtitle: "Submit your property details now and our real estate consultant will contact you to provide a free tailored rental yield study.",
    formName: "Full Name",
    formPhone: "Mobile Number",
    formCity: "City",
    formSelectCity: "Select City",
    formUnitsCount: "Number of Real Estate Units",
    formUnitType: "Property Type",
    formSelectType: "Select Property Type",
    formSubmit: "Submit & Prepare Yield Study",
    formSuccess: "Your inquiry has been submitted successfully! A Manam real estate consultant will contact you shortly.",
    
    unitTypeApartment: "Luxury Apartment",
    unitTypeStudio: "Premium Studio",
    unitTypeVilla: "Villa / Penthouse",
    
    cityRiyadh: "Riyadh",
    cityJeddah: "Jeddah",
    cityKhobar: "Al-Khobar",
    
    testimonialsTitle: "Guest Testimonials",
    testimonialsSubtitle: "What our happy guests say about their exceptional hotel-standard experience at Manam luxury apartments.",
    
    footerDesc: "Manam Company for managing and operating luxury residential and tourism units in the Kingdom. We leverage modern technology and international hospitality expertise to craft exceptional residential and investment experiences.",
    footerLinks: "Quick Links",
    footerContact: "Head Office",
    footerNewsletter: "Investment Newsletter",
    footerNewsletterDesc: "Subscribe to receive our latest real estate market reports and exclusive investment opportunities.",
    footerNewsletterPlaceholder: "Your email address",
    footerNewsletterBtn: "Subscribe Now",
    footerRights: "All Rights Reserved to Manam Luxury Hospitality Units Management © 2026",
    
    searchPlaceholder: "Search apartments (e.g. Al Malqa, Al Aqeeq...)",
    allCities: "All Cities",
    perNight: "SAR / Night",
    bookNow: "Book Now",
    viewDetails: "Details",
    bedroomsCount: "Bedrooms",
    bathroomsCount: "Bathrooms",
    guestsCount: "Guests",
    
    bookingModalTitle: "Confirm Your Luxury Stay Booking",
    bookingCheckIn: "Check-In Date",
    bookingCheckOut: "Check-Out Date",
    bookingGuests: "Number of Guests",
    bookingTotalDays: "Total Nights",
    bookingPricePerNight: "Price Per Night",
    bookingTax: "Hotel Service Fees & Taxes",
    bookingTotal: "Total Amount",
    bookingSubmit: "Confirm & Secure Pay",
    bookingSuccess: "Congratulations! Your booking is successfully confirmed. We will send the smart access code and check-in details to your phone soon.",
    
    dbTotalRevenue: "Expected Total Earnings",
    dbOccupancyRate: "Avg Occupancy Rate",
    dbActiveBookings: "Active Bookings",
    dbAverageDailyRate: "Average Daily Rate",
    dbInquiriesList: "Landlord Inquiries Received",
    dbBookingsList: "Guest Reservation Schedule",
    dbOwnerPortalTitle: "Manam Landlord Dashboard",
    dbOwnerPortalSubtitle: "Your interactive portal to monitor rental returns, bookings, and occupancy in real-time with total transparency.",
    dbStatusPending: "Under Study",
    dbStatusApproved: "Contacted",
    
    faqTitle: "Frequently Asked Questions",
    faqSubtitle: "Everything you need to know about Manam managing your property or your stay with us.",
    faqQ1: "How does Manam guarantee more than double the traditional rent?",
    faqA1: "By operating your property on a premium short-term rental model and utilizing custom AI pricing algorithms that adapt dynamically to tourist seasons, conferences, and high demand in Saudi business centers.",
    faqQ2: "Do I have to pay any ongoing cleaning or maintenance fees?",
    faqA2: "No, Manam fully covers all daily professional housekeeping, laundry, and on-demand maintenance through our internal staff, preserving your asset in brand-new condition.",
    faqQ3: "How does self-check-in work?",
    faqA3: "Our units feature smart electronic locks. Guests receive a unique time-sensitive pin code immediately upon booking, allowing instant, independent check-in at any time.",
    
    chatbotWelcome: "Welcome to Manam Luxury Hospitality! I am your AI assistant. How can I help you today? Ask me about booking a suite, or how we manage properties for owners and investors.",
    chatbotInputPlaceholder: "Type your message..."
  }
};

// ================= GLOBAL ELEMENTS =================
const themeToggle = document.getElementById("themeToggle");
const langToggle = document.getElementById("langToggle");
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

// ================= THEME SYSTEM =================
function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
  if (themeToggle) {
    themeToggle.textContent = theme === "dark" ? "☀️" : "🌙";
  }
}

const savedTheme = localStorage.getItem("theme") || "light";
applyTheme(savedTheme);

themeToggle?.addEventListener("click", () => {
  const currentTheme = document.documentElement.getAttribute("data-theme");
  const newTheme = currentTheme === "dark" ? "light" : "dark";
  applyTheme(newTheme);
});

// ================= LANGUAGE SYSTEM =================
let currentLang = localStorage.getItem("lang") || "en";

const translations = {
  en: {
    home: "Home",
    services: "Services",
    pricing: "Pricing",
    testimonials: "Testimonials",
    contact: "Contact",
    hero_title: "Building Digital Solutions for the Future",
    hero_desc: "We help startups and businesses grow with modern, scalable, and beautiful digital products.",
    get_started: "Get Started",
    view_services: "View Services",
    features_title: "Why Choose NovaTech?",
    feature_fast: "Fast Delivery",
    feature_fast_desc: "We deliver high-quality solutions in record time.",
    feature_scalable: "Scalable Solutions",
    feature_scalable_desc: "Our systems grow with your business.",
    feature_innovative: "Innovative Ideas",
    feature_innovative_desc: "We turn ideas into powerful digital products.",
    feature_support: "Dedicated Support",
    feature_support_desc: "We support you at every step.",
    feature_data: "Data-Driven Approach",
    feature_data_desc: "We use data to optimize performance and results.",
    stat_projects: "Projects Completed",
    stat_clients: "Happy Clients",
    stat_years: "Years of Experience",
    stat_support: "24/7 Support",
    testimonials_title: "What Our Clients Say",
    testimonial_1_text: "“NovaTech helped us launch our product in record time. Highly recommended!”",
    testimonial_1_author: "— Sarah Johnson, Startup Founder",
    testimonial_2_text: "“Professional team, excellent communication, and outstanding results.”",
    testimonial_2_author: "— Michael Lee, CEO",
    testimonial_3_text: "“They transformed our ideas into a real product we’re proud of.”",
    testimonial_3_author: "— Amina Hassan, Product Manager",
    cta_title: "Ready to build your next digital product?",
    cta_desc: "Let’s work together to bring your ideas to life.",
    cta_button: "Contact Us",
    footer_rights: "All rights reserved.",
    services_title: "Our Services",
    services_desc: "Discover our complete range of digital services tailored to your business needs.",
    filter_all: "All",
    filter_web: "Web",
    filter_mobile: "Mobile",
    filter_design: "Design",
    filter_cloud: "Cloud",
    filter_security: "Security",
    search_services: "Search services...",
    sort: "Sort",
    sort_name: "Name",
    sort_popular: "Most Popular",
    favorites_title: "❤️ Your Favorite Services",
    faq_title: "❓ Frequently Asked Questions",
    request_title: "📩 Request a Service",
    form_name: "Name",
    form_email: "Email",
    form_service: "Select Service",
    form_budget: "Estimated Budget ($)",
    form_details: "Project Details",
    form_submit: "Submit Request",
    select_service: "Select a service",
    no_favorites: "No favorite services yet.",
    toast_added: "Added to favorites ❤️",
    toast_removed: "Removed from favorites",
    toast_rating: "You rated this service {value} stars ⭐",
    toast_fill_all: "Please fill in all fields.",
    toast_request_sent: "Your request has been submitted successfully! 🚀",
    request_service: "Request this service",
    requests: "requests",
    faq_q1: "How long does a project take?",
    faq_a1: "Project duration depends on complexity, but usually ranges from 2 to 12 weeks.",
    faq_q2: "Do you offer ongoing support?",
    faq_a2: "Yes, we provide maintenance and support packages for all services.",
    faq_q3: "Can I request a custom solution?",
    faq_a3: "Absolutely! We specialize in building tailored solutions for unique business needs.",
    faq_q4: "What technologies do you use?",
    faq_a4: "We use modern technologies such as React, Vue, Node.js, Flutter, and cloud platforms.",
    service_web: "Web Development",
    service_web_desc: "Modern and high-performance websites.",
    service_web_details: "We build fast, secure, and scalable websites using the latest technologies.",
    service_mobile: "Mobile App Development",
    service_mobile_desc: "Native and cross-platform mobile apps.",
    service_mobile_details: "We design and develop iOS and Android apps with excellent user experience.",
    service_design: "UI/UX Design",
    service_design_desc: "User-centered and modern designs.",
    service_design_details: "We focus on usability, accessibility, and aesthetics to improve user satisfaction.",
    service_cloud: "Cloud Solutions",
    service_cloud_desc: "Secure and scalable cloud systems.",
    service_cloud_details: "We migrate, manage, and optimize your infrastructure on the cloud.",
    service_security: "Cyber Security",
    service_security_desc: "Advanced protection for your business.",
    service_security_details: "We provide security audits, monitoring, and protection from cyber threats."
  },

  ar: {
    home: "الرئيسية",
    services: "الخدمات",
    pricing: "الأسعار",
    testimonials: "آراء العملاء",
    contact: "تواصل معنا",
    hero_title: "نبني حلولًا رقمية للمستقبل",
    hero_desc: "نساعد الشركات الناشئة والأعمال على النمو بمنتجات رقمية حديثة وقابلة للتوسع وجميلة التصميم.",
    get_started: "ابدأ الآن",
    view_services: "عرض الخدمات",
    features_title: "لماذا تختار NovaTech؟",
    feature_fast: "تسليم سريع",
    feature_fast_desc: "نقدم حلولًا عالية الجودة في وقت قياسي.",
    feature_scalable: "حلول قابلة للتوسع",
    feature_scalable_desc: "أنظمتنا تنمو مع عملك.",
    feature_innovative: "أفكار مبتكرة",
    feature_innovative_desc: "نحوّل الأفكار إلى منتجات رقمية قوية.",
    feature_support: "دعم مخصص",
    feature_support_desc: "ندعمك في كل خطوة.",
    feature_data: "نهج قائم على البيانات",
    feature_data_desc: "نستخدم البيانات لتحسين الأداء والنتائج.",
    stat_projects: "مشروعًا منجزًا",
    stat_clients: "عملاء سعداء",
    stat_years: "سنوات خبرة",
    stat_support: "دعم على مدار الساعة",
    testimonials_title: "ماذا يقول عملاؤنا",
    testimonial_1_text: "«ساعدتنا NovaTech على إطلاق منتجنا في وقت قياسي. أنصح بها بشدة!»",
    testimonial_1_author: "— سارة جونسون، مؤسسة شركة ناشئة",
    testimonial_2_text: "«فريق محترف، تواصل ممتاز، ونتائج مذهلة.»",
    testimonial_2_author: "— مايكل لي، المدير التنفيذي",
    testimonial_3_text: "«حوّلوا أفكارنا إلى منتج حقيقي نفخر به.»",
    testimonial_3_author: "— أمينة حسن، مديرة منتجات",
    cta_title: "هل أنت مستعد لبناء منتجك الرقمي القادم؟",
    cta_desc: "دعينا نعمل معًا لتحويل أفكارك إلى واقع.",
    cta_button: "تواصل معنا",
    footer_rights: "جميع الحقوق محفوظة.",
    services_title: "خدماتنا",
    services_desc: "اكتشف مجموعتنا الكاملة من الخدمات الرقمية المصممة لتناسب احتياجات عملك.",
    filter_all: "الكل",
    filter_web: "ويب",
    filter_mobile: "تطبيقات",
    filter_design: "تصميم",
    filter_cloud: "سحابة",
    filter_security: "أمن",
    search_services: "ابحث في الخدمات...",
    sort: "ترتيب",
    sort_name: "الاسم",
    sort_popular: "الأكثر شيوعًا",
    favorites_title: "❤️ خدماتك المفضلة",
    faq_title: "❓ الأسئلة الشائعة",
    request_title: "📩 طلب خدمة",
    form_name: "الاسم",
    form_email: "البريد الإلكتروني",
    form_service: "اختر الخدمة",
    form_budget: "الميزانية المتوقعة ($)",
    form_details: "تفاصيل المشروع",
    form_submit: "إرسال الطلب",
    select_service: "اختر خدمة",
    no_favorites: "لا توجد خدمات مفضلة بعد.",
    toast_added: "تمت الإضافة إلى المفضلة ❤️",
    toast_removed: "تمت الإزالة من المفضلة",
    toast_rating: "قمت بتقييم الخدمة {value} نجوم ⭐",
    toast_fill_all: "يرجى ملء جميع الحقول.",
    toast_request_sent: "تم إرسال طلبك بنجاح! 🚀",
    request_service: "اطلب هذه الخدمة",
    requests: "طلبات",
    faq_q1: "كم يستغرق تنفيذ المشروع؟",
    faq_a1: "مدة التنفيذ تعتمد على التعقيد، وغالبًا تتراوح بين أسبوعين إلى 12 أسبوعًا.",
    faq_q2: "هل تقدمون دعمًا مستمرًا؟",
    faq_a2: "نعم، نوفر باقات صيانة ودعم لجميع الخدمات.",
    faq_q3: "هل يمكنني طلب حل مخصص؟",
    faq_a3: "بالتأكيد! نحن متخصصون في بناء حلول مخصصة لاحتياجات الأعمال الفريدة.",
    faq_q4: "ما هي التقنيات التي تستخدمونها؟",
    faq_a4: "نستخدم تقنيات حديثة مثل React وVue وNode.js وFlutter ومنصات الحوسبة السحابية.",
    service_web: "تطوير مواقع الويب",
    service_web_desc: "مواقع حديثة وعالية الأداء.",
    service_web_details: "نبني مواقع سريعة وآمنة وقابلة للتوسع باستخدام أحدث التقنيات.",
    service_mobile: "تطوير تطبيقات الهاتف",
    service_mobile_desc: "تطبيقات أصلية ومتعددة المنصات.",
    service_mobile_details: "نصمم ونطور تطبيقات iOS وAndroid بتجربة مستخدم ممتازة.",
    service_design: "تصميم واجهات وتجربة المستخدم",
    service_design_desc: "تصاميم حديثة تتمحور حول المستخدم.",
    service_design_details: "نركز على سهولة الاستخدام، وإمكانية الوصول، والجماليات لتحسين رضا المستخدم.",
    service_cloud: "الحلول السحابية",
    service_cloud_desc: "أنظمة سحابية آمنة وقابلة للتوسع.",
    service_cloud_details: "نقوم بترحيل وإدارة وتحسين بنيتك التحتية على السحابة.",
    service_security: "الأمن السيبراني",
    service_security_desc: "حماية متقدمة لأعمالك.",
    service_security_details: "نوفر تدقيقًا أمنيًا ومراقبة وحماية من التهديدات السيبرانية."
  }
};

function applyTranslations() {
  const dict = translations[currentLang];

  document.documentElement.lang = currentLang;
  document.documentElement.dir = currentLang === "ar" ? "rtl" : "ltr";
  localStorage.setItem("lang", currentLang);

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) el.textContent = dict[key];
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (dict[key]) el.placeholder = dict[key];
  });

  if (langToggle) langToggle.textContent = currentLang === "ar" ? "EN" : "AR";
}

applyTranslations();

langToggle?.addEventListener("click", () => {
  currentLang = currentLang === "ar" ? "en" : "ar";
  applyTranslations();
  document.dispatchEvent(new Event("languageChanged"));
});

// ================= MOBILE MENU =================
menuToggle?.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

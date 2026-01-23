// ================== THEME TOGGLE ==================
const themeToggle = document.getElementById("theme-toggle");

function applyTheme(theme) {
  if (theme === "dark") {
    document.body.classList.add("dark");
    if (themeToggle) themeToggle.textContent = "☀️";
  } else {
    document.body.classList.remove("dark");
    if (themeToggle) themeToggle.textContent = "🌙";
  }
}

const savedTheme = localStorage.getItem("theme") || "light";
applyTheme(savedTheme);

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    const currentTheme = document.body.classList.contains("dark") ? "dark" : "light";
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    localStorage.setItem("theme", newTheme);
    applyTheme(newTheme);
  });
}

// ================== LANGUAGE TOGGLE ==================
const langToggle = document.getElementById("lang-toggle");

const translations = {
  en: {
    nav_home: "Home",
    nav_services: "Services",
    nav_pricing: "Pricing",
    nav_testimonials: "Testimonials",
    nav_contact: "Contact",

    hero_title: "Building Digital Solutions for the Future",
    hero_desc: "We help startups and businesses grow with modern, scalable, and beautiful digital products.",
    get_started: "Get Started",
    view_services: "View Services",

    services_title: "Our Services",
    service_web: "Web Development",
    service_web_desc: "High-quality, responsive websites built with modern technologies.",
    service_mobile: "Mobile App Development",
    service_mobile_desc: "Powerful mobile apps for iOS and Android platforms.",
    service_uiux: "UI/UX Design",
    service_uiux_desc: "Beautiful, user-friendly designs that convert and engage.",
    service_cloud: "Cloud Solutions",
    service_cloud_desc: "Secure, scalable, and cost-effective cloud infrastructure.",
    service_security: "Cyber Security",
    service_security_desc: "Protect your systems with advanced security solutions.",

    features_title: "Why Choose NovaTech?",
    feature_fast: "Fast Delivery",
    feature_fast_desc: "We deliver projects quickly without compromising quality.",
    feature_scalable: "Scalable Solutions",
    feature_scalable_desc: "Our solutions grow with your business needs.",
    feature_innovative: "Innovative Ideas",
    feature_innovative_desc: "We bring fresh, creative ideas to every project.",
    feature_support: "Dedicated Support",
    feature_support_desc: "Our team is always ready to support you.",
    feature_data: "Data-Driven Approach",
    feature_data_desc: "We make decisions based on data and real results.",

    testimonials_title: "What Our Clients Say",
    testimonial_1: "NovaTech helped us launch our product in record time. Highly recommended!",
    testimonial_2: "Professional team with excellent communication and results.",
    testimonial_3: "Our website traffic and conversions increased significantly.",
    view_testimonials: "View All Testimonials",

    cta_title: "Ready to Start Your Project?",
    cta_desc: "Let’s build something amazing together.",
    contact_cta: "Contact Us",

    pricing_title: "Pricing Plans",
    pricing_desc: "Choose the plan that fits your business needs.",
    plan_starter: "Starter",
    plan_professional: "Professional",
    plan_enterprise: "Enterprise",
    choose_plan: "Choose Plan",
    most_popular: "Most Popular",

    faq_title: "Frequently Asked Questions",

    contact_title: "Contact Us",
    contact_desc: "We would love to hear from you. Let’s work together!",
    contact_name: "Full Name",
    contact_email: "Email Address",
    contact_message: "Your Message",
    contact_send: "Send Message"
  },

  ar: {
    nav_home: "الرئيسية",
    nav_services: "الخدمات",
    nav_pricing: "الأسعار",
    nav_testimonials: "آراء العملاء",
    nav_contact: "تواصل معنا",

    hero_title: "نبني حلولًا رقمية للمستقبل",
    hero_desc: "نساعد الشركات الناشئة والأعمال على النمو من خلال منتجات رقمية حديثة وقابلة للتوسع وجميلة.",
    get_started: "ابدأ الآن",
    view_services: "عرض الخدمات",

    services_title: "خدماتنا",
    service_web: "تطوير المواقع",
    service_web_desc: "مواقع عالية الجودة ومتجاوبة باستخدام أحدث التقنيات.",
    service_mobile: "تطوير تطبيقات الجوال",
    service_mobile_desc: "تطبيقات قوية لأنظمة iOS و Android.",
    service_uiux: "تصميم واجهات وتجربة المستخدم",
    service_uiux_desc: "تصاميم جميلة وسهلة الاستخدام تزيد من التفاعل.",
    service_cloud: "الحلول السحابية",
    service_cloud_desc: "بنية سحابية آمنة وقابلة للتوسع وفعالة من حيث التكلفة.",
    service_security: "الأمن السيبراني",
    service_security_desc: "حماية أنظمتك وبياناتك بأحدث الحلول الأمنية.",

    features_title: "لماذا تختار NovaTech؟",
    feature_fast: "تسليم سريع",
    feature_fast_desc: "نسلم المشاريع بسرعة دون المساس بالجودة.",
    feature_scalable: "حلول قابلة للتوسع",
    feature_scalable_desc: "حلولنا تنمو مع نمو أعمالك.",
    feature_innovative: "أفكار مبتكرة",
    feature_innovative_desc: "نقدم أفكارًا إبداعية جديدة لكل مشروع.",
    feature_support: "دعم مخصص",
    feature_support_desc: "فريقنا دائمًا جاهز لدعمك.",
    feature_data: "نهج قائم على البيانات",
    feature_data_desc: "نتخذ قرارات مبنية على البيانات والنتائج.",

    testimonials_title: "ماذا يقول عملاؤنا",
    testimonial_1: "ساعدتنا NovaTech في إطلاق منتجنا في وقت قياسي. أنصح بها بشدة!",
    testimonial_2: "فريق محترف بتواصل ممتاز ونتائج رائعة.",
    testimonial_3: "زاد عدد زيارات موقعنا وتحويلاتنا بشكل ملحوظ.",
    view_testimonials: "عرض جميع الآراء",

    cta_title: "هل أنت مستعد لبدء مشروعك؟",
    cta_desc: "لنقم ببناء شيء رائع معًا.",
    contact_cta: "تواصل معنا",

    pricing_title: "خطط الأسعار",
    pricing_desc: "اختر الخطة التي تناسب احتياجات عملك.",
    plan_starter: "الباقة المبدئية",
    plan_professional: "الباقة الاحترافية",
    plan_enterprise: "باقة الشركات",
    choose_plan: "اختر الخطة",
    most_popular: "الأكثر شيوعًا",

    faq_title: "الأسئلة الشائعة",

    contact_title: "تواصل معنا",
    contact_desc: "يسعدنا التواصل معك. لنعمل معًا!",
    contact_name: "الاسم الكامل",
    contact_email: "البريد الإلكتروني",
    contact_message: "رسالتك",
    contact_send: "إرسال الرسالة"
  }
};

function applyLanguage(lang) {
  document.documentElement.lang = lang;
  document.body.dir = lang === "ar" ? "rtl" : "ltr";

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  if (langToggle) {
    langToggle.textContent = lang === "ar" ? "EN" : "AR";
  }
}

const savedLang = localStorage.getItem("lang") || "en";
applyLanguage(savedLang);

if (langToggle) {
  langToggle.addEventListener("click", () => {
    const currentLang = localStorage.getItem("lang") || "en";
    const newLang = currentLang === "en" ? "ar" : "en";
    localStorage.setItem("lang", newLang);
    applyLanguage(newLang);
  });
}

// ================== MOBILE MENU ==================
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle) {
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });
}

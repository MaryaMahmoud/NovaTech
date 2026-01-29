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
    service_security_details: "We provide security audits, monitoring, and protection from cyber threats.",
  pricing_title: "Our Pricing Plans",
pricing_desc: "Choose the plan that fits your business needs and budget.",
pricing_cta_title: "Not sure which plan is right for you?",
pricing_cta_desc: "Contact us and we’ll help you choose the best solution.",
pricing_cta_btn: "Contact Us",

plan_basic: "Basic",
plan_basic_desc: "Perfect for small projects and startups.",
plan_basic_f1: "Landing page or simple website",
plan_basic_f2: "Responsive design",
plan_basic_f3: "Basic SEO setup",

plan_standard: "Standard",
plan_standard_desc: "Ideal for growing businesses.",
plan_standard_f1: "Multi-page website",
plan_standard_f2: "Responsive & modern UI",
plan_standard_f3: "SEO optimization",
plan_standard_f4: "Contact form integration",

plan_premium: "Premium",
plan_premium_desc: "Best for large and complex projects.",
plan_premium_f1: "Custom web or mobile app",
plan_premium_f2: "Advanced UI/UX design",
plan_premium_f3: "API integration",
plan_premium_f4: "Performance optimization",
plan_premium_f5: "Ongoing support",

pricing_choose: "Choose Plan",
testimonials_title: "What Our Clients Say",
testimonials_desc: "Real feedback from businesses we’ve helped grow.",
stats_projects: "Completed Projects",
stats_clients: "Happy Clients",
stats_satisfaction: "Client Satisfaction",
stats_rating: "Average Rating",

featured_title: "Client Success Story",
featured_quote: "NovaTech transformed our digital presence completely. Their team delivered beyond our expectations.",
featured_name: "Sarah Johnson",
featured_role: "CEO, Bright Solutions",

t1_name: "Ahmed Hassan",
t1_role: "Founder, TechStart",
t1_text: "NovaTech built our platform from scratch and delivered an outstanding result. Highly professional team!",

t2_name: "Lina Omar",
t2_role: "Marketing Manager, BloomCo",
t2_text: "Our website performance and design improved dramatically. We saw immediate growth after launch.",

t3_name: "David Miller",
t3_role: "CTO, CloudWave",
t3_text: "They handled complex cloud infrastructure seamlessly. Excellent communication and support.",

t4_name: "Fatima Noor",
t4_role: "Owner, Noor Boutique",
t4_text: "The e-commerce store they built for us increased our sales by over 40%. Amazing work!",

t5_name: "Omar Khaled",
t5_role: "Product Manager, NovaApps",
t5_text: "Working with NovaTech was smooth and efficient. The final product exceeded our expectations.",

t6_name: "Emily Chen",
t6_role: "Startup Founder",
t6_text: "From idea to launch, they guided us through every step with professionalism and creativity.",

case_title: "Case Studies",
case1_title: "E-commerce Growth",
case1_desc: "Helped an online store increase sales by 60% through UX redesign and performance optimization.",
case2_title: "Mobile App Launch",
case2_desc: "Developed a scalable mobile app used by over 100,000 users worldwide.",
case3_title: "Cloud Migration",
case3_desc: "Migrated enterprise systems to the cloud, improving security and reducing costs.",

testimonials_cta_title: "Ready to become our next success story?",
testimonials_cta_desc: "Let’s build something amazing together.",
testimonials_cta_btn: "Start Your Project",
contact_title: "Contact Us",
contact_desc: "We’d love to hear from you. Reach out to us anytime.",
contact_location_title: "Our Location",
contact_location_desc: "Cairo, Egypt",
contact_email_title: "Email Address",
contact_email_desc: "info@novatech.com",
contact_phone_title: "Phone Number",
contact_phone_desc: "+20 123 456 7890",
contact_hours_title: "Working Hours",
contact_hours_desc: "Sunday - Thursday: 9 AM - 6 PM",

contact_form_title: "Send Us a Message",
contact_form_desc: "Fill out the form below and we’ll get back to you as soon as possible.",
form_subject: "Subject",
form_message: "Message",

contact_testimonials_title: "What Our Clients Say",
contact_testimonials_desc: "Real feedback from people who worked with us.",
add_review_title: "Add Your Review",
review_name_placeholder: "Your Name",
review_text_placeholder: "Your Review",
review_submit: "Submit Review",

map_title: "Our Location on the Map",
map_desc: "Map integration coming soon."


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
    service_security_details: "نوفر تدقيقًا أمنيًا ومراقبة وحماية من التهديدات السيبرانية.",
  pricing_title: "خطط الأسعار لدينا",
pricing_desc: "اختر الخطة التي تناسب احتياجات عملك وميزانيتك.",
pricing_cta_title: "غير متأكد أي خطة تناسبك؟",
pricing_cta_desc: "تواصل معنا وسنساعدك في اختيار الحل الأنسب.",
pricing_cta_btn: "تواصل معنا",

plan_basic: "الأساسية",
plan_basic_desc: "مثالية للمشاريع الصغيرة والشركات الناشئة.",
plan_basic_f1: "صفحة هبوط أو موقع بسيط",
plan_basic_f2: "تصميم متجاوب",
plan_basic_f3: "إعداد SEO أساسي",

plan_standard: "القياسية",
plan_standard_desc: "مناسبة للشركات المتوسطة والمتنامية.",
plan_standard_f1: "موقع متعدد الصفحات",
plan_standard_f2: "تصميم حديث ومتجاوب",
plan_standard_f3: "تحسين محركات البحث",
plan_standard_f4: "دمج نموذج تواصل",

plan_premium: "الاحترافية",
plan_premium_desc: "الأفضل للمشاريع الكبيرة والمعقدة.",
plan_premium_f1: "تطبيق ويب أو موبايل مخصص",
plan_premium_f2: "تصميم UI/UX متقدم",
plan_premium_f3: "دمج واجهات برمجية",
plan_premium_f4: "تحسين الأداء",
plan_premium_f5: "دعم مستمر",

pricing_choose: "اختر الخطة",
testimonials_title: "ماذا يقول عملاؤنا",
testimonials_desc: "آراء حقيقية من شركات ساعدناها على النمو.",
stats_projects: "المشاريع المنجزة",
stats_clients: "عملاء سعداء",
stats_satisfaction: "رضا العملاء",
stats_rating: "متوسط التقييم",

featured_title: "قصة نجاح عميل",
featured_quote: "غيرت NovaTech حضورنا الرقمي بالكامل. فريقهم قدم أكثر مما توقعنا.",
featured_name: "سارة جونسون",
featured_role: "المديرة التنفيذية، Bright Solutions",

t1_name: "أحمد حسن",
t1_role: "مؤسس، TechStart",
t1_text: "قامت NovaTech ببناء منصتنا من الصفر وقدمت نتيجة رائعة. فريق محترف جدًا!",

t2_name: "لينا عمر",
t2_role: "مديرة تسويق، BloomCo",
t2_text: "تحسن أداء وتصميم موقعنا بشكل كبير، وشهدنا نموًا فوريًا بعد الإطلاق.",

t3_name: "ديفيد ميلر",
t3_role: "المدير التقني، CloudWave",
t3_text: "تعاملوا مع بنية سحابية معقدة بسلاسة تامة. تواصل ودعم ممتاز.",

t4_name: "فاطمة نور",
t4_role: "مالكة، Noor Boutique",
t4_text: "المتجر الإلكتروني الذي بنوه لنا زاد مبيعاتنا بأكثر من 40%. عمل مذهل!",

t5_name: "عمر خالد",
t5_role: "مدير منتجات، NovaApps",
t5_text: "العمل مع NovaTech كان سلسًا وفعالًا. المنتج النهائي فاق توقعاتنا.",

t6_name: "إيميلي تشين",
t6_role: "مؤسسة شركة ناشئة",
t6_text: "من الفكرة إلى الإطلاق، أرشدونا في كل خطوة باحترافية وإبداع.",

case_title: "دراسات حالة",
case1_title: "نمو متجر إلكتروني",
case1_desc: "ساعدنا متجرًا إلكترونيًا على زيادة المبيعات بنسبة 60% عبر تحسين تجربة المستخدم والأداء.",
case2_title: "إطلاق تطبيق موبايل",
case2_desc: "طورنا تطبيقًا قابلًا للتوسع يستخدمه أكثر من 100,000 مستخدم حول العالم.",
case3_title: "الهجرة إلى السحابة",
case3_desc: "نقلنا أنظمة شركات كبرى إلى السحابة مع تحسين الأمان وتقليل التكاليف.",

testimonials_cta_title: "هل أنت مستعد لتكون قصة نجاحنا القادمة؟",
testimonials_cta_desc: "دعنا نبني شيئًا رائعًا معًا.",
testimonials_cta_btn: "ابدأ مشروعك",
contact_title: "تواصل معنا",
contact_desc: "يسعدنا التواصل معك في أي وقت.",
contact_location_title: "موقعنا",
contact_location_desc: "القاهرة، مصر",
contact_email_title: "البريد الإلكتروني",
contact_email_desc: "info@novatech.com",
contact_phone_title: "رقم الهاتف",
contact_phone_desc: "+20 123 456 7890",
contact_hours_title: "ساعات العمل",
contact_hours_desc: "الأحد - الخميس: 9 صباحًا - 6 مساءً",

contact_form_title: "أرسل لنا رسالة",
contact_form_desc: "املأ النموذج أدناه وسنرد عليك في أقرب وقت.",
form_subject: "الموضوع",
form_message: "الرسالة",

contact_testimonials_title: "آراء عملائنا",
contact_testimonials_desc: "آراء حقيقية من أشخاص تعاملوا معنا.",
add_review_title: "أضف رأيك",
review_name_placeholder: "اسمك",
review_text_placeholder: "رأيك",
review_submit: "إرسال الرأي",

map_title: "موقعنا على الخريطة",
map_desc: "سيتم إضافة الخريطة قريبًا."


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

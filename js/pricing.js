// ================= DATA =================
const pricingPlans = [
  {
    id: 1,
    titleKey: "plan_basic",
    price: "$299",
    descKey: "plan_basic_desc",
    featuresKeys: [
      "plan_basic_f1",
      "plan_basic_f2",
      "plan_basic_f3"
    ],
    popular: false
  },
  {
    id: 2,
    titleKey: "plan_standard",
    price: "$599",
    descKey: "plan_standard_desc",
    featuresKeys: [
      "plan_standard_f1",
      "plan_standard_f2",
      "plan_standard_f3",
      "plan_standard_f4"
    ],
    popular: true
  },
  {
    id: 3,
    titleKey: "plan_premium",
    price: "$999",
    descKey: "plan_premium_desc",
    featuresKeys: [
      "plan_premium_f1",
      "plan_premium_f2",
      "plan_premium_f3",
      "plan_premium_f4",
      "plan_premium_f5"
    ],
    popular: false
  }
];

// ================= ELEMENTS =================
const pricingGrid = document.getElementById("pricingGrid");

// ================= RENDER =================
function renderPricing() {
  pricingGrid.innerHTML = "";

  pricingPlans.forEach(plan => {
    const card = document.createElement("div");
    card.className = `pricing-card ${plan.popular ? "popular" : ""}`;

    card.innerHTML = `
      <h3 data-i18n="${plan.titleKey}"></h3>
      <p class="price">${plan.price}</p>
      <p class="desc" data-i18n="${plan.descKey}"></p>
      <ul class="features">
        ${plan.featuresKeys.map(key => `<li data-i18n="${key}"></li>`).join("")}
      </ul>
      <a href="contact.html" class="btn secondary" data-i18n="pricing_choose"></a>
    `;

    pricingGrid.appendChild(card);
  });

  applyTranslations(); // مهم جدًا لتفعيل الترجمة
}

renderPricing();

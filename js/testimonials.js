// ================= DATA =================
const testimonialsData = [
  {
    id: 1,
    nameKey: "t1_name",
    roleKey: "t1_role",
    textKey: "t1_text",
    rating: 5
  },
  {
    id: 2,
    nameKey: "t2_name",
    roleKey: "t2_role",
    textKey: "t2_text",
    rating: 5
  },
  {
    id: 3,
    nameKey: "t3_name",
    roleKey: "t3_role",
    textKey: "t3_text",
    rating: 4
  },
  {
    id: 4,
    nameKey: "t4_name",
    roleKey: "t4_role",
    textKey: "t4_text",
    rating: 5
  },
  {
    id: 5,
    nameKey: "t5_name",
    roleKey: "t5_role",
    textKey: "t5_text",
    rating: 5
  },
  {
    id: 6,
    nameKey: "t6_name",
    roleKey: "t6_role",
    textKey: "t6_text",
    rating: 4
  }
];

// ================= ELEMENTS =================
const testimonialsGrid = document.getElementById("testimonialsGrid");

// ================= RENDER =================
function renderTestimonials() {
  testimonialsGrid.innerHTML = "";

  testimonialsData.forEach(item => {
    const card = document.createElement("div");
    card.className = "testimonial-card";

    card.innerHTML = `
      <p class="testimonial-text" data-i18n="${item.textKey}"></p>
      <div class="testimonial-footer">
        <div>
          <h4 data-i18n="${item.nameKey}"></h4>
          <span data-i18n="${item.roleKey}"></span>
        </div>
        <div class="rating">
          ${"★".repeat(item.rating)}${"☆".repeat(5 - item.rating)}
        </div>
      </div>
    `;

    testimonialsGrid.appendChild(card);
  });

  applyTranslations(); // تفعيل الترجمة
}

renderTestimonials();

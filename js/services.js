// ================= DATA =================
const servicesData = [
  { id: 1, category: "web", titleKey: "service_web", descKey: "service_web_desc", detailsKey: "service_web_details", popular: true, icon: "fa-code" },
  { id: 2, category: "mobile", titleKey: "service_mobile", descKey: "service_mobile_desc", detailsKey: "service_mobile_details", popular: true, icon: "fa-mobile-alt" },
  { id: 3, category: "design", titleKey: "service_design", descKey: "service_design_desc", detailsKey: "service_design_details", popular: false, icon: "fa-palette" },
  { id: 4, category: "cloud", titleKey: "service_cloud", descKey: "service_cloud_desc", detailsKey: "service_cloud_details", popular: false, icon: "fa-cloud" },
  { id: 5, category: "security", titleKey: "service_security", descKey: "service_security_desc", detailsKey: "service_security_details", popular: true, icon: "fa-shield-alt" }
];

// ================= ELEMENTS =================
const servicesGrid = document.getElementById("servicesGrid");
const tabs = document.querySelectorAll(".tab");
const searchInput = document.getElementById("serviceSearch");
const sortSelect = document.getElementById("serviceSort");
const modal = document.getElementById("modal");
const modalBody = document.getElementById("modalBody");
const closeModal = document.getElementById("closeModal");
const toast = document.getElementById("toast");
const favoritesGrid = document.getElementById("favoritesGrid");
const faqList = document.getElementById("faqList");
const serviceForm = document.getElementById("serviceForm");
const serviceSelect = document.getElementById("serviceSelect");

// ================= STATE =================
let currentCategory = "all";
let currentSearch = "";
let currentSort = "default";
let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
let ratings = JSON.parse(localStorage.getItem("ratings")) || {};
let requestCounts = JSON.parse(localStorage.getItem("requestCounts")) || {};

// ================= HELPERS =================
function t(key) {
  return translations[currentLang][key] || key;
}

// ================= TOAST =================
function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 3000);
}

// ================= RENDER SERVICES =================
function renderServices() {
  servicesGrid.innerHTML = "";

  let filtered = servicesData.filter(service => {
    const matchCategory = currentCategory === "all" || service.category === currentCategory;
    const title = t(service.titleKey).toLowerCase();
    const matchSearch = title.includes(currentSearch.toLowerCase());
    return matchCategory && matchSearch;
  });

  if (currentSort === "name") {
    filtered.sort((a, b) => t(a.titleKey).localeCompare(t(b.titleKey)));
  } else if (currentSort === "popular") {
    filtered.sort((a, b) => b.popular - a.popular);
  }

  filtered.forEach(service => {
    const isFav = favorites.includes(service.id);
    const rating = ratings[service.id] || 0;
    const requests = requestCounts[service.id] || 0;

    const card = document.createElement("div");
    card.className = "service-card";
    card.innerHTML = `
      <i class="fas ${service.icon}"></i>
      <h4>${t(service.titleKey)}</h4>
      <p>${t(service.descKey)}</p>

      <div class="service-meta">
        <span class="requests">📊 ${requests} ${t("requests")}</span>
        <span class="favorite-btn">${isFav ? "❤️" : "🤍"}</span>
      </div>

      <div class="rating">
        ${[1,2,3,4,5].map(star => `
          <span class="star ${star <= rating ? "active" : ""}" data-star="${star}">★</span>
        `).join("")}
      </div>
    `;

    card.querySelector("h4").addEventListener("click", () => openModal(service));
    card.querySelector(".favorite-btn").addEventListener("click", e => {
      e.stopPropagation();
      toggleFavorite(service.id);
    });
    card.querySelectorAll(".star").forEach(star => {
      star.addEventListener("click", e => {
        e.stopPropagation();
        rateService(service.id, Number(e.target.dataset.star));
      });
    });

    servicesGrid.appendChild(card);
  });

  renderFavorites();
}

// ================= FAVORITES =================
function toggleFavorite(id) {
  if (favorites.includes(id)) {
    favorites = favorites.filter(fav => fav !== id);
    showToast(t("toast_removed"));
  } else {
    favorites.push(id);
    showToast(t("toast_added"));
  }
  localStorage.setItem("favorites", JSON.stringify(favorites));
  renderServices();
}

function renderFavorites() {
  favoritesGrid.innerHTML = "";
  if (favorites.length === 0) {
    favoritesGrid.innerHTML = `<p>${t("no_favorites")}</p>`;
    return;
  }

  favorites.forEach(id => {
    const service = servicesData.find(s => s.id === id);
    if (!service) return;

    const card = document.createElement("div");
    card.className = "service-card";
    card.innerHTML = `
      <i class="fas ${service.icon}"></i>
      <h4>${t(service.titleKey)}</h4>
      <p>${t(service.descKey)}</p>
    `;
    card.addEventListener("click", () => openModal(service));
    favoritesGrid.appendChild(card);
  });
}

// ================= RATING =================
function rateService(id, value) {
  ratings[id] = value;
  localStorage.setItem("ratings", JSON.stringify(ratings));
  showToast(t("toast_rating").replace("{value}", value));
  renderServices();
}

// ================= MODAL =================
function openModal(service) {
  modalBody.innerHTML = `
    <h3>${t(service.titleKey)}</h3>
    <p style="margin-top:12px;">${t(service.detailsKey)}</p>
    <button id="requestServiceBtn" class="btn primary" style="margin-top:20px;">${t("request_service")}</button>
  `;
  modal.classList.add("show");

  document.getElementById("requestServiceBtn").addEventListener("click", () => {
    modal.classList.remove("show");
    serviceSelect.value = service.id;
    serviceForm.scrollIntoView({ behavior: "smooth" });
  });
}

closeModal.addEventListener("click", () => modal.classList.remove("show"));
modal.addEventListener("click", e => {
  if (e.target === modal) modal.classList.remove("show");
});

// ================= FILTERS =================
tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    tabs.forEach(t => t.classList.remove("active"));
    tab.classList.add("active");
    currentCategory = tab.dataset.category;
    renderServices();
  });
});

searchInput.addEventListener("input", e => {
  currentSearch = e.target.value;
  renderServices();
});

sortSelect.addEventListener("change", e => {
  currentSort = e.target.value;
  renderServices();
});

// ================= FAQ =================
const faqData = [
  { qKey: "faq_q1", aKey: "faq_a1" },
  { qKey: "faq_q2", aKey: "faq_a2" },
  { qKey: "faq_q3", aKey: "faq_a3" },
  { qKey: "faq_q4", aKey: "faq_a4" }
];

function renderFAQ() {
  faqList.innerHTML = "";
  faqData.forEach(item => {
    const div = document.createElement("div");
    div.className = "faq-item";
    div.innerHTML = `
      <div class="faq-question">
        <span>${t(item.qKey)}</span>
        <span>+</span>
      </div>
      <div class="faq-answer">${t(item.aKey)}</div>
    `;
    div.addEventListener("click", () => {
      div.classList.toggle("active");
    });
    faqList.appendChild(div);
  });
}

// ================= FORM =================
serviceForm.addEventListener("submit", e => {
  e.preventDefault();

  const name = document.getElementById("clientName").value.trim();
  const email = document.getElementById("clientEmail").value.trim();
  const serviceId = serviceSelect.value;
  const budget = document.getElementById("budget").value;
  const details = document.getElementById("details").value.trim();

  if (!name || !email || !serviceId || !budget || !details) {
    showToast(t("toast_fill_all"));
    return;
  }

  const selectedService = servicesData.find(s => s.id == serviceId);
  if (selectedService) {
    requestCounts[selectedService.id] = (requestCounts[selectedService.id] || 0) + 1;
    localStorage.setItem("requestCounts", JSON.stringify(requestCounts));
  }

  showToast(t("toast_request_sent"));
  serviceForm.reset();
  renderServices();
});

// ================= INIT =================
function initServiceSelect() {
  serviceSelect.innerHTML = `<option value="">${t("select_service")}</option>`;
  servicesData.forEach(service => {
    const option = document.createElement("option");
    option.value = service.id;
    option.textContent = t(service.titleKey);
    serviceSelect.appendChild(option);
  });
}

document.addEventListener("languageChanged", () => {
  initServiceSelect();
  renderServices();
  renderFavorites();
  renderFAQ();
});

initServiceSelect();
renderFAQ();
renderServices();

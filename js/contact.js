// ================= ELEMENTS =================
const contactForm = document.getElementById("contactForm");
const reviewForm = document.getElementById("reviewForm");
const userReviews = document.getElementById("userReviews");

// ================= CONTACT FORM =================
contactForm.addEventListener("submit", e => {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const subject = document.getElementById("subject").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !subject || !message) {
    showToast("Please fill in all fields.");
    return;
  }

  showToast("Your message has been sent successfully! 📩");
  contactForm.reset();
});

// ================= REVIEWS =================
let reviews = JSON.parse(localStorage.getItem("reviews")) || [];

function renderReviews() {
  userReviews.innerHTML = "";

  if (reviews.length === 0) {
    userReviews.innerHTML = "<p>No reviews yet.</p>";
    return;
  }

  reviews.forEach(review => {
    const div = document.createElement("div");
    div.className = "review-card";
    div.innerHTML = `
      <h4>${review.name}</h4>
      <p>${review.text}</p>
    `;
    userReviews.appendChild(div);
  });
}

reviewForm.addEventListener("submit", e => {
  e.preventDefault();

  const name = document.getElementById("reviewName").value.trim();
  const text = document.getElementById("reviewText").value.trim();

  if (!name || !text) {
    showToast("Please fill in all fields.");
    return;
  }

  reviews.push({ name, text });
  localStorage.setItem("reviews", JSON.stringify(reviews));
  renderReviews();
  reviewForm.reset();
  showToast("Thank you for your review! ⭐");
});

renderReviews();

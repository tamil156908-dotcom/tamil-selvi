const filterButtons = document.querySelectorAll(".filter-button");
const menuCards = document.querySelectorAll(".menu-card");
const cartCount = document.querySelector(".cart-count");
const cartLink = document.querySelector(".cart-link");
const cartMessage = document.querySelector(".cart-message");
const contactForm = document.querySelector(".contact-form");
const formMessage = document.querySelector(".form-message");

let itemCount = 0;

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const selectedCategory = button.dataset.filter;

    filterButtons.forEach((filterButton) => {
      const isSelected = filterButton === button;
      filterButton.classList.toggle("active", isSelected);
      filterButton.setAttribute("aria-pressed", String(isSelected));
    });

    menuCards.forEach((card) => {
      card.hidden = selectedCategory !== "all" && card.dataset.category !== selectedCategory;
    });
  });
});

document.querySelectorAll(".add-button").forEach((button) => {
  button.addEventListener("click", () => {
    itemCount += 1;
    cartCount.textContent = itemCount;
    cartLink.setAttribute("aria-label", `Cart, ${itemCount} ${itemCount === 1 ? "item" : "items"}`);

    const foodName = button.closest(".menu-card").querySelector("h3").textContent;
    cartMessage.textContent = `${foodName} added to your cart!`;
  });
});

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!contactForm.reportValidity()) {
    return;
  }

  formMessage.textContent = "Thanks for your note! We'll be in touch soon.";
  contactForm.reset();
});

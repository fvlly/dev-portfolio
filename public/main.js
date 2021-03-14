const toggleBtn = document.querySelector(".toggle-menu");
const navItems = document.querySelector(".navbar-items");

toggleBtn.addEventListener("click", () => {
  toggleBtn.classList.toggle("active");
});

// 8-script.js
document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".main-nav");

  // Toggle menu on click
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");

    // Update ARIA accessibility attribute
    const expanded = hamburger.classList.contains("active");
    hamburger.setAttribute("aria-expanded", expanded);
  });

  // Close menu when clicking any link
  document.querySelectorAll(".main-nav a").forEach(link =>
    link.addEventListener("click", () => {
      hamburger.classList.remove("active");
      navMenu.classList.remove("active");
      hamburger.setAttribute("aria-expanded", "false");
    })
  );
});

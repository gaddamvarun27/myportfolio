// Highlight active nav link when scrolling
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 60;
    const sectionHeight = section.clientHeight;
    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});
document.addEventListener("DOMContentLoaded", function() {
  const text = "Open to Work";
  const availabilityDiv = document.getElementById("availability");
  let index = 0;

  function typeEffect() {
    if (index < text.length) {
      availabilityDiv.textContent += text.charAt(index);
      index++;
      setTimeout(typeEffect, 100); // typing speed
    } else {
      setTimeout(() => {
        availabilityDiv.textContent = "";
        index = 0;
        typeEffect(); // restart typing
      }, 2000); // wait before restarting
    }
  }

  typeEffect();
});
document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("theme-toggle");
  const className = "dark-theme";
  const storageKey = "portfolio-theme";

  // Load saved or system preference
  const saved = localStorage.getItem(storageKey);
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  if (saved === "dark" || (!saved && prefersDark)) {
    document.documentElement.classList.add(className);
  }

  function updateButton() {
    const isDark = document.documentElement.classList.contains(className);
    toggleBtn.setAttribute("aria-pressed", String(isDark));
    toggleBtn.querySelector(".icon-sun").style.display = isDark ? "none" : "inline";
    toggleBtn.querySelector(".icon-moon").style.display = isDark ? "inline" : "none";
  }

  updateButton();

  toggleBtn.addEventListener("click", () => {
    const isDark = document.documentElement.classList.toggle(className);
    localStorage.setItem(storageKey, isDark ? "dark" : "light");
    updateButton();
  });
});

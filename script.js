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
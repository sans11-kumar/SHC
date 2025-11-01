// 🌿 SAANVI HEALTHCARE CENTRE - JS Enhancements

// Reveal on Scroll
window.addEventListener("scroll", reveal);
function reveal() {
  const reveals = document.querySelectorAll(".reveal");
  for (let i = 0; i < reveals.length; i++) {
    const windowHeight = window.innerHeight;
    const elementTop = reveals[i].getBoundingClientRect().top;
    const elementVisible = 100;
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

// Floating WhatsApp Button
document.addEventListener("DOMContentLoaded", () => {
  const whatsappBtn = document.createElement("a");
  whatsappBtn.id = "whatsappBtn";
  whatsappBtn.href = "https://wa.me/91XXXXXXXXXX"; // Replace with your number
  whatsappBtn.target = "_blank";
  whatsappBtn.innerHTML = '<i class="fab fa-whatsapp"></i>';
  document.body.appendChild(whatsappBtn);
});

// Mobile Navbar Toggle
document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.querySelector(".menu-btn");
  const nav = document.querySelector("nav");
  if (menuBtn && nav) {
    menuBtn.addEventListener("click", () => {
      nav.classList.toggle("active");
    });
  }
});
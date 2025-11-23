// 1. 初始化圖標
lucide.createIcons();

// 2. Navbar 滾動效果
const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
  if (window.scrollY > 20) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// 3. 手機選單邏輯
const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
let isMenuOpen = false;

menuBtn.addEventListener("click", () => {
  isMenuOpen = !isMenuOpen;
  if (isMenuOpen) {
    mobileMenu.classList.add("active");
    menuBtn.innerHTML = '<i data-lucide="x"></i>';
  } else {
    mobileMenu.classList.remove("active");
    menuBtn.innerHTML = '<i data-lucide="menu"></i>';
  }
  lucide.createIcons();
});

document.querySelectorAll(".mobile-link").forEach((link) => {
  link.addEventListener("click", () => {
    isMenuOpen = false;
    mobileMenu.classList.remove("active");
    menuBtn.innerHTML = '<i data-lucide="menu"></i>';
    lucide.createIcons();
  });
});

// 4. 打字機特效
const typeTextElement = document.getElementById("typewriter-text");
const phrases = ["前端工程師", "自律開發者"];
let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typeSpeed = 150;

function typeLoop() {
  const currentPhrase = phrases[phraseIndex];

  if (isDeleting) {
    typeTextElement.textContent = currentPhrase.substring(0, charIndex - 1);
    charIndex--;
    typeSpeed = 80;
  } else {
    typeTextElement.textContent = currentPhrase.substring(0, charIndex + 1);
    charIndex++;
    typeSpeed = 200;
  }

  if (!isDeleting && charIndex === currentPhrase.length) {
    isDeleting = true;
    typeSpeed = 2000;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    phraseIndex = (phraseIndex + 1) % phrases.length;
    typeSpeed = 500;
  }
  setTimeout(typeLoop, typeSpeed);
}

document.addEventListener("DOMContentLoaded", typeLoop);

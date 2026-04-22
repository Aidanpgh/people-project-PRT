// Initialize scroll reveal animations
AOS.init({
  duration: 800,
  once: true,
  offset: 70,
  easing: "ease-out-cubic"
});

// Update year in footer
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Mobile menu toggle
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("is-open");
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => navLinks.classList.remove("is-open"));
  });
}

// Sticky header style shift on scroll
const header = document.querySelector(".site-header");
window.addEventListener("scroll", () => {
  if (!header) return;
  header.classList.toggle("scrolled", window.scrollY > 24);
});

// GSAP: Hero intro micro-animation
window.addEventListener("load", () => {
  const tl = gsap.timeline({ defaults: { ease: "power3.out", duration: 0.9 } });
  tl.from(".hero-copy .eyebrow", { y: 24, opacity: 0 })
    .from(".hero-copy h1", { y: 28, opacity: 0 }, "-=0.55")
    .from(".hero-sub", { y: 24, opacity: 0 }, "-=0.6")
    .from(".hero-cta .btn", { y: 16, opacity: 0, stagger: 0.12 }, "-=0.55")
    .from(".hero-visual", { x: 20, opacity: 0 }, "-=0.75");

  // Gentle route-line drawing animation for a map-like feel.
  gsap.fromTo(
    ".route-line path",
    { strokeDashoffset: 120 },
    {
      strokeDashoffset: 0,
      duration: 3,
      ease: "sine.inOut",
      stagger: 0.2
    }
  );
});

// Subtle parallax effect for floating background orbs
const orbs = document.querySelectorAll(".bg-orb");
window.addEventListener("mousemove", (e) => {
  const x = (e.clientX / window.innerWidth - 0.5) * 18;
  const y = (e.clientY / window.innerHeight - 0.5) * 18;
  orbs.forEach((orb, index) => {
    const factor = index === 0 ? 1 : index === 1 ? -1 : 0.45;
    orb.style.transform = `translate(${x * factor}px, ${y * factor}px)`;
  });
});

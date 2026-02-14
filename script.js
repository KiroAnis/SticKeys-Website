document.addEventListener("DOMContentLoaded", () => {
  // ================= HAMBURGER MENU =================
  const hamburger = document.getElementById("hamburger");
  const mobileMenu = document.getElementById("mobileMenu");

  if (hamburger && mobileMenu) {
    hamburger.addEventListener("click", (e) => {
      e.preventDefault();
      mobileMenu.classList.toggle("open");
      hamburger.classList.toggle("open");
    });

    // Close menu when clicking a link
    mobileMenu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        mobileMenu.classList.remove("open");
        hamburger.classList.remove("open");
      });
    });
  }

  // ================= CURSOR GLOW (DESKTOP ONLY) =================
  const dot = document.getElementById("cursorDot");
  const glow = document.getElementById("cursorGlow");

  const isDesktop = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

  // Only run cursor code if desktop AND elements exist
  if (isDesktop && dot && glow) {
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;

    let glowX = mouseX;
    let glowY = mouseY;

    // show cursor once we move
    const show = () => {
      dot.style.opacity = "1";
      glow.style.opacity = "1";
      window.removeEventListener("mousemove", show);
    };
    window.addEventListener("mousemove", show);

    window.addEventListener("mousemove", (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      dot.style.left = mouseX + "px";
      dot.style.top = mouseY + "px";
    });

    function animate() {
      glowX += (mouseX - glowX) * 0.14;
      glowY += (mouseY - glowY) * 0.14;

      glow.style.left = glowX + "px";
      glow.style.top = glowY + "px";

      requestAnimationFrame(animate);
    }
    animate();

    // hover glow boost
    const hoverTargets =
      "a, button, .btn, .track-card, .service-card, .member-image img, .hero-image img";

    document.addEventListener("mouseover", (e) => {
      if (e.target.closest(hoverTargets)) document.body.classList.add("cursor-hover");
    });

    document.addEventListener("mouseout", (e) => {
      if (e.target.closest(hoverTargets)) document.body.classList.remove("cursor-hover");
    });
  }

  // ================= TEXT SCROLL REVEAL =================
  const reveals = document.querySelectorAll(".reveal");

  if (reveals.length) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("active");
        });
      },
      { threshold: 0.15 }
    );

    reveals.forEach((el) => observer.observe(el));
  }
});

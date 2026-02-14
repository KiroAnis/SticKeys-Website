document.addEventListener("DOMContentLoaded", function () {

  const hamburger = document.getElementById("hamburger");
  const mobileMenu = document.getElementById("mobileMenu");

  if (!hamburger || !mobileMenu) return;

  // Open / Close menu
  hamburger.addEventListener("click", function () {
    mobileMenu.classList.toggle("open");
    hamburger.classList.toggle("open");
  });

  // Close menu when clicking a link
  const links = mobileMenu.querySelectorAll("a");

  links.forEach(function (link) {
    link.addEventListener("click", function () {
      mobileMenu.classList.remove("open");
      hamburger.classList.remove("open");
    });
  });

});

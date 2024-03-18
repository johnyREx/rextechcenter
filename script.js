document.addEventListener("DOMContentLoaded", function () {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll("header nav ul li a");
    navLinks.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const targetId = e.target.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          const offsetTop = targetElement.offsetTop;
          window.scrollTo({
            top: offsetTop,
            behavior: "smooth",
          });
        }
      });
    });
  
    // Toggle menu visibility for smaller screens
    const menuToggle = document.getElementById("menu-toggle");
    const nav = document.querySelector("header nav ul");
    menuToggle.addEventListener("click", () => {
      nav.classList.toggle("show");
    });
  });
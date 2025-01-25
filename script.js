document.addEventListener("DOMContentLoaded", () => {
    const navbar = document.querySelector("nav");
  
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    });
  });
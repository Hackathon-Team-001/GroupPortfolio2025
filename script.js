//navbar style after scroll
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

  //dark-light theme
  document.addEventListener("DOMContentLoaded", () => {
    const themeToggleButton = document.getElementById("themeBtn");
  
    // Check for saved theme in localStorage
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.body.classList.add("dark-mode");
    }
  
    themeToggleButton.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");
  
      // Save the theme preference in localStorage
      if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
      } else {
        localStorage.setItem("theme", "light");
      }
    });
  });
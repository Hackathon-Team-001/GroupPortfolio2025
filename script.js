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
      document.documentElement.classList.add("dark-mode");
    }
  
    themeToggleButton.addEventListener("click", () => {
      document.documentElement.classList.toggle("dark-mode");
  
      // Save the theme preference in localStorage
      if (document.documentElement.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
      } else {
        localStorage.setItem("theme", "light");
      }
    });
  });
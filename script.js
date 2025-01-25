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
    const iconImage = document.createElement("img"); // Create an img element
  
    // Check for saved theme in localStorage
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark-mode");
      iconImage.src = "icons/moon.png"; 
    } else {
      iconImage.src = "icons/sun.png";
    }
  
    // Append the image to the button
    themeToggleButton.appendChild(iconImage);
  
    themeToggleButton.addEventListener("click", () => {
      document.documentElement.classList.toggle("dark-mode");
  
      // Fade out the icon smoothly
      iconImage.style.opacity = 0;
  
      // Change the button icon based on the theme
      setTimeout(() => {
        if (document.documentElement.classList.contains("dark-mode")) {
          localStorage.setItem("theme", "dark");
          iconImage.src = "icons/moon.png"; // Set moon icon
        } else {
          localStorage.setItem("theme", "light");
          iconImage.src = "icons/sun.png"; // Set sun icon
        }
        
        // Fade in the new icon
        iconImage.style.opacity = 1;
      }, 300); // Timeout should match the duration of the opacity transition
    });
  });
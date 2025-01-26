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
  iconImage.style.transition = "opacity 0.3s ease";

  // Check for saved theme in localStorage
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "light") {
    document.documentElement.classList.add("light-mode");
    iconImage.src = "icons/sun.png";
  } else {
    iconImage.src = "icons/moon.png";
  }

  // Append the image to the button
  themeToggleButton.appendChild(iconImage);

  themeToggleButton.addEventListener("click", () => {
    document.documentElement.classList.toggle("light-mode");

    iconImage.style.opacity = 0;

    setTimeout(() => {
      if (document.documentElement.classList.contains("light-mode")) {
        localStorage.setItem("theme", "light");
        iconImage.src = "icons/sun.png";
      } else {
        localStorage.setItem("theme", "dark");
        iconImage.src = "icons/moon.png";
      }

      iconImage.style.opacity = 1;
    }, 300); // = duration of the opacity transition
  });

  // Handle screen resize to ensure icon consistency
  window.addEventListener("resize", () => {
    if (document.documentElement.classList.contains("light-mode")) {
      iconImage.src = "icons/sun.png";
    } else {
      iconImage.src = "icons/moon.png";
    }
  });
});

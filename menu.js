// Get elements
const hamburger = document.getElementById("hamburger");
const sidebar = document.getElementById("sidebar");

// Toggle sidebar and hamburger animation
hamburger.addEventListener("click", function () {
  sidebar.classList.toggle("active");
  hamburger.classList.toggle("active");
});

// Optional: close sidebar when a link is clicked (mobile UX improvement)
const sidebarLinks = sidebar.querySelectorAll("a");
sidebarLinks.forEach(link => {
  link.addEventListener("click", () => {
    if (window.innerWidth <= 768) { // only on mobile
      sidebar.classList.remove("active");
      hamburger.classList.remove("active");
    }
  });
});

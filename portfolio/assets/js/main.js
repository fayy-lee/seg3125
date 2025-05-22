// Example: highlight current nav item based on path
document.addEventListener("DOMContentLoaded", () => {
  const path = window.location.pathname;
  document.querySelectorAll(".nav-link").forEach(link => {
    if (link.href.includes(path.split('/').pop())) {
      link.classList.add("active");
    }
  });
});

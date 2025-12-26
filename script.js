document.addEventListener("DOMContentLoaded", () => {

  // Mobile menu toggle
  const menuBtn = document.getElementById("menu-btn");
  const nav = document.getElementById("nav");

  if (menuBtn && nav) {
    menuBtn.addEventListener("click", () => {
      nav.classList.toggle("nav-open");
    });

    document.querySelectorAll(".nav-link").forEach(link => {
      link.addEventListener("click", () => {
        nav.classList.remove("nav-open");
      });
    });
  }

  // Contact form validation
  const form = document.getElementById("contact-form");
  const formMsg = document.getElementById("form-msg");

  if (form) {
    form.addEventListener("submit", e => {
      e.preventDefault();

      if (!form.name.value || !form.email.value || !form.message.value) {
        formMsg.textContent = "Please fill in all fields.";
        formMsg.style.color = "red";
        return;
      }

      formMsg.textContent = "Message sent successfully (demo).";
      formMsg.style.color = "#9b6bff";
      form.reset();
    });
  }

  // Footer year
  document.getElementById("year").textContent = new Date().getFullYear();
});

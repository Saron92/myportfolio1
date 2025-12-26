/* MENU TOGGLE (MOBILE) */
const menuBtn = document.getElementById('menu-btn');
const nav = document.getElementById('nav');

menuBtn.addEventListener('click', () => {
  const shown = getComputedStyle(nav).display === 'flex';
  nav.style.display = shown ? 'none' : 'flex';
});

/* SMOOTH SCROLL FOR ANCHOR LINKS */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', function (e) {
    const target = this.getAttribute('href');
    if (target.length > 1) {
      e.preventDefault();
      const el = document.querySelector(target);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // close mobile nav after selection
      if (window.innerWidth <= 640) nav.style.display = 'none';
    }
  });
});

/* CONTACT FORM VALIDATION (CLIENT-SIDE ONLY) */
const form = document.getElementById('contact-form');
const formMsg = document.getElementById('form-msg');

if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if (!name  !email  !message) {
      formMsg.textContent = 'Please fill in all fields.';
      formMsg.style.color = '#ff6b6b'; // bright red for error
      return;
    }
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      formMsg.textContent = 'Please enter a valid email address.';
      formMsg.style.color = '#ff6b6b'; // bright red for error
      return;
    }

    // Simulate success (no backend)
    formMsg.style.color = '#9b6bff'; // purple accent for success
    formMsg.textContent = 'Message sent — thank you! (Demo form, does not actually send email.)';
    form.reset();
  });
}

/* FOOTER YEAR */
document.getElementById('year').textContent = new Date().getFullYear();
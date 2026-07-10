/* ========== script.js ========== */
document.addEventListener('DOMContentLoaded', function() {
  // Alert button (home page)
  const alertBtn = document.getElementById('alertBtn');
  if (alertBtn) {
    alertBtn.addEventListener('click', function() {
      alert('👋 Hello! Thanks for visiting OKYERE ERNEST’s page.');
    });
  }

  // Contact form (contact.html)
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const name = document.getElementById('name')?.value || 'friend';
      alert(`✅ Thanks ${name}, your message has been sent (demo).`);
      this.reset();
    });
  }
});
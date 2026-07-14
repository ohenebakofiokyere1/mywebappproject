/* ========== script.js ========== */
document.addEventListener('DOMContentLoaded', function() {
  // Alert button (home page)
  const alertBtn = document.getElementById('alertBtn');
  if (alertBtn) {
    alertBtn.addEventListener('click', function() {
      alert('👋 Hello! Thanks for visiting OKYERE ERNEST’s page.');
    });
  }

  // Contact form (contact.html) — sends real email via EmailJS
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    // TODO: replace these three with the values from your EmailJS dashboard
    emailjs.init('YOUR_PUBLIC_KEY');
    const SERVICE_ID = 'YOUR_SERVICE_ID';
    const TEMPLATE_ID = 'YOUR_TEMPLATE_ID';

    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const name = document.getElementById('name')?.value || 'friend';
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = 'Sending...';

      emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, contactForm)
        .then(() => {
          alert(`✅ Thanks ${name}, your message has been sent!`);
          contactForm.reset();
        })
        .catch((err) => {
          console.error('EmailJS error:', err);
          alert('❌ Sorry, something went wrong. Please try again or email us directly.');
        })
        .finally(() => {
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalText;
        });
    });
  }
});
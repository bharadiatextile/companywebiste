// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const mainNav = document.getElementById('mainNav');

navToggle.addEventListener('click', () => {
  const open = mainNav.classList.toggle('open');
  navToggle.classList.toggle('open', open);
  navToggle.setAttribute('aria-expanded', String(open));
});

// Close mobile nav when a link is tapped
mainNav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    mainNav.classList.remove('open');
    navToggle.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// Current year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Reveal-on-scroll for major blocks
const revealTargets = document.querySelectorAll(
  '.about-grid, .product-card, .markets li, .why-card, .contact-grid, .section-head'
);
revealTargets.forEach((el, i) => {
  el.setAttribute('data-reveal', '');
  el.style.transitionDelay = `${(i % 6) * 60}ms`;
});

// Enquiry form -> Web3Forms (AJAX submit with success/error feedback)
const enquiryForm = document.getElementById('enquiryForm');
if (enquiryForm) {
  const statusEl = document.getElementById('formStatus');
  const submitBtn = document.getElementById('submitBtn');

  enquiryForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const accessKey = enquiryForm.querySelector('input[name="access_key"]').value;
    if (!accessKey || accessKey === 'YOUR_ACCESS_KEY_HERE') {
      statusEl.textContent = 'Form not configured yet — please email shreebharadia@gmail.com directly.';
      statusEl.className = 'form-note error';
      return;
    }

    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending…';
    statusEl.textContent = '';
    statusEl.className = 'form-note';

    try {
      const formData = new FormData(enquiryForm);
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: formData,
      });
      const data = await res.json();

      if (data.success) {
        enquiryForm.reset();
        statusEl.textContent = '✓ Thank you! Your enquiry has been sent — we will reply shortly.';
        statusEl.className = 'form-note success';
      } else {
        throw new Error(data.message || 'Submission failed');
      }
    } catch (err) {
      statusEl.textContent = 'Sorry, something went wrong. Please WhatsApp us or email shreebharadia@gmail.com.';
      statusEl.className = 'form-note error';
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = 'Send Enquiry';
    }
  });
}

if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  revealTargets.forEach((el) => io.observe(el));
} else {
  revealTargets.forEach((el) => el.classList.add('in'));
}

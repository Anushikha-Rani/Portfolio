document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const status = document.getElementById('form-status');
  status.textContent = 'Sending…';

  // Simulated async operation (replace with real API)
  setTimeout(() => {
    status.textContent = 'Thank you! I’ll get back to you soon.';
    this.reset();
  }, 1500);
});

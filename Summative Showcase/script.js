// Toggle navigation menu on small screens
document.querySelector('.hamburger')?.addEventListener('click', () => {
  document.querySelector('.nav-links')?.classList.toggle('show');
});

// Form submission popup
document.getElementById('contactForm')?.addEventListener('submit', function (e) {
  e.preventDefault();

  const popup = document.getElementById('popup');
  if (popup) {
    popup.style.display = 'block';
    setTimeout(() => {
      popup.style.display = 'none';
    }, 3000);
  }

  // Optionally reset the form
  this.reset();
});
// Sticky header shadow
window.addEventListener('scroll', () => {
  document.querySelector('header').classList.toggle('scrolled', window.scrollY > 20);
});

// Mobile menu
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');
if (hamburger && mobileMenu) {
  hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
  });
  // Close on link click
  mobileMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => mobileMenu.classList.remove('open')));
}

// Active nav link
const currentPage = location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a, .mobile-menu a').forEach(a => {
  const href = a.getAttribute('href');
  if (href === currentPage || (currentPage === 'index.html' && href === 'index.html')) {
    a.classList.add('active');
  }
});

// Theme Toggle
const themeToggle = document.getElementById('theme-toggle');
function applyThemeIcons() {
  const isDark = document.documentElement.classList.contains('dark-mode');
  document.querySelectorAll('.sun-icon').forEach(el => el.style.display = isDark ? 'block' : 'none');
  document.querySelectorAll('.moon-icon').forEach(el => el.style.display = isDark ? 'none' : 'block');
}
// Apply icons on initial load
applyThemeIcons();
if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark-mode');
    const theme = document.documentElement.classList.contains('dark-mode') ? 'dark' : 'light';
    localStorage.setItem('theme', theme);
    applyThemeIcons();
  });
}

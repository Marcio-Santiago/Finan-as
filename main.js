// Mobile sidebar toggle
const sidebar  = document.querySelector('.sidebar');
const overlay  = document.querySelector('.overlay');
const menuBtn  = document.querySelector('.menu-btn');

if (menuBtn) {
  menuBtn.addEventListener('click', () => {
    sidebar.classList.toggle('open');
    overlay.classList.toggle('open');
  });
}
if (overlay) {
  overlay.addEventListener('click', () => {
    sidebar.classList.remove('open');
    overlay.classList.remove('open');
  });
}

// Mark active nav link
const links = document.querySelectorAll('.nav-item');
links.forEach(link => {
  if (link.getAttribute('href') === window.location.pathname.split('/').pop() ||
      (window.location.pathname.endsWith('/') && link.getAttribute('href') === 'index.html')) {
    link.classList.add('active');
  }
});

// Animate progress bars on load
window.addEventListener('load', () => {
  document.querySelectorAll('.progress-fill').forEach(el => {
    const target = el.dataset.width || el.style.width;
    el.style.width = '0';
    requestAnimationFrame(() => {
      setTimeout(() => { el.style.width = target; }, 80);
    });
  });
});

// Format currency helper (used in JS-rendered tables if needed)
function brl(v) {
  return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(v);
}

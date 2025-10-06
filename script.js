// Mobile menu
const menuBtn = document.getElementById('menu');
const nav = document.getElementById('nav');
if (menuBtn && nav) {
  menuBtn.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
}

// Lazy set background images for .image-cover
document.querySelectorAll('.image-cover').forEach(el => {
  const src = el.getAttribute('data-src');
  if (src) {
    const i = new Image();
    i.onload = () => { el.style.backgroundImage = `url('${src}')`; };
    i.src = src;
  }
});

// Year
const y = document.getElementById('y');
if (y) y.textContent = new Date().getFullYear();

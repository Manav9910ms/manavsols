// script.js
// Small interactivity for Ruby Eyes: nav toggle, theme toggle, carousel, and current year.

// Wrapping in an IIFE to avoid global scope pollution
(function () {
  // Elements
  const navToggle = document.getElementById('navToggle');
  const mainNav = document.getElementById('mainNav');
  const themeBtn = document.getElementById('themeToggle');
  const carousel = document.getElementById('carousel');
  const prevBtn = document.getElementById('prev');
  const nextBtn = document.getElementById('next');
  const yearEl = document.getElementById('year');

  // Safe helpers
  const safe = (el) => !!el;

  // Nav toggle for small screens
  if (safe(navToggle) && safe(mainNav)) {
    navToggle.addEventListener('click', () => {
      // toggle inline display to support the simple CSS used in the template
      const isVisible = mainNav.style.display === 'flex' || getComputedStyle(mainNav).display === 'flex';
      mainNav.style.display = isVisible ? 'none' : 'flex';
    });
  }

  // Theme toggle (light/dark)
  if (safe(themeBtn)) {
    // Initialize button label according to current state
    themeBtn.textContent = document.documentElement.classList.contains('light') ? 'Light' : 'Dark';

    themeBtn.addEventListener('click', () => {
      const html = document.documentElement;
      const isLight = html.classList.toggle('light'); // toggles and returns true if light is now enabled
      themeBtn.textContent = isLight ? 'Light' : 'Dark';
      // Optional: store preference in localStorage
      try {
        localStorage.setItem('ruby-eyes-theme', isLight ? 'light' : 'dark');
      } catch (e) {
        // ignore if storage is not available
      }
    });

    // Apply saved theme if present
    try {
      const saved = localStorage.getItem('ruby-eyes-theme');
      if (saved === 'light') {
        document.documentElement.classList.add('light');
        themeBtn.textContent = 'Light';
      }
    } catch (e) { /* ignore */ }
  }

  // Carousel logic
  if (safe(carousel)) {
    const slides = Array.from(carousel.querySelectorAll('.slide'));
    if (slides.length) {
      let idx = slides.findIndex(s => s.classList.contains('active'));
      if (idx < 0) idx = 0;

      function show(i) {
        slides.forEach((s, n) => {
          s.classList.toggle('active', n === i);
        });
      }

      // Prev / Next handlers
      if (safe(prevBtn)) {
        prevBtn.addEventListener('click', () => {
          idx = (idx - 1 + slides.length) % slides.length;
          show(idx);
        });
      }
      if (safe(nextBtn)) {
        nextBtn.addEventListener('click', () => {
          idx = (idx + 1) % slides.length;
          show(idx);
        });
      }

      // Auto advance every 6s
      let auto = setInterval(() => {
        idx = (idx + 1) % slides.length;
        show(idx);
      }, 6000);

      // Pause auto-advance while hovering the carousel
      carousel.addEventListener('mouseenter', () => clearInterval(auto));
      carousel.addEventListener('mouseleave', () => {
        auto = setInterval(() => {
          idx = (idx + 1) % slides.length;
          show(idx);
        }, 6000);
      });
    }
  }

  // Populate current year in footer
  if (safe(yearEl)) {
    yearEl.textContent = new Date().getFullYear();
  }
})();

/* ============================================================
   script.js — Dany Shekinah
   ============================================================ */

/* ============================================================
   ES Module — strict mode is implicit
   ============================================================ */

{

  /* ----------------------------------------------------------
     STICKY HEADER
  ---------------------------------------------------------- */
  const header = document.getElementById('site-header');

  function onScroll() {
    header.classList.toggle('scrolled', window.scrollY > 24);
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll(); // run once on load


  /* ----------------------------------------------------------
     HAMBURGER MENU
  ---------------------------------------------------------- */
  const hamburger  = document.getElementById('hamburger');
  const mobileNav  = document.getElementById('mobile-nav');
  const mobileLinks = document.querySelectorAll('.nav-mobile-link, .nav-mobile-cta');

  function toggleMenu(open) {
    const isOpen = open !== undefined ? open : !hamburger.classList.contains('open');
    hamburger.classList.toggle('open', isOpen);
    hamburger.setAttribute('aria-expanded', isOpen);
    mobileNav.classList.toggle('open', isOpen);
    mobileNav.setAttribute('aria-hidden', !isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  }

  hamburger.addEventListener('click', () => toggleMenu());

  mobileLinks.forEach(link => {
    link.addEventListener('click', () => toggleMenu(false));
  });

  // Close on Escape
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && hamburger.classList.contains('open')) toggleMenu(false);
  });


  /* ----------------------------------------------------------
     LIGHTBOX
  ---------------------------------------------------------- */
  const lightbox         = document.getElementById('lightbox');
  const lightboxImg      = document.getElementById('lightbox-img');
  const lightboxCaption  = document.getElementById('lightbox-caption');
  const lightboxClose    = document.getElementById('lightbox-close');
  const lightboxBackdrop = document.getElementById('lightbox-backdrop');

  function openLightbox(src, caption, alt) {
    lightboxImg.src = src;
    lightboxImg.alt = alt || caption;
    lightboxCaption.textContent = caption;
    lightbox.hidden = false;
    document.body.style.overflow = 'hidden';
    lightboxClose.focus();
  }

  function closeLightbox() {
    lightbox.hidden = true;
    lightboxImg.src = '';
    document.body.style.overflow = '';
  }

  document.querySelectorAll('.gallery-item').forEach(btn => {
    btn.addEventListener('click', () => {
      openLightbox(
        btn.dataset.src,
        btn.dataset.caption,
        btn.querySelector('img').alt
      );
    });
  });

  lightboxClose.addEventListener('click', closeLightbox);
  lightboxBackdrop.addEventListener('click', closeLightbox);

  document.addEventListener('keydown', e => {
    if (!lightbox.hidden && e.key === 'Escape') closeLightbox();
  });


  /* ----------------------------------------------------------
     SCROLL REVEAL (Intersection Observer)
  ---------------------------------------------------------- */
  const revealEls = document.querySelectorAll('.reveal');

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    revealEls.forEach(el => observer.observe(el));
  } else {
    // Fallback: show everything immediately
    revealEls.forEach(el => el.classList.add('visible'));
  }


  /* ----------------------------------------------------------
     FOOTER YEAR
  ---------------------------------------------------------- */
  const yearEl = document.getElementById('footer-year');
  if (yearEl) {
    yearEl.textContent = `© ${new Date().getFullYear()} Salão Dany Shekinah. Todos os direitos reservados.`;
  }


  /* ----------------------------------------------------------
     SMOOTH ACTIVE NAV HIGHLIGHT (scroll spy)
  ---------------------------------------------------------- */
  const sections = document.querySelectorAll('section[id], footer[id]');
  const desktopLinks = document.querySelectorAll('.nav-desktop a');

  function updateActiveNav() {
    let currentId = '';
    const scrollY = window.scrollY + 80; // header offset

    sections.forEach(sec => {
      if (sec.offsetTop <= scrollY) currentId = sec.id;
    });

    desktopLinks.forEach(link => {
      const target = link.getAttribute('href').slice(1);
      link.style.color = target === currentId ? 'var(--rose-600)' : '';
    });
  }

  window.addEventListener('scroll', updateActiveNav, { passive: true });
  updateActiveNav();

}

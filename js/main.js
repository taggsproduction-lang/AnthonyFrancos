(function() {
  const nav = document.getElementById('pitchNav');
  const indicator = document.getElementById('scrollIndicator');
  const links = document.querySelectorAll('.pitch-nav-links a');
  const sections = document.querySelectorAll('.page[id]');

  // Show nav after scrolling past cover
  let navVisible = false;
  const coverEl = document.getElementById('cover');

  function checkNav() {
    const scrollY = window.scrollY;
    const coverBottom = coverEl.offsetTop + coverEl.offsetHeight * 0.3;
    if (scrollY > coverBottom && !navVisible) {
      nav.classList.remove('hidden');
      navVisible = true;
    } else if (scrollY <= coverBottom && navVisible) {
      nav.classList.add('hidden');
      navVisible = false;
    }
    // Fade scroll indicator
    if (scrollY > 100) {
      indicator.classList.add('faded');
    } else {
      indicator.classList.remove('faded');
    }
  }

  window.addEventListener('scroll', checkNav, { passive: true });
  checkNav();

  // IntersectionObserver for active link highlighting
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        links.forEach(l => l.classList.remove('active'));
        const activeLink = document.querySelector(`.pitch-nav-links a[data-section="${entry.target.id}"]`);
        if (activeLink) activeLink.classList.add('active');
      }
    });
  }, {
    rootMargin: '-20% 0px -60% 0px',
    threshold: 0
  });

  sections.forEach(section => observer.observe(section));

  // Smooth scroll offset for nav height
  links.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href').slice(1);
      const target = document.getElementById(targetId);
      if (target) {
        const offset = targetId === 'cover' ? 0 : 48;
        window.scrollTo({
          top: target.offsetTop - offset,
          behavior: 'smooth'
        });
      }
    });
  });
})();
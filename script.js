
  function toggleMenu() {
    const nav = document.getElementById('mobile-nav');
    nav.classList.toggle('open');
  }
  function closeMenu() {
    document.getElementById('mobile-nav').classList.remove('open');
  }

  // Scroll reveal
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        // Animate skill bars
        e.target.querySelectorAll('.skill-fill').forEach(bar => {
          bar.style.width = bar.dataset.w + '%';
        });
      }
    });
  }, { threshold: 0.15 });
  reveals.forEach(r => observer.observe(r));

  // Also trigger skill bars when skills section is visible
  const skillBars = document.querySelectorAll('.skill-fill');
  const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.style.width = e.target.dataset.w + '%';
      }
    });
  }, { threshold: 0.3 });
  skillBars.forEach(b => skillObserver.observe(b));

  // Nav shadow on scroll
  window.addEventListener('scroll', () => {
    const nav = document.getElementById('navbar');
    nav.style.boxShadow = window.scrollY > 20 ? '0 4px 30px rgba(0,0,0,0.4)' : 'none';
  });

/* Anchor navigation is native; this adds the current section indicator. */
(() => {
  const header = document.querySelector('.site-header');
  const links = [...document.querySelectorAll('nav a[href^="#"]')];
  const sections = links.map(link => document.querySelector(link.getAttribute('href')));
  const setHeaderHeight = () => document.documentElement.style.setProperty('--header-height', `${header.getBoundingClientRect().height}px`);
  let scheduled = false;
  const update = () => {
    scheduled = false;
    const threshold = header.getBoundingClientRect().height + 90;
    let current = 0;
    sections.forEach((section, i) => { if (section.getBoundingClientRect().top <= threshold) current = i; });
    if (window.scrollY > 0 && Math.ceil(window.scrollY + window.innerHeight) >= document.documentElement.scrollHeight - 2) current = sections.length - 1;
    links.forEach((link, i) => {
      if (i === current) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
  };
  const schedule = () => { if (!scheduled) { scheduled = true; requestAnimationFrame(update); } };
  window.addEventListener('scroll', schedule, {passive: true});
  window.addEventListener('resize', () => { setHeaderHeight(); schedule(); });
  if ('ResizeObserver' in window) new ResizeObserver(setHeaderHeight).observe(header);
  setHeaderHeight();
  update();
})();

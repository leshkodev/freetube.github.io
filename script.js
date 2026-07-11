// Mobile nav toggle. Tiny by design — the rest of the site is pure HTML/CSS.
(function () {
  const toggle = document.querySelector('.nav-toggle');
  const links  = document.getElementById('nav-links');
  if (!toggle || !links) return;

  toggle.addEventListener('click', () => {
    const open = links.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });

  // Close menu on link click (mobile).
  links.querySelectorAll('a').forEach((a) => {
    a.addEventListener('click', () => {
      if (links.classList.contains('open')) {
        links.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  });
})();

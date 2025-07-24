document.addEventListener('DOMContentLoaded', () => {
  // Page fade-in
  const overlay = document.querySelector('.page-transition');
  overlay && setTimeout(() => overlay.classList.add('hidden'), 50);

  // Storm puzzle
  document.querySelectorAll('.piece').forEach(piece => {
    piece.addEventListener('click', () => piece.classList.toggle('flipped'));
  });

  // Confession scroll fade
  document.querySelectorAll('.fade-in').forEach(el => {
    const f = () => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        el.style.opacity = 1;
        el.style.transform = 'translateY(0)';
      }
    };
    window.addEventListener('scroll', f);
    f();
  });

  // Blur clear in safeplace
  const clear = document.querySelector('.clear-on-scroll');
  if (clear) {
    window.addEventListener('scroll', () => {
      const pct = Math.min(1, window.scrollY / 300);
      clear.style.filter = blur(${50 * (1 - pct)}px);
    });
  }

  // Final note reveal
  const btn = document.getElementById('reveal');
  btn && btn.addEventListener('click', () => {
    const hidden = document.getElementById('hidden-note');
    hidden.style.display = hidden.style.display === 'none' ? 'block' : 'none';
  });
});

window.addEventListener('beforeunload', () => {
  const overlay = document.querySelector('.page-transition');
  overlay && overlay.classList.remove('hidden');
});
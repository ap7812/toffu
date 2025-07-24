document.addEventListener('DOMContentLoaded', () => {
  const overlay = document.querySelector('.page-transition');
  if (overlay) setTimeout(() => overlay.classList.add('hidden'), 50);

  const pieces = document.querySelectorAll('.piece');
  pieces.forEach(piece => {
    piece.addEventListener('click', () => {
      piece.classList.toggle('flipped');
    });
  });

  const fades = document.querySelectorAll('.fade-in');
  window.addEventListener('scroll', () => {
    fades.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        el.style.opacity = 1;
        el.style.transform = 'translateY(0)';
      }
    });
  });

  const clear = document.querySelector('.clear-on-scroll');
  window.addEventListener('scroll', () => {
    if (clear) {
      const pct = Math.min(1, window.scrollY / 300);
      clear.style.filter = `blur(${50 * (1 - pct)}px)`;
    }
  });

  const btn = document.getElementById('reveal');
  const hidden = document.getElementById('hidden-note');
  if (btn && hidden) {
    btn.addEventListener('click', () => {
      hidden.style.display = hidden.style.display === 'none' ? 'block' : 'none';
    });
  }
});

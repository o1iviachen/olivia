(() => {
  const toggle = document.querySelector('.theme-toggle');
  if (toggle) {
    toggle.addEventListener('click', () => {
      const next = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
      document.documentElement.dataset.theme = next;
      localStorage.setItem('theme', next);
    });
  }

  document.addEventListener('click', (e) => {
    const a = e.target.closest('a[data-track]');
    if (!a) return;
    if (!window.goatcounter || !window.goatcounter.count) return;
    window.goatcounter.count({
      path: 'click-' + a.dataset.track,
      title: a.dataset.track,
      event: true,
    });
  });
})();

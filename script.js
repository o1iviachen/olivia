(() => {
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

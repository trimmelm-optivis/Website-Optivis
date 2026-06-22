/* Mobiles Navigationsmenü (Hamburger) */
(function () {
  var header = document.querySelector('header');
  var toggle = document.querySelector('.nav-toggle');
  if (!header || !toggle) return;

  toggle.addEventListener('click', function () {
    var open = header.classList.toggle('nav-open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    toggle.setAttribute('aria-label', open ? 'Menü schließen' : 'Menü öffnen');
  });

  // Menü schließen, sobald ein Link gewählt wird
  header.querySelectorAll('.nav-links a').forEach(function (link) {
    link.addEventListener('click', function () {
      header.classList.remove('nav-open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', 'Menü öffnen');
    });
  });
})();

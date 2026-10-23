/* Алекс Кофе: объявление о санитарном дне показываем до 1 ноября 2026 включительно (по Москве), потом прячем */
(function () {
  var n = document.querySelector('[data-note]'); if (!n) return;
  var d = new Date(Date.now() + 3 * 3600e3);
  if (d.getUTCFullYear() > 2026 || (d.getUTCMonth() === 10 && d.getUTCDate() > 1) || d.getUTCMonth() > 10) n.hidden = true;
})();

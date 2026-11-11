// Menu button on phones; left and right arrow keys move between pages.
(function () {
  var menu = document.getElementById('menu'), side = document.getElementById('side');
  menu.addEventListener('click', function () {
    var open = document.body.classList.toggle('menu-open');
    menu.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  document.addEventListener('keydown', function (e) {
    if (e.altKey || e.ctrlKey || e.metaKey || e.shiftKey || /INPUT|TEXTAREA|SELECT/.test(e.target.tagName)) return;
    var link = e.key === 'ArrowLeft' ? document.querySelector('main > .pager a[rel=prev]') : e.key === 'ArrowRight' ? document.querySelector('main > .pager a[rel=next]') : null;
    if (link) location.href = link.href;
  });
  var here = side.querySelector('li.here');
  if (here && here.scrollIntoView) here.scrollIntoView({ block: 'nearest' });
})();

(function () {
  var nav = document.querySelector('.nav');
  if (!nav) return;

  if (!nav.classList.contains('is-solid')) {
    var onScroll = function () {
      nav.classList.toggle('scrolled', window.scrollY > 40);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  var burger = nav.querySelector('.nav__burger');
  if (burger) {
    burger.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      burger.setAttribute('aria-expanded', String(open));
    });
  }
})();

document.addEventListener('DOMContentLoaded', function () {
  var burger = document.getElementById('burger');
  var menu = document.getElementById('mobile-menu');
  if (burger && menu) {
    burger.addEventListener('click', function () {
      menu.classList.toggle('open');
    });
  }
  // Active nav link
  var links = document.querySelectorAll('.nav-links a, .mobile-menu a');
  var current = window.location.pathname.split('/').pop() || 'index.html';
  links.forEach(function (link) {
    var href = link.getAttribute('href');
    if (href === current) link.classList.add('active');
  });
});

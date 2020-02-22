
$(document).ready(function () {

  $('.carousel.carousel-slider').carousel({
    fullWidth: false,
    indicators: true,
    duration: 200
  });

  autoplay();
  function autoplay() {
    $('.carousel').carousel('next');
    setTimeout(autoplay, 4500);
  }

  var el = document.querySelector('.tabs');
  var instance = M.Tabs.init(el, {});

  $(".dropdown-trigger").dropdown();
});
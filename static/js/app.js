
$(document).ready(function () {
  $('.modal').modal();
  $(".dropdown-trigger").dropdown();
  $('.tabs').tabs();
  
  $('.carousel.carousel-slider').carousel({
    fullWidth: false,
    indicators: true,
    duration: 200
  });

 
});


function autoplay() {
  $('.carousel').carousel('next');
  setTimeout(autoplay, 4500);
}
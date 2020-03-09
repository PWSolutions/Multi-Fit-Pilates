
$(document).ready(function () {
  $('.modal').modal();
  $(".dropdown-trigger").dropdown({ hover: true });
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
$(document).ready(function() {

$('.image').mouseenter(function() {
$('.text').addClass('showme');
});

$('.image').mouseleave(function() {
$('.text').removeClass('showme');
});


  $('.number').mouseenter(function() {
  $('.footnote').addClass('showme');
});

$('.number').mouseleave(function() {
  $('.footnote').removeClass('showme');
});



$('.thumbnail').click(function() {
  $(this).removeClass('active');
  $('.bomb').addClass('play');
});



});

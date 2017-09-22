$(document).ready(function() {


// Add jQuery here


$('.nav_pose').click(function(event){
  $('.item').removeClass('show');
  $('.item').addClass('hide');

  $('.item.pose').removeClass('hide');
  $('.item.pose').addClass('show');

  $('.nav_clear').addClass('show');
});


$('.nav_photo').click(function(event){
  $('.item').removeClass('show');
  $('.item').addClass('hide');

  $('.item.photo').removeClass('hide');
  $('.item.photo').addClass('show');

  $('.nav_clear').addClass('show');
});


$('.nav_activities').click(function(event){
  $('.item').removeClass('show');
  $('.item').addClass('hide');

  $('.item.activities').removeClass('hide');
  $('.item.activities').addClass('show');

  $('.nav_clear').addClass('show');
});


$('.nav_attractions').click(function(event){
  $('.item').removeClass('show');
  $('.item').addClass('hide');

  $('.item.attractions').removeClass('hide');
  $('.item.attractions').addClass('show');

  $('.nav_clear').addClass('show');
});


$('.nav_souvenir').click(function(event){
  $('.item').removeClass('show');
  $('.item').addClass('hide');

  $('.item.souvenir').removeClass('hide');
  $('.item.souvenir').addClass('show');

  $('.nav_clear').addClass('show');
});

$('.nav_clothing').click(function(event){
  $('.item').removeClass('show');
  $('.item').addClass('hide');

  $('.item.clothing').removeClass('hide');
  $('.item.clothing').addClass('show');

  $('.nav_clear').addClass('show');
});

$('.nav_clear').click(function(event){
  $('.nav_clear').addClass('hide');
  $('.nav_clear').removeClass('show');

  $('.item').removeClass('hide');
});

$('.nav_thumbnail').click(function(event){
  $('.item').addClass('thumbnail');
});


  $('.nav_large').click(function(event){
    $('.item').removeClass('thumbnail');
});
















  });

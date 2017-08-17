$(document).ready(function() {
  // Add jQuery here

  $(".circle").mouseenter(function() {
    $(".backwards_text, .backwards_text2").addClass("showme");
  });

  $(".circle").mouseleave(function() {
    $(".backwards_text, .backwards_text2").removeClass("showme");
  });



  setTimeout(function () {
        $('.egg').addClass('showme');
      }, 3000);








  var audioBell = document.createElement('audio');
          audioBell.setAttribute('src', 'https://gracehurley.github.io/5posters/assets/images/pushit2.mp3');
          $.get();
          audioBell.addEventListener("load", function() {
            audioBell.play();
          }, true);


    $('.push1').click(function() {
      $('.push1').addClass('test');
            audioBell.play();
         });


     $('.push2').click(function() {
$('.push2').addClass('test');
             audioBell.pause();
         });





  });

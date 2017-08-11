$(document).ready(function() {
  // Add jQuery here

  $(".circle").mouseenter(function() {
    $(".backwards_text, .backwards_text2").addClass("showme");
  });

  $(".circle").mouseleave(function() {
    $(".backwards_text, .backwards_text2").removeClass("showme");
  });



  var audioBell = document.createElement('audio');
          audioBell.setAttribute('src', 'assets/images/PushIt.mp3');
          $.get();
          audioBell.addEventListener("load", function() {
            audioBell.play();
          }, true);


    $('.text_wrap_1').click(function() {
            audioBell.play();
         });


     $('.text_wrap_2').click(function() {
             audioBell.pause();
         });





  });

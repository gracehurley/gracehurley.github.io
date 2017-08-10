$(document).ready(function() {
  // Add jQuery here

  $(".circle").mouseenter(function() {
    $(".backwards_text.backwards_text2").addClass("showme");
  });

  $(".circle").mouseleave(function() {
    $(".backwards_text.backwards_text2").removeClass("showme");
  });

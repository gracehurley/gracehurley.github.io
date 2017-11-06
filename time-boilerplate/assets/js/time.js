$(document).ready(function() {

// Global Vars
  var oddSecond = ' ';
  var oddMinute = ' ';
  var halfSecond = ' ';
  var halfMinute = ' ';

  function checkVideo() {

// change video1 to be different video
    if($('.video1').css('display') == 'block')
    {
      $(".video1 .video1_content")[0].play();
    }
// change video1 to be different video
    else if ($('.video1').css('display') == 'none')
    {
      $(".video1 .video1_content")[0].pause();
    }


    // change video1 to be different video
        if($('.video2').css('display') == 'block')
        {
          $(".video2 .video2_content")[0].play();
        }
    // change video1 to be different video
        else if ($('.show_video2').css('display') == 'none')
        {
          $(".video2 .video2_content")[0].pause();
        }


        // change video1 to be different video
            if($('.video3').css('display') == 'block')
            {
              $(".video3 .video3_content")[0].play();
            }
        // change video1 to be different video
            else if ($('.video3').css('display') == 'none')
            {
              $(".video3 .video3_content")[0].pause();
            }


            // change video1 to be different video
                if($('.video4').css('display') == 'block')
                {
                  $(".video4 .video4_content")[0].play();
                }
            // change video1 to be different video
                else if ($('.video4').css('display') == 'none')
                {
                  $(".video4 .video4_content")[0].pause();
                }


                // change video1 to be different video
                    if($('.video5').css('display') == 'block')
                    {
                      $(".video5 .video5_content")[0].play();
                    }
                // change video1 to be different video
                    else if ($('.video5').css('display') == 'none')
                    {
                      $(".video5 .video5_content")[0].pause();
                    }


                    // change video1 to be different video
                        if($('.video6').css('display') == 'block')
                        {
                          $(".video6 .video6_content")[0].play();
                        }
                    // change video1 to be different video
                        else if ($('.video6').css('display') == 'none')
                        {
                          $(".video6 .video6_content")[0].pause();
                        }


                        // change video1 to be different video
                            if($('.video7').css('display') == 'block')
                            {
                              $(".video7 .video7_content")[0].play();
                            }
                        // change video1 to be different video
                            else if ($('.video7').css('display') == 'none')
                            {
                              $(".video7 .video7_content")[0].pause();
                            }


                            // change video1 to be different video
                                if($('.video8').css('display') == 'block')
                                {
                                  $(".video8 .video8_content")[0].play();
                                }
                            // change video1 to be different video
                                else if ($('.video8').css('display') == 'none')
                                {
                                  $(".video8 .video8_content")[0].pause();
                                }


                                // change video1 to be different video
                                    if($('.video9').css('display') == 'block')
                                    {
                                      $(".video9 .video9_content")[0].play();
                                    }
                                // change video1 to be different video
                                    else if ($('.video9').css('display') == 'none')
                                    {
                                      $(".video9 .video9_content")[0].pause();
                                    }


                                    // change video1 to be different video
                                        if($('.video10').css('display') == 'block')
                                        {
                                          $(".video10 .video10_content")[0].play();
                                        }
                                    // change video1 to be different video
                                        else if ($('.video10').css('display') == 'none')
                                        {
                                          $(".video10 .video10_content")[0].pause();
                                        }

  }

  

// Update time
  function update() {
    var quarter = moment().quarter();
    var momentSecond = moment().second();
    var momentMinute = moment().minute();
    var momentHour= moment().format('h').toLowerCase();
    var momentDay = moment().format('dddd').toLowerCase();
    var momentMonth = moment().format('MMMM').toLowerCase();
    var momentYear = moment().format('YYYY').toLowerCase();
    var momentAMPM = moment().format('A').toLowerCase();

    function oddOrEvenS(momentSecond){
      if(momentSecond % 2 === 0) {oddSecond = 'oddS';}
      else {oddSecond = 'evenS';}
    }

    function oddOrEvenM(momentMinute){
      if(momentMinute % 2 === 0) {oddMinute = 'evenM';}
      else {oddMinute = 'oddM';}
    }

    function checkHalfSecond(momentSecond){
      if(momentSecond < 30) {halfSecond = 'halfM';}
      else {halfSecond = 'fullM';}
    }

    function checkHalfMinute(momentMinute){
      if(momentMinute < 5) {halfMinute = 'every5'; checkVideo();}
      else if(momentMinute < 10){halfMinute = 'every10';checkVideo();}
      else if(momentMinute < 15){halfMinute = 'every15';checkVideo();}
      else if(momentMinute < 20){halfMinute = 'every20';checkVideo();}
      else if(momentMinute < 25){halfMinute = 'every25';checkVideo();}
      else if(momentMinute < 30){halfMinute = 'every30';checkVideo();}
      else if(momentMinute < 35){halfMinute = 'every35';checkVideo();}
      else if(momentMinute < 40){halfMinute = 'every40';checkVideo();}
      else if(momentMinute < 45){halfMinute = 'every45';checkVideo();}
      else if(momentMinute < 50){halfMinute = 'every50';checkVideo();}
      else {halfMinute = 'every100';checkVideo();}
    }

    // Check if odd, even, quaterpast
    oddOrEvenS(momentSecond);
    checkHalfSecond(momentSecond);
    oddOrEvenM(momentMinute);
    checkHalfMinute(momentMinute);

    var timeAll = ['s' + momentSecond, 'm' + momentMinute, 'h' + momentHour, momentAMPM, momentDay, momentMonth, 'y' + momentYear, oddSecond, oddMinute, halfSecond, halfMinute];
    var timeClass = timeAll.join(' ');

    // Add classes
    $('body').attr('class', timeClass);

    // Add format
    $('.time').html(moment().format('h:mm:ss A'));
  };

  var intervalId = setInterval(update, 100);
  intervalId

// Add pause
  $('button#pause').click(function(){
    clearInterval(intervalId);
    $('textarea#timeClasses').show();
  });

});

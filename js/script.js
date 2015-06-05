 $(document).ready(function () {
     $('.zoom').hover(function () {
         $(this).addClass('enhance');
         $(this).addClass('zindex');

     }, function () {
         $(this).removeClass('enhance');
         $(this).removeClass('zindex');
     });




     //when mouse enters the .zoom div, the audio src in #mySoundClip is played
     var audio = $("#mySoundClip")[0];
     $(".zoom").mouseenter(function () {
         audio.play();
     });

 });
 $(document).ready(function () {
     $('.zoom').click(function () {
         $(this).toggleClass('enhance');
     });

     //when mouse enters the .zoom div, the audio src in #mySoundClip is played
     var audio = $("#mySoundClip")[0];
     $(".zoom").mouseenter(function () {
         audio.play();
     });

     //show info about HTML element when clicked on
     $('.zoom').click(function () {
         $('.show-info', $(this)).toggle(700);
     });


     //script to animate divs falling from the top of the page at load
     //     $(function() {
     //      setTimeout (function() {
     //    var $dropRow = $('.dropRow');
     //    var mythis = $('#holder');
     //    // get position of the element we clicked on
     //    var offset = mythis.offset();
     //    
     //    // get width/height of click element
     //    var h = mythis.outerHeight();
     //    var w = mythis.outerWidth();
     //    
     //    // get width/height of drop element
     //    var dh = $dropRow.outerHeight();
     //    var dw = $dropRow.outerWidth();
     //    
     //    // determine middle position
     //    var initLeft = offset.left + ((w/2) - (dw/2));
     //
     //    // animate drop
     //    $dropRow.css({
     //            left: initLeft,
     //            top: $(window).scrollTop() - dh,
     //            opacity: 0,
     //            display: 'block'
     //        }).animate({
     //            left: initLeft,
     //            top: offset.top - dh,
     //            opacity: 1
     //        }, 800, 'easeOutBounce');
     //   },500);
     //});
 });
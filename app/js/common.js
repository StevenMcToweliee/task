$(document).ready(function() {

  //autoheight
  $(".sections-wrapper, .section").css("min-height", $(window).height());
  

  //menu
  $(".toggle-menu").click(function() {
        $(".sw").toggleClass("active");
    });

 // Sets viewScroller
            var fixednav = 2;
            $('.mainbag').viewScroller({
                useScrollbar: false,
                changeWhenAnim: false,
                afterChange: function() { // Defines own callback after views change
                  
                  if (fixednav & 1) {
                    $(".header-wrapper").removeClass("header-fixed-bg");
                     
                  }
                  else {
                    $(".header-wrapper").addClass("header-fixed-bg");
                    
                  }
                 
                  fixednav++;
                }
            });


  //scroll to element
  $('.go_to').click( function(){ 
      var scroll_el = $(this).attr('href'); 
      if ($(scroll_el).length != 0) { 
        $('html, body').animate({ scrollTop: $(scroll_el).offset().top}, 500); 
         }
      return false;
  });

 


 //animate
$(".sw").animated("fadeInDown", "fadeInDown");
$(".top-nav-list").animated("fadeInDown", "fadeInDown");
$(".text-title").animated("fadeInRight", "fadeInRight");


});

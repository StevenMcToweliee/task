$(document).ready(function() {

  //autoheight
  $(".sections-wrapper, .section").css("height", $(window).height());


  //menu
  $(".toggle-menu").click(function() {
        $(".sw").toggleClass("active");
    });




  //scroll to element
  $('.go_to').click( function(){ 
      var scroll_el = $(this).attr('href'); 
      if ($(scroll_el).length != 0) { 
        $('html, body').animate({ scrollTop: $(scroll_el).offset().top}, 500); 
         }
      return false;
  });

  //fixed menu
 $(window).scroll(function () {
    var top_show = 200;
     if ($(this).scrollTop() > top_show) $(".header-wrapper").addClass("header-fixed-bg");
     else $(".header-wrapper").removeClass("header-fixed-bg");
});

 //animate
$(".sw").animated("fadeInDown", "fadeInDown");
$(".top-nav-list").animated("fadeInDown", "fadeInDown");
$(".text-title").animated("fadeInRight", "fadeInRight");
$(".slider-title h2").animated("fadeInDown", "fadeInDown");
$(".slider-main").animated("fadeInUp", "fadeInUp");

});

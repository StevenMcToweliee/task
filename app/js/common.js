$(document).ready(function() {


	$(".sections-wrapper, .section").css("height", $(window).height());


          //scroll to element
    $('.go_to').click( function(){ // ловим клик по ссылке с классом go_to
  var scroll_el = $(this).attr('href'); // возьмем содержимое атрибута href, должен быть селектором, т.е. например начинаться с # или .
        if ($(scroll_el).length != 0) { // проверим существование элемента чтобы избежать ошибки
      $('html, body').animate({ scrollTop: $(scroll_el).offset().top}, 500); // анимируем скроолинг к элементу scroll_el
        }
      return false; // выключаем стандартное действие
    });


  var top_show = 200;
 $(window).scroll(function () { // При прокрутке попадаем в эту функцию
     if ($(this).scrollTop() > top_show) $('.header-wrapper').addClass("header-fixed-bg");
     else $('.header-wrapper').removeClass("header-fixed-bg");
   });
});

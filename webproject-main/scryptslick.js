// JavaScript source code
/*$(function(){
  $('.slick-track').slick({
      
      slidesToShow:1,
      slidesToScroll:1,
      adaptiveHeight: true,
      prevArrow: '.slick-prev ',
      nextArrow: '.slick-next',
     
  });
})
*/
$('.rewiews_slider').on('afterChange',function(event, slick, currentSlide, nextSlide){
  $('.review-number').text('0'+(currentSlide+1));
})
$(document).on('ready', function() {
  $('.rewiews_slider').slick({
    infinite: true,
    adaptiveHeight: true,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '.review-prev ',
    nextArrow: '.review-next', 
    swipe: false, dots: false,
  });
});


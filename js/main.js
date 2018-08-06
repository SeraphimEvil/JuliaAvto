$(document).ready(function(){
  var swipersList = $(".swiper-container");
  
  swipersList.each(function (index, item) {
    var avtoSwiper = new Swiper(item, {
      speed: 400,
      spaceBetween: 5,
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }
    });
  });
  $('.js-popup').on('click', function () {
    $('.popup').addClass('popup--show');
    $('body').addClass('body-hidden');
  });
  
  
  $('.popup').on('click', function(event) {
    var thisPopup = this;
    var thisTarget = event.target;
  
    if (thisPopup === thisTarget) {
      $('.popup').removeClass('popup--show');
      $('body').removeClass('body-hidden');
    }
  });
});
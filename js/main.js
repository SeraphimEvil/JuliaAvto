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
      }
    });
  });
});
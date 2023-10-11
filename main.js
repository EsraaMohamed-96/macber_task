$(document).ready(function() {


  $(".navbar-icon").click(function() {
    $("#navbarLinks").toggleClass("responsive");
  });

  var swiper = new Swiper('.mySwiper', {
    slidesPerView: getSlidesPerView(),
    spaceBetween: 30,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });

  $(window).on('resize', function() {
    swiper.params.slidesPerView = getSlidesPerView();
    swiper.update();
  });

  function getSlidesPerView() {
    var screenWidth = $(window).width();
    if (screenWidth < 768) {
      return 1.5;
    } else if (screenWidth < 992) {
      return 3.2;
    } else if (screenWidth < 1200) {
      return 3.2;
    } else {
      return 4.5;
    }
  }
});

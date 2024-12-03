const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    pagination: {
      el: '.swiper-pagination',
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      },
      spaceBetween: 20,
      slidesPerView: 3,
      speed: 2000,
      slidesPerGroup: 3,
  });
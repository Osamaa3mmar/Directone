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
      breakpoints: {
        // when window width is >= 320px
        500: {
          slidesPerView: 1,
          slidesPerGroup: 1,
        },
        // when window width is >= 480px
        720: {
          slidesPerView: 2,
          spaceBetween: 30,
          slidesPerGroup: 2,
        },
        // when window width is >= 640px
        900: {
          slidesPerView: 3,
          spaceBetween: 20
        }
      }
  });
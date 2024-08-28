import './assets/scss/all.scss';
import 'bootstrap/dist/js/bootstrap.min.js';

console.log("Hello world!");

const swiper = new Swiper('.article-swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  spaceBetween: 48,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination-custom',
    type: 'fraction'
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-next',
    prevEl: '.swiper-prev',
  },

  breakpoints: {
    375: {
      slidesPerGroup: 1,
      slidesPerView: 1,
    },
    768: {
      slidesPerGroup: 2,
      slidesPerView: 2
    }
  }
});

const hotSwiper = new Swiper('.hots-swiper', {
  direction: 'horizontal',
  loop: true,
  spaceBetween: 24,
  hashNavigation: true
})

const readSwiper = new Swiper('.read-swiper', {
  direction: 'horizontal',
  loop: false,
  breakpoints: {
    375: {
      slidesPerView: 1,
    },
    768: {
      grid: {
        fill: 'column',
        rows: 3,
      },
    }
  },
  spaceBetween: 24
})
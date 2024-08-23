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
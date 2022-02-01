
// swiper block-tabs
const swiper1 = new Swiper('.swiper1', {
  // Optional parameters
  direction: 'horizontal',
  initialSlide: 0,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },
});

var buttons = document.getElementsByClassName('buttontabs')
swiper1.on('slideChange', function () {
  for(var x of buttons){
    x.classList.remove("activetwo");
  }
  var currentSlide = swiper1.activeIndex;
  var activeButton = buttons[currentSlide];
  activeButton.classList.add("activetwo");
});
// swiper block-tabs


// swiper block pricing
const swiper2 = new Swiper('.swiper2', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    1000: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 20,
      allowSlideNext: false,
      allowSlidePrev: false
    },

    600: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween:0,
      allowSlideNext: true,
      allowSlidePrev: true
    }
  }
});
// end of swiper block pricing

// swiper block customers
const swiper3 = new Swiper('.swiper3', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    1000: {
      slidesPerView: 3,
      slidesPerGroup: 1,
      spaceBetween: 20,
      allowSlideNext: true,
      allowSlidePrev: true
    },
    600: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 0,
      allowSlideNext: true,
      allowSlidePrev: true
    },
  400: {
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 0,
    allowSlideNext: true,
    allowSlidePrev: true
  },
  350: {
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 0,
    allowSlideNext: true,
    allowSlidePrev: true
  }
 }
});
// end of swiper block customers

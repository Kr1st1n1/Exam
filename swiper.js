const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  initialSlide: 0,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  }
});

var buttons = document.getElementsByClassName('buttontabs')
swiper.on('slideChange', function () {
  for(var x of buttons){
    x.classList.remove("activetwo");
  }
  var currentSlide = swiper.activeIndex;
  var activeButton = buttons[currentSlide];
  activeButton.classList.add("activetwo");
});


"use strict";

// block -top
var burger = document.getElementById("burger");
var menu = document.getElementsByClassName("link-content")[0];
burger.addEventListener("click", function(){
  menu.classList.toggle("active");
});
// end of block top

// start of block-tabs-swiper
var buttons = document.getElementsByClassName('buttontabs');
for (var x of buttons){
  x.addEventListener("click", function(){
    for(var y of buttons){
      y.classList.remove("activetwo");
    }
    this.classList.add("activetwo");
    var index = this.getAttribute("index");
    swiper1.slideTo(index, 1000);
  });
}
// end of block-tabs-swiper

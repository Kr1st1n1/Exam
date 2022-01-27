
"use strict";

// block -top

var burger = document.getElementById("burger");
var sideNav = document.getElementsByClassName("side-menu")[0];
var links = document.getElementsByClassName('link');

burger.addEventListener("click", function(){
  sideNav.classList.toggle("width");
  this.classList.toggle("rotateZ");
});

window.addEventListener("resize", function(){
  sideNav.classList.remove("width");
  burger.classList.remove("rotateZ");
  for(var x of links){
    x.classList.remove("active");
  }
});

for (var x of links){
  x.addEventListener("click", function(){
    for(var x of links){
      x.classList.remove("active");
    }
    this.classList.add("active");
  });
}

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
    // var index = document.querySelector(".active").getAttribute("index");
    swiper.slideTo(index, 1000);
  });
}

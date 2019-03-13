// header
const headTitle = document.querySelector(".header-title");
const headContent = document.querySelector(".header-content");
const headBtn = document.querySelector(".header-btn");

TweenMax.from(headTitle, 1, { x: 200 }, { opacity: 0, delay: 0.5 });

TweenMax.from(headContent, 1, { opacity: 0, delay: 1 });
TweenMax.from(headBtn, 1, { opacity: 0, delay: 1.5 });

headBtn.addEventListener("mouseover", function() {
  TweenMax.fromTo(headBtn, 1, { y: -10 });
});

//Mission

const missionImg = document.querySelectorAll(".mission-img img");

missionImg.forEach(function(img) {
  TweenMax.from(img, 3, { delay: 2.5, opacity: 0 });
  TweenMax.from(img, 3, { delay: 2.5, x: 100 });
});

//Feature

const icons = document.querySelectorAll(".service img");

icons.forEach(function(icon) {
  TweenMax.from(icon, 4, { delay: 3, opacity: 0 });
});

//Testimonial

const testContent = document.querySelectorAll(".testimonial-content");

testContent.forEach(function(content) {
  TweenMax.from(content, 2, { delay: 4, opacity: 0 });
  TweenMax.from(content, 2, { delay: 4, y: -30 });
});

const testPic = document.querySelectorAll(".content-img_caption");

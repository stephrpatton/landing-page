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

// Mission

const missionImg = document.querySelector(".mission-img");

TweenMax.from(missionImg, 1, { x: 200 }, { opacity: 0, delay: 1.5 });

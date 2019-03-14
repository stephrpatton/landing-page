class Testimonials {
  constructor(test) {
    this.test = test;
    // console.log(test);
    this.testExpand = test.querySelector(".content-header");
    this.testPara = test.querySelector(".content-para");
    this.testImg = test.querySelector(".content-img");
    this.testExpand.addEventListener("click", () => this.openTest());
    this.test.addEventListener("mouseleave", () => this.closeTest());
  }

  openTest() {
    TweenMax.to(this.testPara, 0.5, { opacity: 1 });
    TweenMax.to(this.testExpand, 0.5, { marginTop: 0 });
  }

  closeTest() {
    TweenMax.to(this.testPara, 0.5, { opacity: 0 });
    TweenMax.to(this.testExpand, 0.5, { marginTop: "2rem", delay: 0.5 });
    // this.stopPropagation();
  }
}

let testimonialContent = document.querySelectorAll(".testimonial-content");

testimonialContent.forEach(function(content) {
  return new Testimonials(content);
});

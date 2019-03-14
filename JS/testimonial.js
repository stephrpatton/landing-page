class Testimonials {
  constructor(test) {
    this.test = test;
    // console.log(test);
    this.testHeader = test.querySelector(".content-header");
    this.button = test.querySelector(".see-more");
    this.testPara = test.querySelector(".content-para");
    this.testImg = test.querySelector(".content-img");
    this.button.addEventListener("click", () => this.openTest());
    // this.test.addEventListener("mouseleave", () => this.closeTest());
  }

  openTest() {
    if ((this.testPara.style.opacity = "0")) {
      TweenMax.to(this.button, 0.2, { display: "none" });
      TweenMax.to(this.testPara, 0.5, {
        height: "50px",
        opacity: 1,
        delay: 1
      });
      TweenMax.to(this.testImg, 0.6, {
        display: "inline-block",
        paddingRight: "3rem"
      });
      TweenMax.to(this.test, 0.5, { width: "80%" });

      // TweenMax.to(this.testHeader, 0.2, { x: -190, delay: 0.8 });
    }
  }

  // closeTest() {
  //   TweenMax.to(this.testPara, 0.5, { opacity: 0 });

  //   TweenMax.to(this.button, 0.5, { opacity: 1 });
  // }
}

let testimonialContent = document.querySelectorAll(".testimonial-content");

testimonialContent.forEach(function(content) {
  return new Testimonials(content);
});

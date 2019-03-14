class Testimonials {
  constructor(test) {
    this.test = test;
    this.testHeader = test.querySelector(".content-header");
    this.button = test.querySelector(".see-more");
    this.testPara = test.querySelector(".content-para");
    this.testImg = test.querySelector(".content-img");

    //Click Event
    this.button.addEventListener("click", () => this.openTest());
  }

  openTest() {
    if ((this.testPara.style.opacity = "0")) {
      TweenMax.to(this.button, 0.2, { display: "none" });
      TweenMax.to(this.testPara, 0.8, {
        height: "auto",
        opacity: 1,
        delay: 0.5
      });

      TweenMax.to(this.testImg, 0.8, {
        display: "inline-block",
        paddingRight: "3rem"
      });
      TweenMax.to(this.test, 0.4, { width: "80%" });
    }
  }
}

let testimonialContent = document.querySelectorAll(".testimonial-content");

testimonialContent.forEach(function(content) {
  return new Testimonials(content);
});

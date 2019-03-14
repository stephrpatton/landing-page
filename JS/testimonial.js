class Testimonials {
  constructor(test) {
    this.test = test;
    // console.log(test);
    this.testExpand = test.querySelector(".content-header");
    this.testPara = test.querySelector(".content-para");
    this.testImg = test.querySelector(".content-img");
    this.testExpand.addEventListener("click", () => this.openTest());
  }

  openTest() {
    if (this.testPara.style.opacity === "0") {
      //   this.testPara.style.display = "flex";

      TweenMax.to(this.testPara, 0.2, { opacity: 1 });
      TweenMax.to(this.testExpand, 0.2, { marginTop: 0 });
    } else {
      TweenMax.to(this.testPara, 0.5, { opacity: 0 });
      TweenMax.to(this.testExpand, 0.2, { marginTop: "1rem" });
    }
  }
}

let testimonialContent = document.querySelectorAll(".testimonial-content");

testimonialContent.forEach(function(content) {
  return new Testimonials(content);
});

class Container {
  constructor(element) {
    this.element = element;
    this.pic = element.querySelector(".about-us-pic");
    this.name = element.querySelector(".about-us-name");

    this.pic.addEventListener("mouseover", () => {
      this.animatePic();
    });
    this.pic.addEventListener("mouseleave", () => {
      this.animateStop();
    });
  }

  animatePic() {
    TweenMax.to(this.pic, 0.5, { opacity: 0.7 });
    TweenMax.to(this.name, 0.5, {
      y: -50,
      fontWeight: 800,
      background: "black",
      borderRadius: "10px"
    });
  }

  animateStop() {
    TweenMax.to(this.pic, 0.5, { opacity: 1 });
    TweenMax.to(this.name, 0.5, {
      y: 2,
      fontWeight: 500,
      background: "none",
      borderRadius: 0
    });
  }
}

let aboutUsContent = document
  .querySelectorAll(".about-us-content")
  .forEach(aboutus => new Container(aboutus));

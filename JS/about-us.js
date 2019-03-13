class Divs {
  constructor(element) {
    this.element = element;
    this.name = document.querySelector(".about-name");
    this.title = document.querySelector(".about-title");
    this.img = document.querySelector(".about-us-pic");
    this.links = document.querySelector(".links");
  }

  inputData() {
    this.name.innerHTML = PersonDetail.name;
    console.log(this.name);
  }
}

class PersonDetail extends Divs {
  constructor(user) {
    super(user);
    this.user = user;
    this.name = user.name;
    this.title = user.title;
    this.img = user.img;
    this.links = user.links;
  }
}

const adam = new PersonDetail({
  name: "Adam McKenney",
  title: "Project Manager",
  img: "../img/about-us.jpg",
  links: "github.com"
});

const josh = new PersonDetail({
  name: "Josh Disney",
  title: "Backed Architect",
  img: "../img/about-us.jpg",
  links: "github.com"
});

const erick = new PersonDetail({
  name: "Erick Todd",
  title: "Front-end Architect",
  img: "../img/about-us.jpg",
  links: "github.com"
});

const borja = new PersonDetail({
  name: "Borja Soler",
  title: "Front-end Architect",
  img: "../img/about-us.jpg",
  links: "github.com"
});

const steph = new PersonDetail({
  name: "Stephanie Patton",
  title: "UI Architect",
  img: "../img/about-us.jpg",
  links: "github.com"
});

let aboutDiv = document
  .querySelectorAll(".about-us-content")
  .forEach(function(about) {
    new Divs(about);
  });

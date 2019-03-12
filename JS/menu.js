class Menu {
  constructor(element) {
    this.element = element;
    this.button = element.querySelector("#menu-btn");
    this.menuContent = element.querySelector(".menu");

    this.button.addEventListener("click", () => {
      this.toggleMenu();
    });
    window.addEventListener("click", () => {
      this.removeMenu();
    });
  }

  toggleMenu() {
    this.menuContent.classList.toggle("menu-hidden");
    TweenMax.to(
      this.menuContent,
      2,
      { ease: Bounce.easeOut, y: 20 },
      { opacity: 0 }
    );
  }

  removeMenu() {
    if (this.menuContent.classList.contains("menu-hidden")) {
      this.menuContent.classList.add("menu-hidden");
    }
  }
}

let showMenu = document
  .querySelectorAll(".main-menu")
  .forEach(show => new Menu(show));

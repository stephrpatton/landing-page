const testPicture = document.querySelectorAll(".content-img_caption");
const contentTest = document.querySelectorAll(".content-text");

testPicture.forEach(function(pic) {
  pic.addEventListener("click", () => {
    if (contentTest.style.display === "none") {
      contentTest.style.display = "block";
    } else {
      contentTest.style.display = "none";
    }
  });
});

const hamburger = document.getElementById("hamburger");
const iconClose = document.getElementById("iconClose");
const navbar = document.getElementsByClassName("navbar");
const overlay = document.getElementsByClassName("overlay");

const toggleClass = (obj) => {
  obj.classList.toggle("show");
  //   console.log(obj[0].classList);
};

hamburger.addEventListener("click", () => {
  toggleClass(navbar[0]);
  toggleClass(overlay[0]);
});

iconClose.addEventListener("click", () => {
  toggleClass(navbar[0]);
  toggleClass(overlay[0]);
});

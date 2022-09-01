const sliderContent = document.getElementsByClassName("slider-content")[0];
const hero = document.getElementsByClassName("hero");
let nbSlide = hero.length;
let pos = 0;

document.onkeydown = function (evt) {
  if (evt.key === "ArrowRight") next();
  if (evt.key === "ArrowLeft") prev();
};

function next() {
  pos -= 100;

  if (pos < (-nbSlide + 1) * 100) {
    sliderContent.style.left = 0 + "vw";
    pos = 0;
  } else {
    sliderContent.style.left = pos + "vw";
  }
}

function prev() {
  pos += 100;

  if (pos > 0) {
    sliderContent.style.left = `${(-nbSlide + 1) * 100}vw`;
    pos = (-nbSlide + 1) * 100;
  } else {
    sliderContent.style.left = pos + "vw";
  }
}

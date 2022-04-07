let slideIndex = 1;

// slideshow ids
const slideIndices = {};

// get all slideshow containers
let test = document.getElementsByClassName("slideshow-container");

// init the slideIndices as objects with slideshow-container id's as keys
Object.entries(test).forEach(([key, value]) => {
  slideIndices[value.id] = 1;
});

// Next/previous controls
const plusSlides = (n) => {
  showSlides((slideIndex += n));
  // console.log("plusSlide slideIndex:", slideIndex);
};

// Thumbnail image controls
// onClick event handler for the dots.
const currentSlide = (dot) => {
  let id = dot.id;
  let slideShowId = dot.parentNode.parentNode.id;
  console.log(id, slideShowId);
  // showSlides((slideIndex = n));
};

// create the navigation dots undernearth the slideshow
// returns one slideShowDotContainer div with x number of slideShowDot spans inside
const createDots = (amount) => {
  const container = document.createElement("div");
  container.classList.add("slideShowDotContainer");

  for (let i = 1; i <= amount; i++) {
    let dot = document.createElement("span");
    dot.classList.add("slideShowDot");
    dot.setAttribute("id", i);
    // dot.setAttribute("onClick", "currentSlide(this)");
    dot.addEventListener("click", (event) => currentSlide(event));
    container.appendChild(dot);
  }

  return container;
};

console.log(createDots(4));

// new function
// add dots to slideShows

const showSlides = (n) => {
  let slides = document.getElementsByClassName("mySlides");

  // let dots = document.getElementsByClassName("slideShowDot");

  // we only do this for the current ID.

  if (n > slides.length) slideIndex = 1;
  if (n < 1) slideIndex = slides.length;

  // reset slides
  // go through all the slides and set display to "none"
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // reset dots
  // go through all the dots and replace the any avtive class with ""
  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" slideShowActive", "");
  }

  // show the current img
  // set the current slideIndex to "block"
  slides[slideIndex - 1].style.display = "block";

  // show the current dot
  // set the current slideIndex to "block"
  dots[slideIndex - 1].className += " slideShowActive";
};

// {
//   0: "slide1",
//   1: "slide2",
//   2: "slide3",
// }

// getElementbyID instead
// then do almost the same thing

// so instead of n i need to pass an id
showSlides(slideIndex);

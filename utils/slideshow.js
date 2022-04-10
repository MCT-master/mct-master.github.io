const INIT_SLIDE_ID = 1;
const SLIDE_INDICES = {};

///// USER ACTION HANDLERS /////////

const initSlideShows = () => {
  // get all slideshow containers in a post
  let slideContainers = document.getElementsByClassName("slideshow-container");

  // if there are no slideshows, we return
  if (!slideContainers.length) return;

  // add Next and Previous navigation arrows to each slideContainer
  Object.values(slideContainers).forEach(slideContainer => {
    const { next, prev } = createNextPrevArrows();
    slideContainer.appendChild(next);
    slideContainer.appendChild(prev);
  });

  // add appropriate number of dots underneath each slideshow container
  Object.values(slideContainers).forEach(slideContainer => {
    let slides = getClassElemsFromContainer(slideContainer, "div", "mySlides");
    let dotContainer = createDotsContainer(slides.length, slideContainer.id);

    // add a dot container right after each slideContainer
    insertAfter(dotContainer, slideContainer);

    // set the max number of items in the slideshows
    SLIDE_INDICES[slideContainer.id] = {};
    SLIDE_INDICES[slideContainer.id].max = slides.length;
  });

  // reset the slidecontainers to show the INIT_SLIDE_ID img
  Object.values(slideContainers).forEach(slideContainer => {
    updateSlideIndex(slideContainer.id, INIT_SLIDE_ID);
    showSlide(slideContainer);
  });
};

// Next/previous controls
// update the SLIDE_INDICES and show the desired slideId
const handleNextClick = event => {
  const slideContainerId = event.target.parentNode.id;
  let slideId = SLIDE_INDICES[slideContainerId]["value"];
  updateSlideIndex(slideContainerId, slideId + 1);

  // show the slide and dot.
  let slideContainer = document.getElementById(slideContainerId);
  showSlide(slideContainer);
};

// update the SLIDE_INDICES and show the desired slideId
const handlePrevClick = event => {
  const slideContainerId = event.target.parentNode.id;
  let slideId = SLIDE_INDICES[slideContainerId]["value"];
  updateSlideIndex(slideContainerId, slideId - 1);

  // show the slide and dot.
  let slideContainer = document.getElementById(slideContainerId);
  showSlide(slideContainer);
};

// onClick event handler for the dots under the slideshow
// update the SLIDE_INDICES and show the desired slideId
const handleDotClick = dot => {
  let slideId = Number(dot.target.id);
  let dotContainer = dot.target.parentNode;
  let slideContainerId = dotContainer.getAttribute("slideshowid");
  updateSlideIndex(slideContainerId, slideId);

  // show the slide and dot.
  let slideContainer = document.getElementById(slideContainerId);
  showSlide(slideContainer);
};

//////////////////UTILS FUNCTIONS///////////////////////

// based on a slideContainer and the SLIDE_INDICES object, show the desired img and dot on page
const showSlide = slideContainer => {
  let slides = getSlides(slideContainer);
  let dots = getDots(slideContainer.id);

  resetSlides(slides);
  resetDots(dots);

  setSlide(slides, SLIDE_INDICES[slideContainer.id].value);
  setDot(dots, SLIDE_INDICES[slideContainer.id].value);
};

// update the value properties in the SLIDE_INDICE object
const updateSlideIndex = (slideContainerId, slideId) => {
  let max = SLIDE_INDICES[slideContainerId].max;
  let val = slideId;

  if (val > max) val = 1;
  if (val < 1) val = max;

  SLIDE_INDICES[slideContainerId].value = val;
  //   console.log(SLIDE_INDICES);
};

// insert a newNode directly after the refenceNode
const insertAfter = (newNode, referenceNode) => {
  referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
};

const createNextPrevArrows = () => {
  const next = document.createElement("a");
  next.classList.add("slideShowNext");
  next.innerHTML = "&#10095;";
  next.addEventListener("click", handleNextClick);
  next.removeEventListener("beforeunload", handleNextClick);

  const prev = document.createElement("a");
  prev.classList.add("slideShowPrev");
  prev.innerHTML = "&#10094;";
  prev.addEventListener("click", handlePrevClick);
  prev.removeEventListener("beforeunload", handlePrevClick);

  return { next, prev };
};

// create the navigation dots undernearth a slideshow
// returns one slideShowDotContainer div with x number of slideShowDot spans inside
const createDotsContainer = (amount, slideContainerId) => {
  const dotContainer = document.createElement("div");
  dotContainer.classList.add("slideShowDotContainer");
  // set the dotContainer ID so we know which slideshow the dot container is for.
  dotContainer.setAttribute("slideshowid", slideContainerId);

  // create slideShowDot spans and put them in the container
  for (let i = 1; i <= amount; i++) {
    let dot = document.createElement("span");
    dot.classList.add("slideShowDot");
    dot.setAttribute("id", i);
    dot.addEventListener("click", handleDotClick);
    dot.removeEventListener("beforeunload", handleDotClick);

    dotContainer.appendChild(dot);
  }

  return dotContainer;
};

// return children elements (targetElems) from a container that have a certain class (targetClassName).
const getClassElemsFromContainer = (
  container,
  targetElems,
  targetClassName
) => {
  let container_elems = container.getElementsByTagName(targetElems);
  let relevant_elems = Object.values(container_elems).filter(div =>
    div.classList.value.includes(targetClassName)
  );
  return relevant_elems;
};

// reset slides in a slideshow
// set the display property to "none" on all slides
// takes an object of class "mySlides" div elements
const resetSlides = slides => {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
};

// reset dots in a slideshow
// replace the " slideShowActive" class with "" on all dots
// takes an object of span elements there were in the "slideShowDotContainer" div
const resetDots = dots => {
  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" slideShowActive", "");
  }
};

// returns an object of class "mySlides" div elements
const getSlides = slideContainer => {
  let slides = getClassElemsFromContainer(slideContainer, "div", "mySlides");
  return slides;
};

// retuns an object of span elements in the "slideShowDotContainer" div
const getDots = slideContainerId => {
  let queryName = "[slideshowid=" + slideContainerId + "]";
  let dotsContainer = document.querySelectorAll(queryName);
  let dotsCollection = dotsContainer[0].getElementsByTagName("span");
  let dots = [...dotsCollection];

  return dots;
};

// show the current slideID img in a slideshow
// takes a slides object of class "mySlides" div elements
// and slideID of the current slide
const setSlide = (slides, slideId) => {
  slides[slideId - 1].style.display = "block";
};

// set the current slideID dot to "active" in the slideshow
// takes an object of span elements in the "slideShowDotContainer" div
// and slideID of the current slide
const setDot = (dots, slideId) => {
  dots[slideId - 1].className += " slideShowActive";
};

window.onload = initSlideShows();

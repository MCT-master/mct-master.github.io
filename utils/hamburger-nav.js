const media_screen_breakpoint_2 = 680; // from CSS
let isCollapsed;
let menuContainer;
let iconContainer;

const initHamburgerMenu = () => {
  menuContainer = document.getElementsByClassName("hamburger-menu-container");
  iconContainer = document.getElementsByClassName("hamburger-icon-container");

  if (!menuContainer.length || !iconContainer) return;

  collapseMenu();

  window.addEventListener("resize", handleWindowResize);
  window.removeEventListener("beforeunload", handleWindowResize);
};

// if the screen get resized and is now bigger than the breaking point
// and the menu is NOT collapsed
// then we collapse the menu and toggle the icon animation.
const handleWindowResize = () => {
  let w = document.body.clientWidth;

  if (isCollapsed) return;
  if (w < media_screen_breakpoint_2) return;

  collapseMenu();
  toggleIconAnimation();
};

///////// Main handler function /////////
const handleHamburgerClick = event => {
  if (!menuContainer.length || !iconContainer) return;
  toggleIconAnimation();
  isCollapsed ? displayMenu() : collapseMenu();
};
///////////////////////////////////////

const toggleIconAnimation = () => iconContainer[0].classList.toggle("change");

// Disable scrolling on page
const stopScrollandTap = () => {
  $("body").addClass("stop-scrolling");
  // for mobile:
  $("body").bind("touchmove", e => {
    e.preventDefault();
  });
};

// Resume scrolling on page
const resumeScrollandTap = () => {
  $("body").removeClass("stop-scrolling");
  // for mobile:
  $("body").unbind("touchmove");
};

// collapse the hamburger menubar and resume scolling
const collapseMenu = () => {
  menuContainer[0].style.display = "none";
  resumeScrollandTap();
  isCollapsed = true;
};

// display the hamburger menubar and disable scrolling
const displayMenu = () => {
  menuContainer[0].style.display = "block";
  stopScrollandTap();
  isCollapsed = false;
};

initHamburgerMenu();

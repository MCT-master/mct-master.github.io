const browserDropBtnClass = "drop-btn";
const hamburgerDropBtnClass = "drop-btn-hamburger";
const browserDropDownClass = "dropdown";
const hamburgerDropDownClass = "dropdown-hamburger";
const visibleClass = "visibilityOn";

//////////////////// INIT DROPDOWN MENUS AND BUTTONS WITH ID /////////////////////////
const addDropDownIds = () => {
  const dropBtns = getDropDownBtns();
  setIds(dropBtns);
};

// returns an array of all the dropdown buttons in the document
const getDropDownBtns = () => {
  const browserBtns = Array.from(
    document.getElementsByClassName(browserDropBtnClass)
  );
  const hamburgerBtns = Array.from(
    document.getElementsByClassName(hamburgerDropBtnClass)
  );

  return browserBtns.concat(hamburgerBtns);
};

// takes an array of dropdown buttons
// sets a ID to every dropdown button AND dropdown menu (UL html element) that is next to the dropdown buttons.
const setIds = dropBtns => {
  for (let i = 0; i < dropBtns.length; i++) {
    let currBtn = dropBtns[i];
    currBtn.id = "b" + i;
    let currMenu = currBtn.nextElementSibling;

    // check if the next sibling of the currBtn has a dropdown class.
    let isDropDown = checkForDropDown(currMenu);
    if (isDropDown) {
      // if yes, we add the same id to it as its sibling button
      currMenu.id = "d" + i;
    }
  }
};

// check if an item has a dropdown class
const checkForDropDown = item => {
  if (
    item.matches("." + hamburgerDropDownClass) ||
    item.matches("." + browserDropDownClass)
  ) {
    return true;
  }
  return false;
};
//////////////////////////////////////////////////////////////////////////

// open and close dropdown menu.
handleMenuClick = elem => {
  let btnId = elem.id;
  let dropDownId = "d" + btnId[1];
  let menu = document.getElementById(dropDownId);

  toggleDropDown(menu);

  // make sure we only show one dropdown menu at a time.
  let visibleMenus = getVisibleMenus();
  let filteredMenus = visibleMenus.filter(menu => menu.id !== dropDownId);
  closeMenus(filteredMenus);
};

// only one menu at a time.
const toggleDropDown = elem => elem.classList.toggle(visibleClass);

// return an array of dropdown html ul elements that have the visibleClass tag
const getVisibleMenus = () => {
  let items = document.getElementsByClassName(visibleClass);
  return [...items];
};

// argument is a list of html elements. returns nothing
const closeMenus = menus => {
  for (let i = 0; i < menus.length; i++) {
    menus[i].classList.remove(visibleClass);
  }
};

// gets and closes all visible menus. returns nothing
const closeAllVisibleMenus = () => {
  let visibleMenus = getVisibleMenus();
  if (visibleMenus.length) closeMenus(visibleMenus);
};

////////// if user clicks anywhere other than a dropdown button ///////////
window.onclick = event => {
  let btn = event.target;

  // if we click the dropdrop buttons, we handle that above instead
  let isDropDownBtn = checkForButton(btn);
  if (isDropDownBtn) return;
  // else:
  closeAllVisibleMenus();
};

// check if an item has a dropdown button class
const checkForButton = item => {
  if (
    item.matches("." + browserDropBtnClass) ||
    item.matches("." + hamburgerDropBtnClass)
  ) {
    return true;
  }
  return false;
};

//////////////////////////////////////////////////////////////////////////

// init by adding ids to dropdown menus and buttons
addDropDownIds();

const tabItems = document.querySelectorAll(".tab-item");
const tabContentItems = document.querySelectorAll(".tab-content-item");

// selectItem function
function selectItem(e) {
  // remove border
  removeBorder();
  removeShow();
  // add border to current tab
  this.classList.add("tab-border");
  //   Grab content item from DOM
  const tabContentItem = document.querySelector(`#${this.id}-content`);
  //   add show class
  tabContentItem.classList.add("show");
}

// Remove border
function removeBorder() {
  tabItems.forEach((item) => {
    item.classList.remove("tab-border");
  });
}

// Remove .show
function removeShow() {
  tabContentItems.forEach((item) => {
    item.classList.remove("show");
  });
}
// Listen for tab click
tabItems.forEach((item) => {
  item.addEventListener("click", selectItem);
});

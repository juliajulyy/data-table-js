const dropBtn = document.querySelector("#drop-btn");
const dropdown = document.querySelector("#dropdown");
const dropdowns = document.querySelectorAll("#dropdown li");

const openDropdown = () => {
  dropdown.classList.toggle("show");
}

window.addEventListener('click', (event) => {
  if (event.target === dropdown) {
    dropdown.classList.remove("show");
  }
});

const changeAttr = (item) => {
  attrValue = item.getAttribute("value");
  dropdown.classList.remove("show");
  dropBtn.innerHTML = attrValue;
  filterInColumn(attrValue);
}

Array.from(dropdowns).forEach(item => {
  item.addEventListener('click', () => changeAttr(item));
});


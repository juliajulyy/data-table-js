const dropBtn = document.querySelector("#drop-btn");
const dropdown = document.querySelector("#dropdown");
const dropdowns = document.querySelectorAll("#dropdown li");
const inputColVal = document.querySelector('#input-col-val');
const cleanInputs = document.querySelectorAll(".filters__close");

dropBtn.addEventListener('click', () => {
  dropdown.classList.toggle("show");
});

window.addEventListener('click', (event) => {
  console.log(event.target)
  if (event.target !== dropBtn) {
    if (dropdown.classList.contains("show")) {
      dropdown.classList.remove('show');
    }
  }
});

const changeAttr = (item) => {
  const attrValue = item.getAttribute("value");
  getColFilterVal(attrValue);
  dropdown.classList.remove("show");
  dropBtn.innerHTML = item.textContent;
}

Array.from(dropdowns).forEach(item => {
  item.addEventListener('click', () => changeAttr(item));
});

const getColFilterVal = (attr) => {
  inputColVal.addEventListener('keydown', () => {
    if (event.keyCode === 13) {
      filterInColumn(attr, inputColVal.value.trim());
    }
  });
}

Array.from(cleanInputs).forEach(item => {
  item.addEventListener('click', () => {
    inputColVal.value = "";
    displayWorkers(getWorkers());
  });
});

const filterInColumn = (colName, value) => {
  const workers = getWorkers();

  value = (colName === 'id') ? parseInt(value) : value;
  const filteredWorkers = workers.filter(worker => worker[colName] === value);

  displayWorkers(filteredWorkers);
}
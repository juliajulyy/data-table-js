import { displayWorkers } from './display-workers';
import { getWorkers } from './get-local-worker';
import { setFilterWorkers } from './set-local-worker';

const dropBtn = document.querySelector('#drop-btn');
const dropdown = document.querySelector('#dropdown');
const dropdowns = document.querySelectorAll('#dropdown li');
const inputColVal = document.querySelector('#input-col-val');
const cleanInputCol = document.querySelector('#clean-column');

const filterInColumn = (colName, value) => {
  const workers = getWorkers();

  const newValue = (colName === 'id') ? parseInt(value, 10) : value;
  const filteredWorkers = workers.filter((worker) => worker[colName] === newValue);

  setFilterWorkers(filteredWorkers);
  displayWorkers(filteredWorkers);
};

const getColFilterVal = (attr) => {
  inputColVal.addEventListener('keydown', (event) => {
    if (event.keyCode === 13) {
      filterInColumn(attr, inputColVal.value.trim());
    }
  });
};

const changeAttr = (item) => {
  const attrValue = item.getAttribute('value');
  getColFilterVal(attrValue);
  dropdown.classList.remove('show');
  dropBtn.innerHTML = item.textContent;
};

export const initializeDropdownPopup = () => {
  Array.from(dropdowns).forEach((item) => {
    item.addEventListener('click', () => changeAttr(item));
  });

  dropBtn.addEventListener('click', () => {
    dropdown.classList.toggle('show');
  });

  window.addEventListener('click', (event) => {
    if (event.target !== dropBtn) {
      if (dropdown.classList.contains('show')) {
        dropdown.classList.remove('show');
      }
    }
  });

  cleanInputCol.addEventListener('click', () => {
    inputColVal.value = '';
    localStorage.removeItem('sortedWorkers');
    displayWorkers(getWorkers());
  });
};

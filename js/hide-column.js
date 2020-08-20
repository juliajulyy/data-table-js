import { getWorkers } from './get-local-worker';
import { displayHeader } from './display-header';
import { setFilterWorkers } from './set-local-worker';
import { displayWorkers } from './display-workers';

const filterBtn = document.querySelector('#filter-btn');
const filterList = document.querySelector("#filter-list");
const filtersDropdown = document.querySelector('#filter-hide');

const ok = document.querySelector('#ok');
const all = document.querySelector('#all');
const clear = document.querySelector('#clear');

const inputCheckboxes = document.querySelectorAll("#filter-list input");

const filterWorkers = (checkedArr, operate) => {
  const workers = getWorkers();
  const filteredWorkers = [];
  workers.forEach(worker => {
    Object.keys(worker).forEach((key) => {
      if (!checkedArr.includes(key)) {
        delete worker[key];
      };
    })
    filteredWorkers.push(worker);
  })
  displayHeader(filteredWorkers, operate);

  setFilterWorkers(filteredWorkers);
  displayWorkers(filteredWorkers, operate);
}

export const selectColumn = () => {

  window.addEventListener('click', (event) => {
    if (filtersDropdown.contains(event.target)) return;
    return filterList.classList.remove("show");
  });
  
  filterBtn.addEventListener('click', () => {
    filterList.classList.toggle("show");
  });
  
  all.addEventListener('click', () => {
    Array.from(inputCheckboxes).forEach(item => item.checked = true);
  });
  
  clear.addEventListener('click', () => {
    Array.from(inputCheckboxes).forEach(item => item.checked = false);
  })
  
  ok.addEventListener('click', () => {
    const checkedArr = [];
    let operate = false;
    Array.from(inputCheckboxes).forEach(item => {
      if (item.checked === true) {
        if (item.id === 'operate') {
          operate = true;
        } else {
          checkedArr.push(item.id);
        }
      }
    })
    filterWorkers(checkedArr, operate);
    filterList.classList.remove('show');
  })
}

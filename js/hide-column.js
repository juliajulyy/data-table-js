import { getWorkers } from './get-local-worker';
import { displayHeader } from './display-header';
import { setFilterWorkers } from './set-local-worker';
import { displayWorkers } from './display-workers';

const filterBtn = document.querySelector('#filter-btn');
const filterList = document.querySelector('#filter-list');
const filtersDropdown = document.querySelector('#filter-hide');

const okBtn = document.querySelector('#ok');
const allBtn = document.querySelector('#all');
const clearBtn = document.querySelector('#clear');

const inputCheckboxes = document.querySelectorAll('#filter-list input');

const filterWorkers = (checkedArr, operate) => {
  const workers = getWorkers();
  const filteredWorkers = workers.map((worker) => {
    const filteredWorker = Object.entries(worker).filter(
      ([workerKey]) => checkedArr.includes(workerKey),
    );
    return Object.fromEntries(filteredWorker);
  });

  displayHeader(filteredWorkers, operate);

  setFilterWorkers(filteredWorkers);
  displayWorkers(filteredWorkers, operate);
};

export const selectColumn = () => {
  window.addEventListener('click', (event) => {
    if (filtersDropdown.contains(event.target)) return;
    filterList.classList.remove('show');
  });

  filterBtn.addEventListener('click', () => {
    filterList.classList.toggle('show');
  });

  allBtn.addEventListener('click', () => {
    Array.from(inputCheckboxes).map((item) => item.checked = true);
  });

  clearBtn.addEventListener('click', () => {
    Array.from(inputCheckboxes).forEach((item) => item.checked = false);
  });

  okBtn.addEventListener('click', () => {
    const operate = Array.from(inputCheckboxes).some((el) => el.id === 'operate' && el.checked);
    const checkedArr = Array.from(inputCheckboxes).map((item) => (item.checked && item.id !== 'operate' ? item.id : null));
    if (checkedArr.includes(!null)) filterWorkers(checkedArr, operate);
    filterList.classList.remove('show');
  });
};

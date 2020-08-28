import { getWorkers } from './get-local-worker';
import { setFilterWorkers } from './set-local-worker';
import { displayWorkers } from './display-workers';

const cleanInputKey = document.querySelector('#clean-key');
const inputKey = document.querySelector('#input-key');

const filterByKey = (value) => {
  const workers = getWorkers();
  const filteredWorkers = workers
    .filter((worker) => Object.keys(worker)
      .some((k) => worker[k].toString().toLowerCase().includes(value.toLowerCase())));

  setFilterWorkers(filteredWorkers);
  displayWorkers(filteredWorkers);
};

export const searchTable = () => {
  cleanInputKey.addEventListener('click', () => {
    inputKey.value = '';
    localStorage.removeItem('sortedWorkers');
    displayWorkers(getWorkers());
  });

  inputKey.addEventListener('keydown', (event) => {
    if (event.keyCode === 13) {
      filterByKey(inputKey.value.trim());
    }
  });
};

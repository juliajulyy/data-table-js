import { getWorkers } from './get-local-worker';
import { setFilterWorkers } from './set-local-worker';
import { displayWorkers } from './display-workers';
import { savebtn, toggleModal } from './modal';

export const editWorker = (event) => {
  const btnIndex = parseInt(event.target.dataset.index, 10);
  const workers = getWorkers();

  const [filteredWorker] = workers.filter((worker) => worker.id === btnIndex);
  const workerIndex = workers.findIndex((worker) => worker.id === btnIndex);

  const firstName = document.querySelector('#first-name');
  const lastName = document.querySelector('#last-name');
  const position = document.querySelector('#inputGroupSelect');

  firstName.value = filteredWorker.firstName;
  lastName.value = filteredWorker.lastName;
  position.value = filteredWorker.position;

  toggleModal(true);

  savebtn.addEventListener('click', () => {
    const fName = document.querySelector('#first-name').value;
    const lName = document.querySelector('#last-name').value;
    const posit = document.querySelector('#inputGroupSelect').value;

    filteredWorker.firstName = fName;
    filteredWorker.lastName = lName;
    filteredWorker.position = posit;

    workers.splice(workerIndex, 1, filteredWorker);
    const workersJson = JSON.stringify(workers);

    localStorage.setItem('workers', workersJson);

    if (localStorage.getItem('sortedWorkers')) {
      setFilterWorkers(workers);
    }

    displayWorkers(workers);
  });
};

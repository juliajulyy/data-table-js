import { getWorkers, getFilterWorkers } from './get-local-worker';
import { setFilterWorkers } from './set-local-worker';
import { displayWorkers } from './display-workers';

export const deleteWorker = (event) => {
  const btnIndex = parseInt(event.target.dataset.index, 10);
  const workers = getWorkers();
  const filteredWorkers = workers.filter(worker => worker.id !== btnIndex);

  const workersJson = JSON.stringify(filteredWorkers);

  localStorage.setItem('workers', workersJson);

  if (localStorage.getItem('sortedWorkers')) {
    setFilterWorkers(filteredWorkers);
  }

  displayWorkers(getFilterWorkers());
}
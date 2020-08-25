import { getWorkers } from './get-local-worker';

export const setWorker = (newWorker) => {
  const receivedWorkers = getWorkers();

  const workers = [
    ...(receivedWorkers === null) ? [] : receivedWorkers,
    newWorker,
  ];

  const workersJson = JSON.stringify(workers);

  return localStorage.setItem('workers', workersJson);
};

export const setFilterWorkers = (workers) => {
  localStorage.setItem('sortedWorkers', JSON.stringify(workers));
};

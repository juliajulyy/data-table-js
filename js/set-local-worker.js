const setWorker = (newWorker) => {

  const receivedWorkers = getWorkers();

  const workers = [
    ...(receivedWorkers === null) ? [] : receivedWorkers,
    newWorker
  ]

  const workersJson = JSON.stringify(workers);

  return localStorage.setItem('workers', workersJson);
}
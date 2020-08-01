const setWorker = (newWorker) => {

  const receivedWorkers = getWorker();

  const workers = [
    ...(receivedWorkers === null) ? [] : receivedWorkers,
    newWorker
  ]

  const workersJson = JSON.stringify({
    workers
  });

  return localStorage.setItem('workers', workersJson);
}
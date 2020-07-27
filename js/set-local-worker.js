const setWorker = (workers) => {

  const workersJson = JSON.stringify({
    workers
  });

  return localStorage.setItem('workers', workersJson);
}
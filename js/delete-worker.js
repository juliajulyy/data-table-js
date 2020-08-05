const deleteWorker = (e) => {
  const btnIndex = parseInt(e.target.dataset.index, 10);
  const workers = getWorker();
  const filteredWorkers = workers.filter(worker => worker.id !== btnIndex);
  
  const workersJson = JSON.stringify(filteredWorkers);

  localStorage.setItem('workers', workersJson);

  displayWorkers();
}
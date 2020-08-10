const deleteWorker = (event) => {
  const btnIndex = parseInt(event.target.dataset.index, 10);
  const workers = getWorkers();
  const filteredWorkers = workers.filter(worker => worker.id !== btnIndex);
  
  const workersJson = JSON.stringify(filteredWorkers);

  localStorage.setItem('workers', workersJson);

  displayWorkers(getWorkers());
}
const DeleteWorker = (function() {
  const deleteWorker = (event) => {
    const btnIndex = parseInt(event.target.dataset.index, 10);
    const workers = GetLocalWorker.getWorkers();
    const filteredWorkers = workers.filter(worker => worker.id !== btnIndex);

    console.log(filteredWorkers)

    const workersJson = JSON.stringify(filteredWorkers);

    localStorage.setItem('workers', workersJson);

    if (localStorage.getItem('sortedWorkers')) {
      SetLocalWorker.setFilterWorkers(filteredWorkers);
      console.log('set')
    }

    DisplayWorkers.displayWorkers(GetLocalWorker.getFilterWorkers());
  }
  return { deleteWorker }
})();
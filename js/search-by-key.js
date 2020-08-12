(function () {
  const cleanInputKey = document.querySelector('#clean-key');
  const inputKey = document.querySelector('#input-key');

  cleanInputKey.addEventListener('click', () => {
    inputKey.value = "";
    localStorage.removeItem('sortedWorkers');
    DisplayWorkers.displayWorkers(GetLocalWorker.getWorkers());
  });

  const filterByKey = (value) => {
    const workers = GetLocalWorker.getWorkers();
    const filteredWorkers = workers.filter(worker =>
      Object.keys(worker).some(k => worker[k].toString().toLowerCase().includes(value.toLowerCase())));
  
    SetLocalWorker.setFilterWorkers(filteredWorkers);
    DisplayWorkers.displayWorkers(filteredWorkers);
  }

  inputKey.addEventListener('keydown', () => {
    if (event.keyCode === 13) {
      filterByKey(inputKey.value.trim());
    }
  });

})();
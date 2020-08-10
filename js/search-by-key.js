const cleanInputKey = document.querySelector('#clean-key');
const inputKey = document.querySelector('#input-key');

inputKey.addEventListener('keydown', () => {
  if (event.keyCode === 13) {
    filterByKey(inputKey.value.trim());
  }
});

cleanInputKey.addEventListener('click', () => {
  inputKey.value = "";
  localStorage.removeItem('sortedWorkers');
  displayWorkers(getWorkers());
});

const filterByValue = (workers, string) => {
  return workers.filter(worker =>
    Object.keys(worker).some(k => worker[k].toString().toLowerCase().includes(string.toLowerCase())));
}

const filterByKey = (value) => {
  const workers = getWorkers();
  const filteredWorkers = workers.filter(worker =>
    Object.keys(worker).some(k => worker[k].toString().toLowerCase().includes(value.toLowerCase())));
  
  setFilterWorkers(filteredWorkers);
  displayWorkers(filteredWorkers);
}
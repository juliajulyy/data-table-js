const getWorker = () => {
  const previousWorkers = localStorage.getItem('workers');
  
  if (previousWorkers !== null) {
    const workers = JSON.parse(previousWorkers);
    return workers;
  }
  return null;
}
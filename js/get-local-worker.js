export const getWorkers = () => {
  const previousWorkers = localStorage.getItem('workers');

  if (previousWorkers !== null) {
    const workers = JSON.parse(previousWorkers);
    return workers;
  }
  return null;
};

export const getFilterWorkers = () => {
  if (localStorage.getItem('sortedWorkers')) {
    return JSON.parse(localStorage.getItem('sortedWorkers'));
  } return getWorkers();
};

const addWorker = () => {
  const workers = getWorker();
  const newWorker = createWorker();

  (validateName(newWorker.firstName) && validateName(newWorker.lastName)) ? setWorker([
      ...(workers === null) ? [] : workers,
      newWorker
  ]) : alert('Please fill in all fields with more than two characters.');
}
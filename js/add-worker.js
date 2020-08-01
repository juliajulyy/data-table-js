const addWorker = () => {
  const workers = getWorker();
  const newWorker = createWorker();

  setWorker([
    ...(workers === null) ? [] : workers,
    newWorker
  ])
}
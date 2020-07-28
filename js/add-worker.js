const addWorker = () => {
  const workers = getWorker();
  const newWorker = createWorker();

  if (validateName(newWorker.firstName) && validateName(newWorker.lastName)) {
    setWorker([
      ...(workers === null) ? [] : workers,
      newWorker
    ])
  }
}
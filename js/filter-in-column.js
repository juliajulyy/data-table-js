const filterInColumn = (colName) => {
  const workers = getWorkers();
  const filteredWorkers = workers.filter(worker => worker[colName] === 267);

  console.log(filteredWorkers);
}
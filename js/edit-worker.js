const editWorker = (event) => {
  const btnIndex = parseInt(event.target.dataset.index, 10);
  const workers = getWorker();

  const [filteredWorker] = workers.filter(worker => worker.id === btnIndex);
  const workerIndex = workers.findIndex(worker => worker.id === btnIndex);

  const firstName = document.querySelector('#first-name');
  const lastName = document.querySelector('#last-name');
  const position = document.querySelector('#inputGroupSelect');

  firstName.value = filteredWorker.firstName;
  lastName.value = filteredWorker.lastName;
  position.value = filteredWorker.position;

  toggleModal(true);

  savebtn.addEventListener('click', () => {
    const firstName = document.querySelector('#first-name').value;
    const lastName = document.querySelector('#last-name').value;
    const position = document.querySelector('#inputGroupSelect').value;

    filteredWorker.firstName = firstName;
    filteredWorker.lastName = lastName;
    filteredWorker.position = position;

    workers.splice(workerIndex, 1, filteredWorker);

    const workersJson = JSON.stringify(workers);

    localStorage.setItem('workers', workersJson);

    document.location.reload();
  });
}
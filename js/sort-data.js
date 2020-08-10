const arrowsSort = document.querySelectorAll(".filters__arrow");

const transfDate = (worker) => {
  const dateParts = worker.createdDate.split('/');
  const newDate = new Date(dateParts[2], dateParts[0] - 1, dateParts[1]);
  return newDate.getTime();
}

const sortWorkers = (key) => {
  workers = getWorkers();

  if (key === 'id') {
    return workers.sort((worker1, worker2) => parseInt(worker1.id) - parseInt(worker2.id));
  } else if (key === 'createdDate') {
    return workers.sort((worker1, worker2) => transfDate(worker1) - transfDate(worker2));
  } else {
    return workers.sort((worker1, worker2) => {
      if (worker1[key] > worker2[key]) return 1;
      else if (worker1[key] < worker2[key]) return -1;
      else if (worker1[key] === worker2[key]) return 0;
    });
  }
}

const tableHeaderStates = {
  id: 'initial',
  firstName: 'initial',
  lastName: 'initial',
  position: 'initial',
  createdDate: 'initial'
}

const setState = (item, i) => {
  item.classList.remove('initial__arrow');
  let key = Object.keys(tableHeaderStates)[i];

  if ((tableHeaderStates[key] === 'initial') || (tableHeaderStates[key] === 'desc')) {
    item.src = 'img/asc.png';
    tableHeaderStates[key] = 'asc';
    displayWorkers(sortWorkers(key));
  } else if (tableHeaderStates[key] === 'asc') {
    item.src = 'img/desc.png';
    displayWorkers(sortWorkers(key).reverse());
    tableHeaderStates[key] = 'desc';
  }

  if ((tableHeaderStates[key] === 'asc') || (tableHeaderStates[key] === 'desc')) {
    Object.keys(tableHeaderStates).forEach(el => {
      if (el !== key) tableHeaderStates[el] = 'initial';
    });
    Array.from(arrowsSort).forEach(el => {
      if (el !== item) {
        el.src = 'img/sort-arrow.png';
        el.classList.add('initial__arrow');
      }
    });
  }
}

Array.from(arrowsSort).forEach((item, i) => {
  item.addEventListener('click', () => setState(item, i));
});
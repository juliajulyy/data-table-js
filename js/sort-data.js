import { getFilterWorkers } from './get-local-worker';
import { displayWorkers } from './display-workers';

const transfDate = (worker) => {
  const dateParts = worker.createdDate.split('/');
  const newDate = new Date(dateParts[2], dateParts[0] - 1, dateParts[1]);
  return newDate.getTime();
};

const sortWorkers = (key) => {
  const workers = getFilterWorkers();

  if (key === 'id') {
    return workers.sort((worker1, worker2) => parseInt(worker1.id, 10) - parseInt(worker2.id, 10));
  } if (key === 'createdDate') {
    return workers.sort((worker1, worker2) => transfDate(worker1) - transfDate(worker2));
  }
  return workers.sort((worker1, worker2) => {
    const w1 = worker1[key].toLowerCase();
    const w2 = worker2[key].toLowerCase();
    if (w1 > w2) return 1;
    if (w1 < w2) return -1;
    return 0;
  });
};

const tableHeaderStates = {
  id: 'initial',
  firstName: 'initial',
  lastName: 'initial',
  position: 'initial',
  createdDate: 'initial',
};

export const setState = (item, key, operate = true) => {
  const arrowsSort = document.querySelectorAll('.filters__arrow');
  const img = item;
  img.classList.remove('initial__arrow');

  if ((tableHeaderStates[key] === 'initial') || (tableHeaderStates[key] === 'desc')) {
    img.src = 'img/asc.png';
    tableHeaderStates[key] = 'asc';
    displayWorkers(sortWorkers(key), operate);
  } else if (tableHeaderStates[key] === 'asc') {
    img.src = 'img/desc.png';
    displayWorkers(sortWorkers(key).reverse(), operate);
    tableHeaderStates[key] = 'desc';
  }

  if ((tableHeaderStates[key] === 'asc') || (tableHeaderStates[key] === 'desc')) {
    Object.keys(tableHeaderStates).forEach((el) => {
      if (el !== key) tableHeaderStates[el] = 'initial';
    });
    Array.from(arrowsSort).forEach((el) => {
      if (el !== item) {
        el.src = 'img/sort-arrow.png';
        el.classList.add('initial__arrow');
      }
    });
  }
  return img;
};

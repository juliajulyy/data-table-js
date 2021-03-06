import { getFilterWorkers } from './get-local-worker';
import { displayWorkers } from './display-workers';

// const arrowsSort = document.querySelectorAll(".filters__arrow");
// console.log(arrowsSort)

const transfDate = (worker) => {
  const dateParts = worker.createdDate.split('/');
  const newDate = new Date(dateParts[2], dateParts[0] - 1, dateParts[1]);
  return newDate.getTime();
}

const sortWorkers = (key) => {
  const workers = getFilterWorkers();

  if (key === 'id') {
    return workers.sort((worker1, worker2) => parseInt(worker1.id) - parseInt(worker2.id));
  } else if (key === 'createdDate') {
    return workers.sort((worker1, worker2) => transfDate(worker1) - transfDate(worker2));
  } else {
    return workers.sort((worker1, worker2) => {
      const w1 = worker1[key].toLowerCase();
      const w2 = worker2[key].toLowerCase();
      if (w1 > w2) return 1;
      else if (w1 < w2) return -1;
      else if (w1 === w2) return 0;
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

export const setState = (item, key, operate = true) => {
  item.classList.remove('initial__arrow');

  if ((tableHeaderStates[key] === 'initial') || (tableHeaderStates[key] === 'desc')) {
    item.src = 'img/asc.png';
    tableHeaderStates[key] = 'asc';
    displayWorkers(sortWorkers(key), operate);
  } else if (tableHeaderStates[key] === 'asc') {
    item.src = 'img/desc.png';
    displayWorkers(sortWorkers(key).reverse(), operate);
    tableHeaderStates[key] = 'desc';
  }

  if ((tableHeaderStates[key] === 'asc') || (tableHeaderStates[key] === 'desc')) {
    Object.keys(tableHeaderStates).forEach(el => {
      if (el !== key) tableHeaderStates[el] = 'initial';
    });
    // Array.from(arrowsSort).forEach(el => {
    //   if (el !== item) {
    //     el.src = 'img/sort-arrow.png';
    //     el.classList.add('initial__arrow');
    //   }
    // });
  }
}
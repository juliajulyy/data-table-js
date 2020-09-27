import '../css/index.css';
import '../img/filter-icon.png';
import '../img/sort-arrow.png';
import '../img/asc.png';
import '../img/desc.png';

import store from '../redux/store';
import '../subscribe';
import { selectWorkers } from '../redux/ducks/workers';
import { displayHeader } from './display-header';
import { displayWorkers } from './display-workers';
import { initListeners } from './listeners';
import { getWorkers } from './get-local-worker';
import { setWorker } from './set-local-worker';
import { initializeDropdownPopup } from './filter-in-column';
import { selectColumn } from './hide-column';
import { searchTable } from './search-by-key';
import { closeModal } from './modal';

const main = () => {
  const workers = selectWorkers(store.getState());

  localStorage.removeItem('sortedWorkers');

  // generate header
  displayHeader(workers);

  displayWorkers(workers);

  // init listeners
  initListeners();

  // init dropdown modal
  initializeDropdownPopup();

  // init column selection
  selectColumn();

  // init table seach
  searchTable();

  // init modal closing
  closeModal();
};

window.addEventListener('load', main);

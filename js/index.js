import '../css/index.css';
import '../img/filter-icon.png';
import '../img/sort-arrow.png';
import '../img/asc.png';
import '../img/desc.png';

import { displayWorkers } from './display-workers';
import { getWorkers } from './get-local-worker';
import { setWorker } from './set-local-worker';
import { addNewWorker } from './create-worker';
import { initializeDropdownPopup } from './filter-in-column';
import { selectColumn } from './hide-column';
import { searchTable } from './search-by-key';
import { closeModal } from './modal';

const main = () => {

  const workers = [
    {
      id: 1,
      firstName: "John",
      lastName: "Pool",
      position: "Front-end dev",
      createdDate: "11/12/2019"
    },
    {
      id: 2,
      firstName: "Mia",
      lastName: "Chester",
      position: "Front-end dev",
      createdDate: "02/03/2020"
    },
    {
      id: 3,
      firstName: "James",
      lastName: "Frazier",
      position: "HR",
      createdDate: "06/06/2020"
    },
    {
      id: 4,
      firstName: "Matt",
      lastName: "Smith",
      position: "Back-end dev",
      createdDate: "07/17/2020"
    },
    {
      id: 5,
      firstName: "Joe",
      lastName: "Cole",
      position: "Tester",
      createdDate: "01/08/2020"
    },
    {
      id: 6,
      firstName: "Ulyana",
      lastName: "Kravchenko",
      position: "Front-end dev",
      createdDate: "03/07/2020"
    }
  ];

  if (!localStorage.getItem('workers')) {
    workers.forEach(item => setWorker(item))
  }

  localStorage.removeItem('sortedWorkers');

  console.log(getWorkers());
  displayWorkers(getWorkers());

  // init new worker button
  addNewWorker();

  // init dropdown modal 
  initializeDropdownPopup();

  // init column selection
  selectColumn();

  // init table seach
  searchTable();

  // init modal closing 
  closeModal();
}

window.addEventListener('load', main);
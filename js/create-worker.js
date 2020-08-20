import { setWorker } from './set-local-worker';
import { NewWorker } from './worker-factory';
import { toggleModal, savebtn } from './modal';

const addWorker = () => {
  toggleModal(true);

  savebtn.addEventListener('click', () => {
    const newWorker = createWorker();
    if (newWorker) setWorker(newWorker);
  });
}

const createWorker = () => {  
  const firstName = document.querySelector('#first-name').value;
  const lastName = document.querySelector('#last-name').value;
  const position = document.querySelector('#inputGroupSelect').value;

  if (validateName(firstName) && validateName(lastName)) {
    return new NewWorker(firstName, lastName, position);
  }
  return null;
}

const validateName = (str) => str.replace(/\s/g, '').length > 2;

export const addNewWorker = () => {
  const addNewbtn = document.querySelector("#add-new");
  addNewbtn.addEventListener('click', addWorker);
}

import { NewWorker } from './worker-factory';
import { toggleModal, savebtn } from './modal';
import { addNewWorker } from '../redux/ducks/workers';
import store from '../redux/store';

const validateName = (str) => str.replace(/\s/g, '').length > 2;

const createWorker = () => {
  const firstName = document.querySelector('#first-name').value;
  const lastName = document.querySelector('#last-name').value;
  const position = document.querySelector('#inputGroupSelect').value;

  if (validateName(firstName) && validateName(lastName)) {
    return new NewWorker(firstName, lastName, position);
  }
  return null;
};

export const addWorker = () => {
  toggleModal(true);

  savebtn.addEventListener('click', () => {
    const newWorker = createWorker();
    if (newWorker) store.dispatch(addNewWorker(newWorker));
  });
};

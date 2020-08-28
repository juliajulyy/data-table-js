import { deleteWorker } from './delete-worker';
import { editWorker } from './edit-worker';
import { addWorker } from './create-worker';

export const initListeners = () => {
  const btnsDelete = document.querySelectorAll('.delete-btn');
  btnsDelete.forEach((item) => item.addEventListener('click', deleteWorker));

  const btnsEdit = document.querySelectorAll('.edit-btn');
  btnsEdit.forEach((item) => item.addEventListener('click', editWorker));

  const addNewbtn = document.querySelector('#add-new');
  addNewbtn.addEventListener('click', addWorker);
};

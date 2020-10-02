import Modal from './WorkerForm';

export default () => {
  const addNewBtn = document.createElement('button');
  addNewBtn.id = 'add-new';
  addNewBtn.type = 'button';
  addNewBtn.className = 'btn btn-primary btn-success float-right';
  addNewBtn.innerHTML = 'Add New';

  addNewBtn.addEventListener('click', () => Modal({ visibility: true }));

  return addNewBtn;
};

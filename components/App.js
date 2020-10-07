import Table from './Table';
import AddNewBtn from './AddNewBtn';
import WorkerForm from './WorkerForm';
import store from '../redux/store';
import { updateWorker, selectCurrentWorker } from '../redux/ducks/workers';
import { selectCreateModal, selectUpdateModal } from '../redux/ducks/modal';

export default () => {
  const app = document.querySelector('#app');
  const createModalState = selectCreateModal(store.getState());
  const updateModalState = selectUpdateModal(store.getState());
  const { firstName, lastName, position } = selectCurrentWorker(store.getState());

  app.innerHTML = '';
  app.appendChild(Table());
  app.appendChild(AddNewBtn());

  app.appendChild(WorkerForm({
    visibility: createModalState,
  }));
  app.appendChild(WorkerForm({
    visibility: updateModalState,
    firstNameInput: firstName,
    lastNameInput: lastName,
    selectInput: position,
    onSubmit: (state) => store.dispatch(updateWorker(state)),
  }));
};
import store from '../redux/store';
import { openCreate } from '../redux/ducks/modal';

export default () => {
  const addNewBtn = document.createElement('button');
  addNewBtn.id = 'add-new';
  addNewBtn.type = 'button';
  addNewBtn.className = 'btn btn-primary btn-success float-right';
  addNewBtn.innerHTML = 'Add New';

  addNewBtn.addEventListener('click', () => store.dispatch(openCreate()));

  return addNewBtn;
};

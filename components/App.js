import Table from './Table';
import AddNewBtn from './AddNewBtn';
import Modal from './WorkerForm';

export default () => {
  const app = document.querySelector('#app');
  app.innerHTML = '';
  app.appendChild(Table());
  app.appendChild(AddNewBtn());
  app.appendChild(Modal({ visibility: false }));
};

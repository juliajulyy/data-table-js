import Table from './Table';
import Modal from './WorkerForm';

export default () => {
  const app = document.querySelector('#app');
  app.innerHTML = '';
  app.appendChild(Table());
  app.appendChild(Modal({ submit: () => console.log('1'), visibility: true }));
};

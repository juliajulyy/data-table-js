import TableRow from './TableRow';
import Modal from './WorkerForm';
import store from '../redux/store';
import { selectWorkers, updateWorker } from '../redux/ducks/workers';

export default () => {
  const tableBody = document.createElement('tbody');
  const workers = selectWorkers(store.getState());

  const rows = workers.map(TableRow);

  rows.forEach((row) => tableBody.appendChild(row));

  tableBody.appendChild(Modal(() => store.dispatch(updateWorker(worker))));

  return tableBody;
};

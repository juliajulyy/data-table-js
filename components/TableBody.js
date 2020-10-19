import TableRow from './TableRow';
import store from '../redux/store';
import { selectWorkers } from '../redux/ducks/workers';

export default () => {
  const tableBody = document.createElement('tbody');
  const workers = selectWorkers(store.getState());

  const rows = workers.map(TableRow);

  rows.forEach((row) => tableBody.appendChild(row));

  return tableBody;
};

import TableCell from './TableCell';
import store from '../redux/store';
import { deleteWorker, updateWorker } from '../redux/ducks/workers';

export default (worker) => {
  const tableRow = document.createElement('tr');

  const cells = Object.values(worker).map(TableCell);

  const btnCol = document.createElement('td');

  const btnWrapper = document.createElement('div');
  btnWrapper.className = 'table__btn';

  const btnEdit = document.createElement('button');
  btnEdit.innerHTML = 'Edit';
  btnEdit.className = 'btn btn-outline-primary edit-btn';
  btnEdit.addEventListener('click', () => store.dispatch(updateWorker(worker)));

  const btnDelete = document.createElement('button');
  btnDelete.innerHTML = 'Delete';
  btnDelete.className = 'btn btn-outline-danger delete-btn';
  btnDelete.addEventListener('click', () => store.dispatch(deleteWorker(worker.id)));

  btnWrapper.appendChild(btnEdit);
  btnWrapper.appendChild(btnDelete);

  btnCol.appendChild(btnWrapper);

  cells.forEach((cell) => tableRow.appendChild(cell));
  tableRow.appendChild(btnCol);

  return tableRow;
};

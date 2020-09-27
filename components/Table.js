import Header from './Header';
import TableBody from './TableBody';

export default () => {
  const table = document.createElement('table');
  table.className = 'table';

  table.appendChild(Header());
  table.appendChild(TableBody());

  return table;
};

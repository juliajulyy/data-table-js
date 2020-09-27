import { selectColumns, changeArrow } from '../redux/ducks/header';
import store from '../redux/store';

export default () => {
  const columns = selectColumns(store.getState());

  const tablelRow = document.createElement('tr');

  const arrowOptions = {
    INIT: {
      className: 'filters__arrow initial__arrow',
      imgPath: 'img/sort-arrow.png',
    },
    ASC: {
      className: 'filters__arrow',
      imgPath: 'img/asc.png',
    },
    DESC: {
      className: 'filters__arrow',
      imgPath: 'img/desc.png',
    },
  };

  columns.forEach((col) => {
    const { name, visibility, sort } = col;

    if (!visibility) return;

    const tableHead = document.createElement('th');

    const span = document.createElement('span');
    span.innerHTML = name;

    if (sort !== null) {
      const { className, imgPath } = arrowOptions[sort];

      const img = document.createElement('img');
      img.className = className;
      img.src = imgPath;
      img.dataset.key = name;
      tableHead.addEventListener('click', () => store.dispatch(changeArrow(name)));
      tableHead.appendChild(img);
    }

    tableHead.appendChild(span);
    tablelRow.appendChild(tableHead);
  });

  const tblHead = document.createElement('thead');
  tblHead.className = 'thead-light';

  tblHead.appendChild(tablelRow);

  return tblHead;
};

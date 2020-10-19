import store from '../redux/store';
import { toggleModal } from '../redux/ducks/checkboxModal';

export default () => {
  const filterBtn = document.createElement('button');
  filterBtn.className = 'filters__btn filter filter-btn';

  const filterIcon = document.createElement('img');
  filterIcon.src = 'img/filter-icon.png';
  filterIcon.className = 'filters__icon filter-btn';

  filterBtn.addEventListener('click', () => store.dispatch(toggleModal()));
  filterBtn.appendChild(filterIcon);

  return filterBtn;
};

import CheckboxColumn from './CheckboxColumn';
import store from '../redux/store';
import { selectCheckboxModal } from '../redux/ducks/checkboxModal';

export default () => {
  const isModalVisible = selectCheckboxModal(store.getState());

  let checkedItems = {

  };

  const setChecked = (name) => (e) => {
    checkedItems = { ...checkedItems, [name]: e.target.checked };
    console.log(checkedItems);
  };

  const columnsList = document.createElement('div');
  columnsList.className = 'checkbox';

  columnsList.style.display = isModalVisible ? 'block' : 'none';

  const columnNames = ['ID', 'First Name', 'Last Name', 'Position', 'Created Date', 'Operate'];

  columnsList.appendChild(CheckboxColumn(columnNames, setChecked));

  columnsList.appendChild(document.createElement('hr'));

  const submitBlock = document.createElement('div');
  submitBlock.className = 'checkbox__block-btn';

  const selectionBtns = document.createElement('div');

  const allBtn = document.createElement('span');
  allBtn.innerHTML = 'All';
  selectionBtns.appendChild(allBtn);

  const clearBtn = document.createElement('span');
  clearBtn.innerHTML = 'Clear';
  selectionBtns.appendChild(clearBtn);

  submitBlock.appendChild(selectionBtns);

  const okBtn = document.createElement('span');
  okBtn.innerHTML = 'Ok';
  okBtn.addEventListener('click', () => null);

  submitBlock.appendChild(okBtn);

  columnsList.appendChild(submitBlock);

  return columnsList;
};

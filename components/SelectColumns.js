import CheckboxModal from './CheckboxModal';
import FilterColumsBtn from './FilterColumnsBtn';

export default () => {
  const selectColumns = document.createElement('div');
  selectColumns.className = 'filters__dropdown';

  selectColumns.appendChild(FilterColumsBtn());
  selectColumns.appendChild(CheckboxModal());

  return selectColumns;
};

import SelectColumn from './SelectColumn';
import InputFilter from './InputFilter';
import SelectColumns from './SelectColumns';

export default () => {
  const filters = document.createElement('div');
  filters.className = 'filters';

  const filtersLeft = document.createElement('div');
  filtersLeft.className = 'filters__block-left';
  filtersLeft.appendChild(SelectColumn());

  const equalWrapper = document.createElement('div');
  equalWrapper.className = 'filters__btn filters__equal';

  const equal = document.createElement('span');
  equal.innerHTML = '=';

  equalWrapper.appendChild(equal);
  filtersLeft.appendChild(equalWrapper);

  filtersLeft.appendChild(InputFilter());

  const filtersRight = document.createElement('div');
  filtersRight.className = 'filters__block-right';

  filtersRight.appendChild(InputFilter('KEY'));
  filtersRight.appendChild(SelectColumns());

  filters.appendChild(filtersLeft);
  filters.appendChild(filtersRight);

  return filters;
};

export default () => {
  const selectColumn = document.createElement('div');
  selectColumn.className = 'filters__dropdown';

  const columnBtn = document.createElement('button');
  columnBtn.className = 'filters__btn';
  columnBtn.innerHTML = 'column';
  selectColumn.appendChild(columnBtn);

  const columnsList = document.createElement('ul');
  columnsList.className = 'filters__dropdown-cont';

  const columnNames = {
    id: 'id',
    firstName: 'first name',
    lastName: 'last name',
    position: 'position',
    createdDate: 'created date',
  };

  Object.entries(columnNames).forEach(([key, value]) => {
    const listItem = document.createElement('li');
    listItem.value = key;
    listItem.innerHTML = value;
    columnsList.appendChild(listItem);
  });

  selectColumn.appendChild(columnsList);

  return selectColumn;
};

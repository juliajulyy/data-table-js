export default (columnNames, onCheck) => {
  const checkboxColumn = document.createElement('div');
  checkboxColumn.className = 'checkbox__inputs';

  const rows = columnNames.map((name) => {
    const row = document.createElement('div');

    const checkboxLabel = document.createElement('label');

    const checkboxField = document.createElement('input');
    checkboxField.type = 'checkbox';
    checkboxField.addEventListener('change', onCheck(name));

    checkboxLabel.appendChild(checkboxField);

    const labelName = document.createElement('span');
    labelName.innerHTML = name;

    checkboxLabel.appendChild(labelName);

    row.appendChild(checkboxLabel);
    return row;
  });

  rows.forEach((row) => checkboxColumn.appendChild(row));

  return checkboxColumn;
};

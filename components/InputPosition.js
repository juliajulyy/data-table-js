export default (value, name, onChange) => {
  const element = document.createElement('div');
  element.className = 'input-group mb-3';

  const childBlock = document.createElement('div');
  childBlock.className = 'input-group-prepend';

  const inputName = document.createElement('div');
  inputName.className = 'btn modal__btn-name';
  inputName.innerHTML = name;

  childBlock.appendChild(inputName);

  const selectInput = document.createElement('select');
  selectInput.className = 'custom-select';
  selectInput.value = value;

  const selectOptions = ['Front-end dev', 'Back-end dev', 'Full stack dev',
    'Mobile dev', 'Web designer', 'HR', 'Tester', 'Service manager'];
  selectOptions.forEach((optionName) => {
    const option = document.createElement('option');
    option.innerHTML = optionName;
    selectInput.appendChild(option);
  });
  selectInput.addEventListener('change', onChange);
  element.appendChild(selectInput);

  return element;
};

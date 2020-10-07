export default (value, name, onChange) => {
  const element = document.createElement('div');
  element.className = 'input-group mb-3';

  const childBlock = document.createElement('div');
  childBlock.className = 'input-group-prepend';

  const inputName = document.createElement('span');
  inputName.className = 'input-group-text';
  inputName.innerHTML = name;

  childBlock.appendChild(inputName);
  element.appendChild(childBlock);

  const input = document.createElement('input');
  input.type = 'text';
  input.className = 'form-control';
  input.value = value;
  input.addEventListener('change', onChange);

  element.appendChild(input);

  return element;
};

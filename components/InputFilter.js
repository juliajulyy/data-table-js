export default (placeholder = '') => {
  const inputWrapper = document.createElement('div');
  inputWrapper.className = 'filters__input-group';

  const inputField = document.createElement('input');
  inputField.type = 'text';
  inputField.className = 'filters__input';
  inputField.placeholder = placeholder;

  inputWrapper.appendChild(inputField);

  const closeBtn = document.createElement('button');
  closeBtn.className = 'filters__close';
  closeBtn.innerHTML = '&times;';

  inputWrapper.appendChild(closeBtn);

  return inputWrapper;
};

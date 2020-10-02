import Submit from './SubmitWorker';

export default ({ visibility = false }) => {
  const modal = document.createElement('div');
  modal.id = 'modal-window';
  modal.className = 'modal';
  modal.style.display = visibility ? 'block' : 'none';

  const modalContent = document.createElement('div');
  modalContent.className = 'modal__content';

  const modalHeader = document.createElement('div');
  modalHeader.className = 'modal-header';

  const modalTitle = document.createElement('h5');
  modalTitle.className = 'modal-title';
  modalTitle.innerHTML = 'Add a new employee';

  const closeBtn = document.createElement('button');
  closeBtn.className = 'close';

  const closeBtnName = document.createElement('span');
  closeBtnName.setAttribute('aria-hidden', 'true');
  closeBtnName.innerHTML = '&times;';

  closeBtn.appendChild(closeBtnName);

  modalHeader.appendChild(modalTitle);
  modalHeader.appendChild(closeBtn);

  modalContent.appendChild(modalHeader);

  const modalBody = document.createElement('div');
  modalBody.id = 'modal-form';
  modalBody.className = 'modal-body';

  const modalBlocks = {
    firstName: 'First Name',
    lastName: 'Last Name',
    position: 'Position',
  };

  Object.entries(modalBlocks).forEach(([id, name]) => {
    const element = document.createElement('div');
    element.className = 'input-group mb-3';

    const childBlock = document.createElement('div');
    childBlock.className = 'input-group-prepend';

    if (name === 'Position') {
      const inputName = document.createElement('div');
      inputName.className = 'btn modal__btn-name';
      inputName.innerHTML = name;

      childBlock.appendChild(inputName);

      const selectInput = document.createElement('select');
      selectInput.id = id;
      selectInput.className = 'custom-select';
      selectInput.required = true;

      const selectOptions = ['Front-end dev', 'Back-end dev', 'Full stack dev',
        'Mobile dev', 'Web designer', 'HR', 'Tester', 'Service manager'];
      selectOptions.forEach((optionName) => {
        const option = document.createElement('option');
        option.innerHTML = optionName;
        selectInput.appendChild(option);
      });
      element.appendChild(selectInput);
    } else {
      const inputName = document.createElement('span');
      inputName.className = 'input-group-text';
      inputName.innerHTML = name;

      childBlock.appendChild(inputName);
      element.appendChild(childBlock);

      const input = document.createElement('input');
      input.type = 'text';
      input.id = id;
      input.className = 'form-control';
      input.required = true;

      element.appendChild(input);
    }
    modalBody.appendChild(element);
  });

  modalContent.appendChild(modalBody);

  const modalFooter = document.createElement('div');
  modalFooter.className = 'modal-footer';

  const submit = document.createElement('button');
  submit.id = 'modal-submit';
  submit.className = 'btn btn-primary';
  submit.innerHTML = 'Save changes';
  submit.addEventListener('click', () => Submit());

  modalFooter.appendChild(submit);
  modalContent.appendChild(modalFooter);

  modal.appendChild(modalContent);

  return modal;
};

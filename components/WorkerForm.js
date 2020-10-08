import store from '../redux/store';
import { closeModal } from '../redux/ducks/modal';
import InputName from './InputName';
import InputPosition from './InputPosition';

export default ({
  visibility = false,
  firstNameInput = '',
  lastNameInput = '',
  positionInput = 'Front-end dev',
  onSubmit,
}) => {
  const state = {
    firstNameState: firstNameInput,
    lastNameState: lastNameInput,
    selectState: positionInput,
  };

  const { firstNameState, lastNameState, selectState } = state;

  const changeInput = (fieldName) => (e) => {
    state[fieldName] = e.target.value;
  };

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
  closeBtn.addEventListener('click', () => store.dispatch(closeModal()));

  modalHeader.appendChild(modalTitle);
  modalHeader.appendChild(closeBtn);

  modalContent.appendChild(modalHeader);

  const modalBody = document.createElement('div');
  modalBody.id = 'modal-form';
  modalBody.className = 'modal-body';

  const firstName = InputName(firstNameState, 'First Name', changeInput('firstNameState'));
  const lastName = InputName(lastNameState, 'Last Name', changeInput('lastNameState'));
  const position = InputPosition(selectState, 'Position', changeInput('selectState'));

  modalBody.appendChild(firstName);
  modalBody.appendChild(lastName);
  modalBody.appendChild(position);
  modalContent.appendChild(modalBody);

  const modalFooter = document.createElement('div');
  modalFooter.className = 'modal-footer';

  const submit = document.createElement('button');
  submit.id = 'modal-submit';
  submit.className = 'btn btn-primary';
  submit.innerHTML = 'Save changes';
  submit.addEventListener('click', () => {
    onSubmit(state);
    store.dispatch(closeModal());
  });

  modalFooter.appendChild(submit);
  modalContent.appendChild(modalFooter);

  modal.appendChild(modalContent);

  return modal;
};

const modal = document.querySelector('#modal-window');
const closeIcon = document.querySelector('.close');
export const savebtn = document.querySelector('#modal-save-btn');

export const toggleModal = (isDisplay) => modal.style.display = isDisplay ? 'block' : 'none';

export const closeModal = () => {
  closeIcon.addEventListener('click', () => toggleModal(false));
  window.addEventListener('click', () => {
    if (event.target === modal) toggleModal(false);
  });
};

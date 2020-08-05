const modal = document.querySelector('#modal-window');
const closeIcon = document.querySelector(".close");
const savebtn = document.querySelector("#modal-save-btn");

const toggleModal = (isDisplay) => modal.style.display = isDisplay ? 'block' : 'none';

closeIcon.addEventListener('click', () => toggleModal(false));
window.addEventListener('click', () => {
  if (event.target === modal) toggleModal(false)
});
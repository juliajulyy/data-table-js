const arrowSort = document.querySelector("#sort-arrow");

const cc = () => {
  currentValue = arrowSort.value;
  if (currentValue === 'initial') {
    arrowSort.setAttribute('src', 'img/asc.png')
    currentValue = 'asc';
  }
}

arrowSort.addEventListener('click', () => cc);
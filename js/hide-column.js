const filterBtn = document.querySelector('#filter-btn');
const filterIcon = document.querySelector('#filter-icon');
const filterList = document.querySelector("#filter-list");

filterBtn.addEventListener('click', () => {
  filterList.classList.toggle("show");
});

window.addEventListener('click', (event) => {
  if ((event.target !== filterBtn) && (event.target !== filterIcon)) {
    if (filterList.classList.contains("show")) {
      filterList.classList.remove('show');
    }
  }
});
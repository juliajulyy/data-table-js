const filterBtn = document.querySelector('#filter-btn');
const filterIcon = document.querySelector('#filter-icon');
const filterList = document.querySelector("#filter-list");

filterBtn.addEventListener('click', () => {
  filterList.classList.toggle("show");
});

const ok = document.querySelector('#ok');
const inputCheckboxes = document.querySelectorAll("#filter-list input");

ok.addEventListener('click', () => {
  const checkedArr = [];
  let operate = true;
  Array.from(inputCheckboxes).forEach(item => {
    if (item.checked === true) {
      if (item.id === 'operate') {
        operate = false;
      } else {
        checkedArr.push(item.id);
      }
    } 
  })
  filterWorkers(checkedArr, operate);
  filterList.classList.remove('show');
})

const filterWorkers = (checkedArr, operate) => {
  const workers = getWorkers();
  const filteredWorkers = [];
  workers.forEach(worker => {
    Object.keys(worker).forEach((key) => {
      if (!checkedArr.includes(key)) {
        delete worker[key];
        console.log(worker)
      };
    })
    filteredWorkers.push(worker);
  })
  displayWorkers(filteredWorkers);
}
const btnEdit = `<button type="button" class="btn btn-outline-primary">Edit</button>`;
const btnDelete = `<button type="button" class="btn btn-outline-danger">Delete</button>`;

const displayWorkers = () => {
  const workers = getWorker();
  const tblBody = document.querySelector("#tbody");
  
  if (workers !== null) {
    workers.forEach(item => {
      const tblRow = document.createElement("tr");
      Object.values(item).forEach(value => {
        const cell = document.createElement("td")
        cell.textContent = value;
        tblRow.appendChild(cell);
      });
      tblRow.insertAdjacentHTML("beforeEnd", `<td class="table__btn">${btnEdit + btnDelete}</td>`);
      tblBody.appendChild(tblRow);
    });
  }
  
  return tblBody;
}
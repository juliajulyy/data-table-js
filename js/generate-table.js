const operateEdit = `<button type="button" class="btn btn-outline-primary">Edit</button>`;
const operateDelete = `<button type="button" class="btn btn-outline-danger">Delete</button>`;

const displayWorker = () => {
  const workers = getWorker();
  const tblBody = document.querySelector("#tbody");
  
  if (workers !== null) {
    workers.map(item => {
      const tblRow = document.createElement("tr");
      Object.values(item).map(value => {
        const cell = document.createElement("td")
        cell.textContent = value;
        tblRow.appendChild(cell);
      });
      tblRow.insertAdjacentHTML("beforeEnd", `<td class="table__btn">${operateEdit + operateDelete}</td>`);
      tblBody.appendChild(tblRow);
    });
  }
  
  return tblBody;
}
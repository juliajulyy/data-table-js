const workers = [
  {
    id: 1,
    firstName: "John",
    lastName: "Pool",
    position: "Front-end dev",
    createdDate: "11/12/2019"
  },
  {
    id: 2,
    firstName: "Mia",
    lastName: "Chester",
    position: "Front-end dev",
    createdDate: "02/03/2020"
  },
  {
    id: 3,
    firstName: "James",
    lastName: "Frazier",
    position: "HR",
    createdDate: "21/06/2020"
  }
]

const operateEdit = `<button type="button" class="btn btn-outline-primary">Edit</button>`;
const operateDelete = `<button type="button" class="btn btn-outline-danger">Delete</button>`;

const displayRow = () => {

  const tblBody = document.getElementById("tbody");    
  workers.map(item => {
    const tblRow = document.createElement("tr");
    for (key in item) {
      const cell = document.createElement("td")
      cell.textContent = item[key];
      tblRow.appendChild(cell);
    }
    tblRow.insertAdjacentHTML("beforeEnd", `<td class="table__btn">${operateEdit + operateDelete}</td>`);
    tblBody.appendChild(tblRow);
  });
  
  return tblBody;
}
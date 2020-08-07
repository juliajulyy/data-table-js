const displayWorkers = () => {
  const workers = getWorkers();
  const tblBody = document.querySelector("#tbody");

  tblBody.innerHTML = '';
  
  if (workers !== null) {
    workers.forEach(item => {
      const tblRow = document.createElement("tr");
      
      Object.values(item).forEach(value => {
        const cell = document.createElement("td")
        cell.textContent = value;
        tblRow.appendChild(cell);
      });

      const btnCol = document.createElement("td");

      const btnWrapper = document.createElement("div")
      btnWrapper.className = "table__btn";

      const btnEdit = document.createElement("button");
      btnEdit.innerHTML = "Edit";
      btnEdit.className = "btn btn-outline-primary edit-btn";
      btnEdit.dataset.index = item.id;
    
      const btnDelete = document.createElement("button");
      btnDelete.innerHTML = "Delete";
      btnDelete.className = "btn btn-outline-danger delete-btn";
      btnDelete.dataset.index = item.id;

      btnWrapper.appendChild(btnEdit);
      btnWrapper.appendChild(btnDelete);
      
      btnCol.appendChild(btnWrapper);
      tblRow.appendChild(btnCol);

      tblBody.appendChild(tblRow);
    });
  }
  return tblBody;
}
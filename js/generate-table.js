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

      const btnCol = document.createElement("td");
      btnCol.className = "table__btn";

      const btnEdit = document.createElement("button");
      btnEdit.innerHTML = "Edit";
      btnEdit.className = "btn btn-outline-primary edit-btn";
    
      const btnDelete = document.createElement("button");
      btnDelete.innerHTML = "Delete";
      btnDelete.className = "btn btn-outline-danger delete-btn"; 

      btnCol.appendChild(btnEdit);
      btnCol.appendChild(btnDelete);
      tblRow.appendChild(btnCol);

      tblBody.appendChild(tblRow);
    });
  }
  document.querySelectorAll('.btn-delete').forEach(function(el) {
    el.addEventListener('click', () => alert('hi'))
    console.log(el);
  });

  return tblBody;
}
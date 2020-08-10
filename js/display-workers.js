const displayWorkers = (workers, operate = true) => {
  const table = document.querySelector('#table');
  const tblHead = document.createElement('thead');
  const tblBody = document.createElement('tbody');
  const tr = document.createElement('tr');

  tblHead.className = "thead-light";
  table.innerHTML = '';

  const tableHeaders = {
    id: 'ID',
    firstName: 'First Name',
    lastName: 'Last Name',
    position: 'Position',
    createdDate: 'Created Date',
  }

  const createThead = (key) => {
    const th = document.createElement('th');
    const span = document.createElement('span');
    span.innerHTML = tableHeaders[key];
    const img = document.createElement('img');
    img.className = 'filters__arrow initial__arrow';
    img.src = 'img/sort-arrow.png';
    th.appendChild(span);
    th.appendChild(img);
    tr.appendChild(th);
  }

  const createOperateTh = () => {
    const thOperate = document.createElement('th');
    thOperate.innerHTML = 'Operate';
    tr.appendChild(thOperate);
  }

  if (workers.length === 0) {
    Object.keys(tableHeaders).forEach(key => {
      createThead(key);
    })
    const tblRow = document.createElement("tr");
    const td = document.createElement("td");

    td.setAttribute("colspan", 6);
    td.innerHTML = 'Nothing was found for your query.';

    tblRow.appendChild(td);
    tblBody.appendChild(tblRow);

  } else if (workers !== null) {
    Object.keys(workers[0]).forEach(key => {
      if (tableHeaders.hasOwnProperty(key)) {
        createThead(key);
      }
    })
  
    if (operate === true) {
      createOperateTh();
    }
    workers.forEach(item => {
      const tblRow = document.createElement("tr");
      
      Object.values(item).forEach(value => {
        const cell = document.createElement("td")
        cell.textContent = value;
        tblRow.appendChild(cell);
      });

      if (operate === true) {
        const btnCol = document.createElement("td");

        const btnWrapper = document.createElement("div")
        btnWrapper.className = "table__btn";

        const btnEdit = document.createElement("button");
        btnEdit.innerHTML = "Edit";
        btnEdit.className = "btn btn-outline-primary edit-btn";
        btnEdit.dataset.index = item.id;
        btnEdit.addEventListener('click', editWorker);
    
        const btnDelete = document.createElement("button");
        btnDelete.innerHTML = "Delete";
        btnDelete.className = "btn btn-outline-danger delete-btn";
        btnDelete.dataset.index = item.id;
        btnDelete.addEventListener('click', deleteWorker);

        btnWrapper.appendChild(btnEdit);
        btnWrapper.appendChild(btnDelete);
      
        btnCol.appendChild(btnWrapper);
        tblRow.appendChild(btnCol);
      }
      tblBody.appendChild(tblRow);
    });
  }
  tblHead.appendChild(tr);

  table.appendChild(tblHead);
  table.appendChild(tblBody);

  return table;
}
const displayHeader = (workers, operate) => {
  const tblHead = document.querySelector('#thead');
  tblHead.innerHTML = '';

  const tr = document.createElement('tr');

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
    th.appendChild(span);
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
    createOperateTh();
  } else if (workers !== null) {
    Object.keys(workers[0]).forEach(key => {
      if (tableHeaders.hasOwnProperty(key)) {
        createThead(key);
      }
    })
    if (operate === true) {
      createOperateTh();
    }
  }
  tblHead.appendChild(tr);

  return tblHead;
}
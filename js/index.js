const generateRow = () => {

  const tblBody = document.getElementById("tbody");
  const tblHead = document.getElementById("thead");
  const cells = tblHead.getElementsByTagName('th');

  const tblRow = document.createElement("tr");

  for (let i = 0; i < cells.length; i++) {
    let cell = document.createElement("td");
    let cellText = document.createTextNode("underfined");

    cell.appendChild(cellText);
    tblRow.appendChild(cell);
  }

    tblBody.appendChild(tblRow);
}
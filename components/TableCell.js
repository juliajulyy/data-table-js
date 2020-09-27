export default (cellText) => {
  const cell = document.createElement('td');
  cell.innerHTML = cellText;

  return cell;
};

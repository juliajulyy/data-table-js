const createWorker = () => {

  const firstName = document.getElementById('first-name').value;
  const lastName = document.getElementById('last-name').value;
  const position = document.getElementById('inputGroupSelect').value;

  return new NewWorker(firstName, lastName, position);
}

const createWorker = () => {

  const firstName = document.querySelector('#first-name').value;
  const lastName = document.querySelector('#last-name').value;
  const position = document.querySelector('#inputGroupSelect').value;

  return new NewWorker(firstName, lastName, position);
}

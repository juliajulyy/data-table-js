const createWorker = () => {
  const validateName = (str) => str.replace(/\s/g,'').length > 2;

  const firstName = document.querySelector('#first-name').value;
  const lastName = document.querySelector('#last-name').value;
  const position = document.querySelector('#inputGroupSelect').value;

  if (validateName(firstName) && validateName(lastName)) {
    return new NewWorker(firstName, lastName, position);
  }
  return createWorker();
}
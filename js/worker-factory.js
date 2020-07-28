class NewWorker {
  constructor(firstName, lastName, position) {
    this.id = (getWorker() === null) ? 1 : getWorker().length + 1;
    this.firstName = firstName;
    this.lastName = lastName;
    this.position = position;
    this.createdDate = (new Date().getMonth() + 1) + '/' + new Date().getDate() + '/' + new Date().getFullYear();
  }
}
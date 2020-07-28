class NewWorker {
  constructor(firstName, lastName, position) {
    this.id = (getWorker() === null) ? 1 : getWorker().length + 1;
    this.firstName = firstName[0].toUpperCase() +  firstName.toLowerCase().substring(1);
    this.lastName = lastName[0].toUpperCase() + lastName.toLowerCase().substring(1);
    this.position = position;
    this.createdDate = (new Date().getMonth() + 1) + '/' + new Date().getDate() + '/' + new Date().getFullYear();
  }
}
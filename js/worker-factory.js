export class NewWorker {
  constructor(firstName, lastName, position) {
    this.id = Math.round(Math.random() * new Date().getMilliseconds());
    this.firstName = firstName;
    this.lastName = lastName;
    this.position = position;
    this.createdDate = (new Date().getMonth() + 1) + '/' + new Date().getDate() + '/' + new Date().getFullYear();
  }
}
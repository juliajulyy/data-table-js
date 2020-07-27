class NewWorker {
  constructor(firstName, lastName, position) {
    this.id = new Date().getMilliseconds();
    this.firstName = firstName;
    this.lastName = lastName;
    this.position = position;
    this.createdDate = Date.now();
  }
}
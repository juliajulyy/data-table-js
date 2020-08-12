(function () {
  const main = () => {

    const workers = [
      {
        id: 1,
        firstName: "John",
        lastName: "Pool",
        position: "Front-end dev",
        createdDate: "11/12/2019"
      },
      {
        id: 2,
        firstName: "Mia",
        lastName: "Chester",
        position: "Front-end dev",
        createdDate: "02/03/2020"
      },
      {
        id: 3,
        firstName: "James",
        lastName: "Frazier",
        position: "HR",
        createdDate: "06/06/2020"
      },
      {
        id: 4,
        firstName: "Matt",
        lastName: "Smith",
        position: "Back-end dev",
        createdDate: "07/17/2020"
      },
      {
        id: 5,
        firstName: "Joe",
        lastName: "Cole",
        position: "Tester",
        createdDate: "01/08/2020"
      },
      {
        id: 6,
        firstName: "Ulyana",
        lastName: "Kravchenko",
        position: "Front-end dev",
        createdDate: "03/07/2020"
      }
    ];

    if (!localStorage.getItem('workers')) {
      workers.forEach(item => SetLocalWorker.setWorker(item))
    }

    localStorage.removeItem('sortedWorkers');

    DisplayWorkers.displayWorkers(GetLocalWorker.getWorkers());
  }

  window.addEventListener('load', main);
})();
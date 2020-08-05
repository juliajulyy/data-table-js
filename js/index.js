const main = () => {

  // const workers = [
  //   {
  //     id: 1,
  //     firstName: "John",
  //     lastName: "Pool",
  //     position: "Front-end dev",
  //     createdDate: "11/12/2019"
  //   },
  //   {
  //     id: 2,
  //     firstName: "Mia",
  //     lastName: "Chester",
  //     position: "Front-end dev",
  //     createdDate: "02/03/2020"
  //   },
  //   {
  //     id: 3,
  //     firstName: "James",
  //     lastName: "Frazier",
  //     position: "HR",
  //     createdDate: "21/06/2020"
  //   }
  // ];

  // const workers = getWorker();

  // setWorker([
  //   ...(workers === null) ? [] : workers,
  //   ...workers,
  // ]);
  const addNewbtn = document.querySelector("#add-new");
  addNewbtn.addEventListener('click', addWorker);

  displayWorkers();

  const deleteBtns = document.querySelectorAll(".delete-btn");
  Array.from(deleteBtns).forEach(btn => {
    btn.addEventListener('click', deleteWorker);
  });

  const editBtns = document.querySelectorAll(".edit-btn");

  Array.from(editBtns).forEach(btn => {
    btn.addEventListener('click', editWorker);
  });
}

window.addEventListener('load', main);

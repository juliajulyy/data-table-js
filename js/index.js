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

  const modal = document.querySelector('#modal-window');
  const addNewbtn = document.querySelector("#add-new");
  const closeIcon = document.querySelector(".close");
  const hideModal = (willHide) => modal.style.display = willHide ? 'none' : 'block';

  addNewbtn.addEventListener('click', () => hideModal(false));
  closeIcon.addEventListener('click', () => {
    console.log('close clicked')
    hideModal(true);
  });
  window.addEventListener('click', () => {
    if (event.target === modal) hideModal(true)
  });

  displayWorker();
}

main();
const colBtn = document.querySelector("#drop-btn");
const dropdown = document.querySelector("#dropdown");

const openDropdown = () => {
  dropdown.classList.toggle("show");
}

window.addEventListener('click', (event) => {
  if (event.target !== colBtn) {
    const dropdowns = document.querySelectorAll("#dropdown li");

    Array.from(dropdowns).forEach(item => {
      if (item.classList.contains('show')) {
        item.classList.remove('show');
      }
    });
  }
});
export default ({ submit, visibility = true }) => {
  const modal = document.createElement('div');
  modal.id = 'modal-window';
  modal.className = 'modal';
  modal.style.display = visibility ? 'block' : 'none';

  modal.innerHTML = `
    <div class="modal__content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Add a new employee</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div id="modal-form" class="modal-body">
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text">First Name</span>
          </div>
          <input type="text" id="first-name" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" minlength="3" required>
        </div>
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text">Last Name</span>
          </div>
          <input type="text" id="last-name" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" minlength="3" required>
        </div>
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <div class="btn modal__btn-name">Position</div>
          </div>
          <select class="custom-select" id="inputGroupSelect">
            <option>Front-end dev</option>
            <option>Back-end dev</option>
            <option>Full stack dev</option>
            <option>Mobile dev</option>
            <option>Web designer</option>
            <option>HR</option>
            <option>Tester</option>
            <option>Service manager</option>
          </select>
        </div>
      </а>
      <div class="modal-footer">
        <button id="modal-save-btn" onclick="(${submit})()" class="btn btn-primary">
          Save changes
        </button>
      </div>
    </div>
    `;

  return modal;
};

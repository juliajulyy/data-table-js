const initialState = {
  createModal: false,
  updateModal: false,
};

const OPEN_CREATE = 'OPEN_CREATE';
const OPEN_UPDATE = 'OPEN_UPDATE';
const CLOSE_MODAL = 'CLOSE_MODAL';

export const openCreate = () => ({ type: OPEN_CREATE });
export const openUpdate = () => ({ type: OPEN_UPDATE });
export const closeModal = () => ({ type: CLOSE_MODAL });

export default (state = initialState, action) => {
  switch (action.type) {
    case OPEN_CREATE: return {
      ...state,
      createModal: true,
    };
    case OPEN_UPDATE: return {
      ...state,
      updateModal: true,
    };
    case CLOSE_MODAL: return {
      ...state,
      createModal: false,
      updateModal: false,
    };
    default:
      return state;
  }
};

export const selectCreateModal = (state) => state.modal.createModal;
export const selectUpdateModal = (state) => state.modal.updateModal;

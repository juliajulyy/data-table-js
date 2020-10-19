const initialState = {
  toggleModal: false,
  checkedItems: [],
};

const TOGGLE_MODAL = 'TOGGLE_MODAL';
const CHECK_ITEMS = 'CHECK_ITEMS';

export const toggleModal = () => ({ type: TOGGLE_MODAL });
export const checkItems = (payload) => ({ type: CHECK_ITEMS, payload });

export default (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_MODAL: return {
      ...state,
      toggleModal: !state.toggleModal,
    };
    case CHECK_ITEMS: return {
      ...state,
      checkedItems: action.payload,
    };
    default:
      return state;
  }
};

export const selectCheckboxModal = (state) => state.checkboxModal.toggleModal;
export const selectChekedItems = (state) => state.checkboxModal.checkedItems;

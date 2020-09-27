const initialState = [
  {
    name: 'ID',
    visibility: true,
    sort: 'INIT',
  },
  {
    name: 'First Name',
    visibility: true,
    sort: 'INIT',
  },
  {
    name: 'Last Name',
    visibility: true,
    sort: 'INIT',
  },
  {
    name: 'Position',
    visibility: true,
    sort: 'INIT',
  },
  {
    name: 'Created Date',
    visibility: true,
    sort: 'INIT',
  },
  {
    name: 'Operate',
    visibility: true,
    sort: null,
  },
];

const sortOptions = [
  'INIT',
  'ASC',
  'DESC',
];

const switchOption = (currentOption) => {
  const curretntIndex = sortOptions.indexOf(currentOption);
  return sortOptions[(curretntIndex + 1) % sortOptions.length];
};

const CHANGE_ARROW = 'CHANGE_ARROW';

export const changeArrow = (payload) => ({ type: CHANGE_ARROW, payload });

export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_ARROW: return state.map((item) => (item.name === action.payload
      ? { ...item, sort: switchOption(item.sort) } : item));
    default:
      return state;
  }
};

export const selectColumns = (state) => state.header;

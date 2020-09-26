const initialState = {
  items: [
    {
      id: 1,
      firstName: 'John',
      lastName: 'Pool',
      position: 'Front-end dev',
      createdDate: '11/12/2019',
    },
    {
      id: 2,
      firstName: 'Mia',
      lastName: 'Chester',
      position: 'Front-end dev',
      createdDate: '02/03/2020',
    },
    {
      id: 3,
      firstName: 'James',
      lastName: 'Frazier',
      position: 'HR',
      createdDate: '06/06/2020',
    },
    {
      id: 4,
      firstName: 'Matt',
      lastName: 'Smith',
      position: 'Back-end dev',
      createdDate: '07/17/2020',
    },
    {
      id: 5,
      firstName: 'Joe',
      lastName: 'Cole',
      position: 'Tester',
      createdDate: '01/08/2020',
    },
    {
      id: 6,
      firstName: 'Ulyana',
      lastName: 'Kravchenko',
      position: 'Front-end dev',
      createdDate: '03/07/2020',
    },
  ],
};

const ADD_NEW_WORKER = 'ADD_NEW_WORKER';

export const addNewWorker = (payload) => ({ type: ADD_NEW_WORKER, payload });

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEW_WORKER: return {
      ...state,
      items: [...state.items, action.payload],
    };
    default:
      return state;
  }
};

export const selectWorkers = (state) => state.workers.items;

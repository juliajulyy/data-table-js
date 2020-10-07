import { combineReducers } from 'redux';
import workers from './ducks/workers';
import header from './ducks/header';
import modal from './ducks/modal';

export default combineReducers({
  workers,
  header,
  modal,
});

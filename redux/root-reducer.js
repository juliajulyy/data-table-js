import { combineReducers } from 'redux';
import workers from './ducks/workers';
import header from './ducks/header';
import modal from './ducks/modal';
import checkboxModal from './ducks/checkboxModal';

export default combineReducers({
  workers,
  header,
  modal,
  checkboxModal,
});

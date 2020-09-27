import { combineReducers } from 'redux';
import workers from './ducks/workers';
import header from './ducks/header';

export default combineReducers({
  workers,
  header,
});

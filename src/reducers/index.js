import { combineReducers } from 'redux';
import giphReducer from './giphReducer';

export default combineReducers({
  giph: giphReducer
});
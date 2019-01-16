import { combineReducers } from 'redux';
import dummyReducer from './dummyReducer';
import counterReducer from './counterReducer';

export default combineReducers({
  dummyReducer,
  counterReducer,
});

import { combineReducers } from 'redux';
import { stepsReducer } from './steps_reducer';

const rootReducer = combineReducers({
  stepsroot: stepsReducer
});

export default rootReducer;

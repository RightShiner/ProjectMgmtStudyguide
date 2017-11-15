import { combineReducers } from 'redux';
import { stepsReducer } from './steps_reducer';

const rootReducer = combineReducers({
  steps_state: stepsReducer
});

export default rootReducer;

import { combineReducers } from 'redux';
import { stepsReducer } from './steps_reducer';

const rootReducer = combineReducers({
  steps: stepsReducer
});

export default rootReducer;

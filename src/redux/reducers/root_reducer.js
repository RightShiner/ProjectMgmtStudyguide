import { combineReducers } from 'redux';
import { stepsReducer } from './steps_reducer';
import kaFilter from './ka_filter';
import pgFilter from './pg_filter';


const rootReducer = combineReducers({
  kaFilter,
  pgFilter,
  steps: stepsReducer
});

export default rootReducer;

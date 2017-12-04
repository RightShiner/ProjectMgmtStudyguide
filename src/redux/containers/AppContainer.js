import { connect } from 'react-redux';
import { getSteps } from '../actions/get_steps.js';
import {setKaFilter} from '../actions/get_steps.js';
import {setPgFilter} from '../actions/get_steps.js';
import App from '../../client/App.js';

function kaFilterThis(state){
    var returnedArr = [];
    
    for(let obj of state){
      returnedArr.push(obj)
    }
    return returnedArr;
}

function mapStateToProps(state) {
  return {
    // steps : filterSteps(state.steps.stepgroups, state.pgFilter,state.kaFilter)
    steps : state.steps
    // kaFiltered : kaFilterThis(state.steps.stepgroups)
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onGetSteps: () => dispatch(getSteps()),
    setNewKaFilter: (x) => dispatch(setKaFilter(x)),
    setNewPgFiler: (y) => dispatch(setPgFilter(y))
  };
}

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;


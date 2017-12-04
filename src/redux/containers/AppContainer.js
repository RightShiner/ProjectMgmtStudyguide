import { connect } from 'react-redux';
import { getSteps } from '../actions/get_steps.js';
import {setKaFilter} from '../actions/get_steps.js';
import {setPgFilter} from '../actions/get_steps.js';
import App from '../../client/App.js';

function kaFilterThis(state,filter){
    for(const prop in state){
      return state[prop] === filter
    }
}

function mapStateToProps(state) {
  return {
    // steps : filterSteps(state.steps.stepgroups, state.pgFilter,state.kaFilter)
    steps : state.steps.stepgroups,
    kaFiltered : kaFilterThis(state.steps.stepgroups,state.kaFilter)
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


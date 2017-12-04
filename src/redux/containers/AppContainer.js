import { connect } from 'react-redux';
import { getSteps } from '../actions/get_steps.js';
import {setKaFilter} from '../actions/get_steps.js';
import {setPgFilter} from '../actions/get_steps.js';
import App from '../../client/App.js';

// create function that manipulates state.steps data and
// passes that data to App

function filterSteps (steps, pgFilter, kaFilter){
	var i, stepObject;
	for( i = 0; i < steps.length; i++){
		for( stepObject in steps[i]){
			return steps[i][stepObject]
		}
	}
}

// ********** it's not recognizing state.steps.stepgroups in above function for looping through 

function mapStateToProps(state) {
  return {
    // steps : filterSteps(state.steps.stepgroups, state.pgFilter,state.kaFilter)
    steps : state.steps.stepgroups

  };
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


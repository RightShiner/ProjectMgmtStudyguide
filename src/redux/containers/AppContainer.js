import { connect } from 'react-redux';
import { getSteps } from '../actions/get_steps.js';
import {setKaFilter} from '../actions/get_steps.js';
import App from '../../client/App.js';

// create function that manipulates state.steps data and
// passes that data to App

function filterSteps (steps, pgFilter, kaFilter){
	 return steps;
}


function mapStateToProps(state) {
  return {
    steps : state.steps.datagroups
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onGetSteps: () => dispatch(getSteps()),
    setNewKaFilter: (x) => dispatch(setKaFilter(x))
  };
}

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;


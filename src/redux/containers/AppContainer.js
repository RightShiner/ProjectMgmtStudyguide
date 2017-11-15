import { connect } from 'react-redux';
import { getSteps } from '../actions/get_steps.js';
import App from '../../client/App.js';

function mapStateToProps(state) {
  return {
    steps: state.steps
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onGetSteps: () => dispatch(getSteps())
  };
}

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;


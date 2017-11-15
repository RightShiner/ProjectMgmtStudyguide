
export function stepsReducer(state = {}, action) {
  switch(action.type) {
    case 'GET_STEPS_REQUESTED': {
      return Object.assign({}, state, {
        inProgress: true,
        error: '',
        success: ''
      });
    }
    case 'GET_STEPS_REJECTED': {
      return Object.assign({}, state, {
        inProgress: false,
        error: 'Error in getting steps.',
      });
    }
    case 'GET_STEPS_FULFILLED': {
      const newState = Object.assign({}, state, {
        inProgress: false,
        success: 'Got steps.',
        steps : action.steps
      });
      newState.steps = [];
      if (action.steps) {
        newState.steps = Object.keys(action.steps).map(k => action.steps[k]);
      }
      return newState;
    }
   
    default:
      return state;
  }
}



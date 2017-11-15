
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
    // case ActionTypes.GetStepsFulfilled: {
    //   const { host, agenda, guests } = action.invite;
    //   const newState = Object.assign({}, state, {
    //     inProgress: false,
    //     success: 'Got invite.',
    //     host,
    //     agenda
    //   });
    //   newState.guests = [];
    //   if (guests) {
    //     newState.guests = Object.keys(guests).map(k => guests[k]);
    //   }
    //   return newState;
    // }
   
    default:
      return state;
  }
}
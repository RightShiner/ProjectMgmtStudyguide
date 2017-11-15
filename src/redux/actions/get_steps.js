import database from './database.js';

export function getSteps(){
	return dispatch => {
		dispatch(getStepsRequestedAction());
		dispatch(getStepsRejectedAction());
		// return database.ref('/').once('value',snap => {
		// 	const steps = snap.val();
		// 	dispatch(getStepsFulfilledAction(steps))
		// })

// 		export function getInvite() {
//   return dispatch => {
//     dispatch(getInviteRequestedAction());
//     return database.ref('/').once('value', snap => {
//       const invite = snap.val();
//       dispatch(getInviteFulfilledAction(invite))
//     })
//     .catch((error) => {
//       console.log(error);
//       dispatch(getInviteRejectedAction());
//     });
//   }
// }
	}
}

function getStepsRequestedAction(){
	return {
		type: 'GET_STEPS_REQUESTED'
	}
}

function getStepsRejectedAction(){
	return {
		type: 'GET_STEPS_REJECTED'
	}
}

function getStepsFulfilledAction(){
	return {
		type: 'GET_STEPS_FULFILLED'
	}
}








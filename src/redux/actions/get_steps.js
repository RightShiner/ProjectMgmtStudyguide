import database from './database.js';

export function getSteps(){
	return dispatch => {
		dispatch(getStepsRequestedAction());
		return database.ref('/').once('value',snap => {
			const steps = snap.val();
			// console.log("look" + steps);  // Obj Obj
			dispatch(getStepsFulfilledAction(steps))
		})
		.catch((error) => {
			console.log(error);
			dispatch(getStepsRejectedAction());
		});
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

function getStepsFulfilledAction(steps){
	return {
		type: 'GET_STEPS_FULFILLED',
		steps
	}
}







const kaFilter = (state='Project Integration Management', action) => {
	switch(action.type) {
		case 'SET_KA_FILTER':
		  return action.kaFilter 
		default: 
			return state 
	}
}

export default kaFilter
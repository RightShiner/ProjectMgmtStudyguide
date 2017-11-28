const pgFilter = (state='Initiating', action) => {
	switch(action.type) {
		case 'SET_PG_FILTER':
		  return action.pgFilter 
		default: 
			return state 
	}
}

export default pgFilter
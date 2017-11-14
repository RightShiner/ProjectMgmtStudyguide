import React from 'react';
import KAFilter from './KAFilter.js';
import PGFilter from './PGFilter.js';


export default class FilterBar extends React.Component {
	render(){
		return (
				<div>
					<ul>
						<KAFilter /> 
						<PGFilter  /> 
						<h3>Build button to submit here</h3>
					</ul>
				</div>
			);
	}
}
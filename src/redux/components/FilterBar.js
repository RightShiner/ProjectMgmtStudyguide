import React from 'react';
import KAFilter from './KAFilter.js';
import PGFilter from './PGFilter.js';


export default class FilterBar extends React.Component {
	render(){
		return (
				<div>
					<p>Hi I am a FilterBar Component</p>
					<ul>
						<KAFilter /> 
						<PGFilter  /> 
					</ul>
				</div>
			);
	}
}
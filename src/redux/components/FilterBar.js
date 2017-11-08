import React from 'react';
import KnowledgeAreaFilter from './KnowledgeAreaFilter.js';
import ProcessGroupFilter from './ProcessGroupFilter.js';


export default class FilterBar extends React.Component {
	render(){
		return (
				<div>
					<p>Hi I am a FilterBar Component</p>
					<ul>
						<KnowledgeAreaFilter /> 
						<ProcessGroupFilter  /> 
					</ul>
				</div>
			);
	}
}
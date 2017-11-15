import React from 'react';
import PGDataRow from './PGDataRow.js';
import KADataRow from './KADataRow.js';
import StepRow from './StepRow.js';


export default class DataTable extends React.Component {

	// constructor(props){
	// 	super(props);
	// 	this.state = {
	// 		process_group: ,
	// 		knowledge_area: ''
	// 	};
	// }
	render(){
		const process_group = this.props.process_group;
		const knowledge_area = this.props.knowledge_area;
		const rows = [];

		
		
		return (
				<div>
					<h3>hello</h3>
					<h4>Data groups:{this.props.data_groups[0]}</h4>
				</div>
			);
	}
}
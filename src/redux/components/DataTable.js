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
		const local_process_group = this.props.local_process_group;
		const local_knowledge_area = this.props.local_knowledge_area;
		const rows = [];
        const { data, knowledge_area,process_group } = this.props.steps;

		
		return (
				<div>
					<h3>hello</h3>
				</div>
			);
	}
}
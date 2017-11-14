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
		console.log("process_group is " + process_group); // yes
		console.log("knowledge_area is " + knowledge_area); //yes

		const rows = [];

		this.props.data_groups.map((group) => {
			if(group.process_group.indexOf(process_group)  === -1){
				return;
			}
			if(group.knowledge_area.indexOf(knowledge_area) === -1){
				return;
			}
			rows.push(
				<div>
				  <PGDataRow  process_group={group.process_group} />
				  <KADataRow knowledge_area={group.knowledge_area} />
				  <StepRow step={group.data} />
				</div>
				)
		})
		
		return (
				<div>
					{rows[0]}
				</div>
			);
	}
}
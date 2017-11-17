import React from 'react';
import PGDataRow from './PGDataRow.js';
import KADataRow from './KADataRow.js';
import StepRow from './StepRow.js';

export default class DataTable extends React.Component {

	render(){
		const local_process_group = this.props.local_process_group;
		const local_knowledge_area = this.props.local_knowledge_area;


   	    return (
   	    		<div>
   	    		  	<p>passed in as prop: {this.props.steps}</p>
   	    		</div>
   	    	   )
			}	
}
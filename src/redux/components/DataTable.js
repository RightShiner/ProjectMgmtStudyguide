import React from 'react';
import PGDataRow from './PGDataRow.js';
import KADataRow from './KADataRow.js';
import StepRow from './StepRow.js';

export default class DataTable extends React.Component {

	render(){
		const local_process_group = this.props.local_process_group;
		const local_knowledge_area = this.props.local_knowledge_area;

   		const {steps}= this.props.steps;


   	    return (
   	    		<div>
   	    		    {steps && steps.length > 0 ? (
			            <ul>
			              {steps.map((step, index) => {
			              	console.log("here"+step.knowledge_area)
			                return (
			                  <li key={index}>
			                    KA: {step.knowledge_area}
			                    PA: {step.process_area}
			                    Step: {step.data}

			                  </li>
			                );
			              })}
			            </ul>
          ) : null}
   	    		</div>
   	    	   )
			}	
}
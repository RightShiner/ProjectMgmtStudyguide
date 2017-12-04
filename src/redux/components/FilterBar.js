import React from 'react';
// import KAFilter from './KAFilter.js';
// import PGFilter from './PGFilter.js';
import {FormGroup,ControlLabel,FormControl} from 'react-bootstrap';
// import {Grid,Row,Col} from 'react-bootstrap';



// function logChange(val) {
//   console.log('Selected: ', val);
// }

export default class FilterBar extends React.Component {
	constructor(props){
		super(props);
		this.handlePGFilterTextChange = this.handlePGFilterTextChange.bind(this);
		this.handleKAFilterTextChange = this.handleKAFilterTextChange.bind(this);
	}

	handlePGFilterTextChange(e){
		this.props.onPGFilterTextChange(e.target.value);
	}

	handleKAFilterTextChange(e){
		this.props.onKAFilterTextChange(e.target.value);
	}


	render(){
		return (
				<div>
				  <FormGroup controlId="formControlsSelect">
          			 <ControlLabel>Select Process Group</ControlLabel>
        		       <FormControl 
             			 onChange={this.handlePGFilterTextChange}
              			 componentClass="select" placeholder="Select Process Group">
               				 <option value="Initiating">Initiating</option>
							 <option value="Planning">Planning</option>
							 <option value="Executing">Executing</option>
							 <option value="Monitoring & Controlling">Monitoring & Controlling</option>
							 <option value="Closing">Closing</option>
          			   </FormControl>
        		  </FormGroup>
        		  <FormGroup controlId="formControlsSelect">
          			 <ControlLabel>Select Knowledge Area</ControlLabel>
        		       <FormControl 
             			 onChange={this.handleKAFilterTextChange}
              			 componentClass="select" placeholder="Select Knowledge Area">
								<option value="Project Integration Management">Project Integration Management</option>
								<option value="Project Scope Management">Project Scope Management</option>
								<option value="Project Time Management">Project Time Management</option>
								<option value="Project Cost Management">Project Cost Management</option>
								<option value="Project Quality Management">Project Quality Management</option>
								<option value="Project Human Resource Management">Project Human Resource Management</option>
								<option value="Project Communications Management">Project Communications Management</option>
								<option value="Project Risk Management">Project Risk Management</option>
								<option value="Project Procurement Management">Project Procurement Management</option>
								<option value="Project Stakeholder Management">Project Stakeholder Management</option>
          			   </FormControl>
        		  </FormGroup>
					
				</div>
			);
	}
}
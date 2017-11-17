import React, { Component } from 'react';
import './App.css';
import FilterBar from '../redux/components/FilterBar.js';
import DataTable from '../redux/components/DataTable.js';
import {Grid,Row,Col,Jumbotron} from 'react-bootstrap';



class App extends Component {
	constructor(props){
		super(props);
		this.state = {
			// no need for steps here at this state is component level only
			local_process_group: 'Initiating',
			local_knowledge_area: 'Project Integration Management',
			steps: [{
    			process_group: "Initiating",
    			knowledge_area: "Project Integration Management",
    			data: "bonjour taco :)"},
    			{
    			process_group: "Initiating2",
    			knowledge_area: "Project Integration Management",
    			data: "bonjour burrito :)"}],
			step: "test"
		};
		this.handlePGFilterTextChange = this.handlePGFilterTextChange.bind(this);
		this.handleKAFilterTextChange = this.handleKAFilterTextChange.bind(this);
		this.setFilteredStep = this.setFilteredStep.bind(this);
	}

	
	  handlePGFilterTextChange(PGFilterText){
	  	this.setState({
	  		local_process_group: PGFilterText
	  	});
	  }

	  handleKAFilterTextChange(KAFilterText){
	  	this.setState({
	  		local_knowledge_area: KAFilterText
	  	});
	  }

	  setFilteredStep(datagroup){
	  	    for(var i = 0; i<datagroup.length; i++){
	  	    	if(datagroup[i].process_group === this.state.local_process_group && datagroup[i].knowledge_area === this.state.local_knowledge_area){
	  	    	this.setState({
	  							step: datagroup[i].data
	  	 					 });
	  	   		 }
	  	     else{
	  	     	this.setState({
	  				steps: "nothing new"
	  	 			});
	  	     }
	  	console.log("all set");
	 	  }
	  }
	  	    

	   componentDidMount() {
    		this.props.onGetSteps();
    		this.setFilteredStep(this.state.steps);
    		}

  render() {


    return (

      <div className="App">
        <Jumbotron>
        	<h3>Five Traditional Process Groups</h3>
        </Jumbotron>
        <FilterBar
          onPGFilterTextChange={this.handlePGFilterTextChange}
          onKAFilterTextChange={this.handleKAFilterTextChange}
         />
        <DataTable  step = {this.state.step} local_process_group={this.state.local_process_group} local_knowledge_area={this.state.local_knowledge_area} />
      </div>
    );
  }
}



export default App;

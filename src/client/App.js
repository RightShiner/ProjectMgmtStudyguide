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
			steps: "test"
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
	  		this.setState({
	  		steps: datagroup.data
	  	 });
	  	
	  	console.log("all set");
	  }

	   componentDidMount() {
    		this.props.onGetSteps();
    		this.setFilteredStep({process_group: "Initiating", data: "drink more coffee"});
    		console.log("huh" + this.state.step);
    		}

  render() {


    return (

      <div className="App">
        <Jumbotron>
        	<h3>Five Traditional Process Groups</h3>
        </Jumbotron>
        <h4>{this.state.steps}</h4>
        <FilterBar
          onPGFilterTextChange={this.handlePGFilterTextChange}
          onKAFilterTextChange={this.handleKAFilterTextChange}
         />
        <DataTable steps = {this.props.steps} step = {this.state.step} local_process_group={this.state.local_process_group} local_knowledge_area={this.state.local_knowledge_area} />
      </div>
    );
  }
}



export default App;

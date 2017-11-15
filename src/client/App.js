import React, { Component } from 'react';
import './App.css';
import MessageBar from '../redux/components/MessageBar.js';
import FilterBar from '../redux/components/FilterBar.js';
import DataTable from '../redux/components/DataTable.js';
import {Grid,Row,Col,Jumbotron} from 'react-bootstrap';



class App extends Component {
	constructor(props){
		super(props);
		this.state = {
			// no need for steps here at this state is component level only
			local_process_group: 'Initiating',
			local_knowledge_area: 'Project Integration Management'
		};
		this.handlePGFilterTextChange = this.handlePGFilterTextChange.bind(this);
		this.handleKAFilterTextChange = this.handleKAFilterTextChange.bind(this);
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

	   componentDidMount() {
    		this.props.onGetSteps();
  		}

  render() {
   // var {color} = this.props.steps; // yes
    return (
      <div className="App">
        <Jumbotron>
        	<h3>Five Traditional Process Groups</h3>
        </Jumbotron>
        <FilterBar
          onPGFilterTextChange={this.handlePGFilterTextChange}
          onKAFilterTextChange={this.handleKAFilterTextChange}
         />
        <DataTable steps = {this.props.state} local_process_group={this.state.local_process_group} local_knowledge_area={this.state.local_knowledge_area} />
      </div>
    );
  }
}



export default App;

import React, { Component } from 'react';
import './App.css';
import MessageBar from '../redux/components/MessageBar.js';
import FilterBar from '../redux/components/FilterBar.js';
import DataTable from '../redux/components/DataTable.js';



class App extends Component {
	constructor(props){
		super(props);
		this.state = {
			process_group: 'Initiating',
			knowledge_area: 'Project Integration Management'
		}
	}
  render() {
    return (
      <div className="App">
        <DataTable data_groups = {this.props.data_groups} process_group={this.state.process_group} knowledge_area={this.state.knowledge_area} />
      </div>
    );
  }
}



export default App;

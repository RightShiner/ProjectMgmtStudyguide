import React, { Component } from 'react';
import './App.css';
import FilterBar from '../redux/components/FilterBar.js';
import {Grid,Row,Col,Jumbotron} from 'react-bootstrap';



class App extends Component {
	// constructor(props){
	// 	super(props);
	// 	this.state = {
	// 		// no need for steps here at this state is component level only
	// 		local_process_group: 'Initiating',
	// 		local_knowledge_area: 'Project Integration Management'
	// 	};

	// 	this.handlePGFilterTextChange = this.handlePGFilterTextChange.bind(this);
	// 	this.handleKAFilterTextChange = this.handleKAFilterTextChange.bind(this);
	// }

	
	  // handlePGFilterTextChange(PGFilterText){
	  // 	this.setState({
	  // 		local_process_group: PGFilterText
	  // 	});
	  // }

	  // handleKAFilterTextChange(KAFilterText){
	  // 	this.setState({
	  // 		local_knowledge_area: KAFilterText
	  // 	});
	  // }

	   componentDidMount() {
    		this.props.onGetSteps();
        this.props.setNewKaFilter('hi');
        this.props.setNewPgFiler('there');
    		}

  render() {
  	// const data = this.props.steps;

    return (

      <div className="App">
        <Jumbotron>
        	<h3>Five Traditional Process Groups</h3>
        </Jumbotron>
        
        <FilterBar
          onPGFilterTextChange={this.props.setNewPgFiler}
          onKAFilterTextChange={this.props.setNewKaFilter}
         />
        

         <div>
         	{this.props.steps && this.props.steps.length > 0 ? (
            <ul>
              {this.props.steps.map((data, index) => {
                return (
                  <li key={index}>
                    {data.data}
                  </li>
                );
              })}
            </ul>
          ) : null}
         </div>
      </div>
    );
  }
}



export default App;

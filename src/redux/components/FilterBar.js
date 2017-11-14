import React from 'react';
import KAFilter from './KAFilter.js';
import PGFilter from './PGFilter.js';


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
					<ul>
						<KAFilter /> 
						<PGFilter  /> 
						<h3>Build button to submit here</h3>
						<form>
							<input type="text" placeholder="choose.." />
						</form>
					</ul>
				</div>
			);
	}
}
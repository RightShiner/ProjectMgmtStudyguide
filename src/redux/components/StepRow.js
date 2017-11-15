import React from 'react';

export default class StepRow extends React.Component {
	render(){
		return (
				<div>
					<h2>Step: {this.props.step}</h2>
				</div>
			);
	}
}
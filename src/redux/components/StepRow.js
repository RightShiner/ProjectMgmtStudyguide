import React from 'react';

export default class StepRow extends React.Component {
	render(){
		return (
				<div>
					Step: {this.props.step}
				</div>
			);
	}
}
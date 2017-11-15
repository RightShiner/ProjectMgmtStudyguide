import React from 'react';

export default class PGDataRow extends React.Component {
	render(){
		return (
				<div>
					<h4>Process Group: {this.props.process_group}</h4>
				</div>
			);
	}
}
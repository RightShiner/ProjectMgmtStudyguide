import React from 'react';

export default class PGDataRow extends React.Component {
	render(){
		return (
				<div>
					Process Group: {this.props.process_group} 
				</div>
			);
	}
}
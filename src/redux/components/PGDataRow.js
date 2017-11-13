import React from 'react';

export default class PGDataRow extends React.Component {
	render(){
		return (
				<div>
					<p>Hi I am a DataRow Component
					{this.props.process_group} booyah</p>
				</div>
			);
	}
}
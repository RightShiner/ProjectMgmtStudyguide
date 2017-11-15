import React from 'react';

export default class KADataRow extends React.Component {
	render(){
		return (
				<div>
					<h4>Knowledge Area: {this.props.knowledge_area}</h4>
				</div>
			);
	}
}
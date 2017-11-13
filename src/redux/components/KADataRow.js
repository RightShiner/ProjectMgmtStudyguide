import React from 'react';

export default class KADataRow extends React.Component {
	render(){
		return (
				<div>
					Knowledge Area: {this.props.knowledge_area}
				</div>
			);
	}
}
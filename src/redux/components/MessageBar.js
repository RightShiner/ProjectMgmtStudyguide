import React from 'react';

export default class MessageBar extends React.Component {
	render(){
		const message = this.props.message;
		return (
				<div>
					<h3>MessageBar Component: {message} </h3>
				</div>
			);
	}
}
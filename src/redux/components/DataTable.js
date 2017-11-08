import React from 'react';
import PGRow from './PGRow.js';
import DataRow  from './DataRow.js';

export default class DataTable extends React.Component {
	render(){
		const rows = [];
		this.props.data_groups.forEach((data_group) => {
			rows.push(data_group.data);
		})
		return (
				<div>
					<p>Hi I am a DataTable Component</p>
					{rows[0]}
					<PGRow />
					<DataRow />
				</div>
			);
	}
}
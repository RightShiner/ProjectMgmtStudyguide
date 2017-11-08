import React from 'react';
import PGRow from './PGRow.js';
import DataRow  from './DataRow.js';

export default class DataTable extends React.Component {
	render(){
		return (
				<div>
					<p>Hi I am a DataTable Component</p>
					<PGRow />
					<DataRow />
				</div>
			);
	}
}
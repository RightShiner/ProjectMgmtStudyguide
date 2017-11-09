import React from 'react';
import PGDataRow from './PGDataRow.js';
import KADataRow from './KADataRow.js';


export default class DataTable extends React.Component {
	render(){
		const rows = [];
		
		return (
				<div>
					<p>Hi I am a DataTable Component</p>
					{rows[0]}
					<PGDataRow />
					<KADataRow />
				</div>
			);
	}
}
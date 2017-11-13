import React from 'react';
import PGDataRow from './PGDataRow.js';
import KADataRow from './KADataRow.js';


export default class DataTable extends React.Component {
	render(){
		const process_group = this.props.process_group;
		const knowledge_area = this.props.knowledge_area;

		const rows = [];
		
		return (
				<div>
					{process_group} : {knowledge_area}
					<KADataRow />
					 <ul>
               			{this.props.data_groups.map((item) => {
        					return (
          						<li key={item.process_area}>
								 <PGDataRow process_group={item.process_area} />

            					 <KADataRow knowledge_area={item.knowledge_area} />
            					 <h4>{item.data}</h4>
          						</li>
       							   )
      					})}
           		     </ul>
				</div>
			);
	}
}
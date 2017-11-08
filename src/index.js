import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './client/App.js';

const DataGroups = [
	  { process_group: "Initiating",
	  knowledge_area: "Project Integration Management",
	  data : "Develop Project Charter"},
	  { process_group: "Planning",
	  knowledge_area: "Project Integration Management",
	  data : "Develop Project Management Plan"},
];

ReactDOM.render(<App data_groups = {DataGroups}/>, document.getElementById('root'));

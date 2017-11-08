import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MessageBar from '../redux/components/MessageBar.js';
import FilterBar from '../redux/components/FilterBar.js';
import DataTable from '../redux/components/DataTable.js';



class App extends Component {
  render() {
    return (
      <div className="App">
        <p>hello world</p>
        <MessageBar />
        <FilterBar />
        <DataTable />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import User from './user/userr';
import Sidebar from './sidebar/sidebar';

class App extends Component {
  constructor(){
    super();

  }
  render() {
    return (
      <div className="App">
        <div>
          <Sidebar/>
        <User/>
        </div>
      </div>
    );
  }
}

export default App;

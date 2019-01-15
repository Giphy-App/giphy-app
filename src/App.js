import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div id='header'>
          <h1>
            Giphy Fun
          </h1>
      <div>
        <input id='searchBar' type="text" placeholder="Search.." />
      </div>
      </div>
    );
  }
}

export default App;

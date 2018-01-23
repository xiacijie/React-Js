import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
     //first class
    return (
      <div className="App">
        <h1>Hello</h1>
        <p> HAHHAHA </p>
      </div>
      // <p> adsad</p>: Wrong, we there must be a root element
    );

    // return React.createElement('div',{className:"App"},React.createElement("h1",null,"hello"));


  }
}

export default App;

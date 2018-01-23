import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from "./Person/Person";

class App extends Component {
  render() {
     //first class
    return (
      <div className="App">
        <h1>Hello</h1>
        <p> HAHHAHA </p>
        <Person name="Jack" age="20" />
        <Person name="someone" age="22"> My Hobbies : Music </Person>
        <Person name="PIPI" age="12"/>

      </div>
      // <p> adsad</p>: Wrong, we there must be a root element
    );

    // return React.createElement('div',{className:"App"},React.createElement("h1",null,"hello"));


  }
}

export default App;

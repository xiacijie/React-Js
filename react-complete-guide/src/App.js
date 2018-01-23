import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from "./Person/Person";

class App extends Component {
    state = {
        persons:[
            {name:"Jack",age:28},
            {name:"Manu",age:29},
            {name:"Steo",age:26}
        ]

    }

    switchNameHandler = () =>{
        //console.log("clicked");
        //this.state.person[0].name = "Jack Xia"; Wrong !!!
        this.setState({
            persons:[
                {name:"Jack Xia",age:28},
                {name:"Manu",age:29},
                {name:"Steo",age:26}
            ]
        })
    }
    render = () => {
     //first class
    return (
      <div className="App">
        <h1>Hello</h1>
        <p> HAHHAHA </p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}> My Hobbies : Music </Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>

      </div>
      // <p> adsad</p>: Wrong, we there must be a root element
    );

    // return React.createElement('div',{className:"App"},React.createElement("h1",null,"hello"));


    }
}

export default App;

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

    switchNameHandler = (newname) =>{
        //console.log("clicked");
        //this.state.person[0].name = "Jack Xia"; Wrong !!!
        this.setState({
            persons:[
                {name:newname,age:28},
                {name:"Manu",age:29},
                {name:"Steo",age:26}
            ]
        })
    }

    nameChangedHandler = (event) =>{
        this.setState({
            persons:[
                {name:"input change",age:28},
                {name:event.target.value,age:29},
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
        <button onClick={()=>this.switchNameHandler("Anonymys function")}>Switch Name</button> //Not efecient
        <Person name={this.state.persons[0].name}
                age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name}
                age={this.state.persons[1].age}
                click={this.switchNameHandler.bind(this,"123")}
                changed = {this.nameChangedHandler}>
                My Hobbies : Music </Person>
        <Person name={this.state.persons[2].name}
                age={this.state.persons[2].age}/>

      </div>
      // <p> adsad</p>: Wrong, we there must be a root element
    );

    // return React.createElement('div',{className:"App"},React.createElement("h1",null,"hello"));


    }
}

export default App;

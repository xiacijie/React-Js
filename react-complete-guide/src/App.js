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
        ],
        showPerson:true

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

    deletePersonHandler = (personIndex) =>{
        // const persons = this.state.persons.slice();
        const persons = [...this.state.persons]; // copy the array's elements
        persons.splice(personIndex,1);
        this.setState({persons:persons});
    }

    togglePersonHandler = () =>{
        const show = this.state.showPerson;
        this.setState({showPerson:!show});
    }

    render = () => {
     //first class
     const style = {
         backgroundColor:"green",
         font:"inherit",
         border:"1x solid blue",
         padding:"8x"
     };

     let persons = null;
     if (this.state.showPerson){
         persons = (
             <div>
                {this.state.persons.map((person,index)=>{
                    return <Person name={person.name} age={person.age} click ={()=>this.deletePersonHandler(index)} />
                })}

             </div>

         );
     }
    return (
      <div className="App">
        <h1>Hello</h1>
        <p> HAHHAHA </p>
        <button style = {style} onClick={this.togglePersonHandler}>Switch Name</button> //Not efecient

        {persons }

      </div>
      // <p> adsad</p>: Wrong, we there must be a root element
    );

    // return React.createElement('div',{className:"App"},React.createElement("h1",null,"hello"));


    }
}

export default App;

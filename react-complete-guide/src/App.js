import React, { Component } from 'react';
import './App.css';
import Radium,{StyleRoot} from 'radium';
import Person from "./Person/Person";

class App extends Component {


    state = {
        persons:[
            {id:1,name:"Jack",age:28},
            {id:2,name:"Manu",age:29},
            {id:3,name:"Steo",age:26}
        ],
        showPerson:true

    };

    switchNameHandler = (newname) =>{
        //console.log("clicked");
        //this.state.person[0].name = "Jack Xia"; Wrong !!!
        this.setState({
            persons:[
                {name:newname,age:28},
                {name:"Manu",age:29},
                {name:"Steo",age:26}
            ]

        });
    };

    nameChangedHandler = (event,id) =>{
        const personIndex = this.state.persons.findIndex(p =>{
            return p.id === id;
        });

        const person = {
            ...this.state.persons[personIndex]
        };

        // const person = Object.assign({},this.state.persons[personIndex]);
        person.name = event.target.value;
        const persons = [...this.state.persons];
        persons[personIndex] = person;

        this.setState({
            persons:persons
        });
    }

    deletePersonHandler = (personIndex) =>{
        // const persons = this.state.persons.slice();
        const persons = [...this.state.persons]; // copy the array's elements
        persons.splice(personIndex,1);
        this.setState({persons:persons});
    }

    togglePersonHandler = () =>{
        console.log("work");
        const show = this.state.showPerson;
        this.setState({showPerson:!show});
    }

    render ()  {
     //first class
     const style = {
         backgroundColor:"green",
         color:"white",
         font:"inherit",
         border:"1x solid blue",
         padding:"8x",
         cursor:'pointer',
         ':hover':{
             backgroundColor:"lightgreen",
             color:"black"
         }
     };

     let persons = null;
     if (this.state.showPerson){
         persons = (
             <div>
                {this.state.persons.map((person,index)=>{
                    return <Person key = {person.id}
                    name={person.name}
                    age={person.age}
                    click ={()=>this.deletePersonHandler(index)}
                    changed = {(event)=>this.nameChangedHandler(event,person.id)}/>
                })}

             </div>

         );
         style.backgroundColor = 'red';
         style[':hover'] = {
             backgroundColor:"lightgreen",
             color:"black"
         };

     }

     const classes = [];
     if (this.state.persons.length <= 2){
         classes.push("red");
     }
     if (this.state.persons.length <=1){
         classes.push('bold');
     }

    return (
        <StyleRoot>
          <div className="App">
            <h1>Hello</h1>
            <p className={classes.join(' ')}> HAHHAHA </p>
            <button style = {style} onClick={this.togglePersonHandler}>Switch Name</button>

            {persons }

          </div>
        </StyleRoot>
          // <p> adsad</p>: Wrong, we there must be a root element
    );

    // return React.createElement('div',{className:"App"},React.createElement("h1",null,"hello"));


    }
}

export default Radium( App );

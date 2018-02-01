import React, { Component } from 'react';
import './App.css';

class App extends Component {
    state = {
        input:"",
        box:[]
    }

    changeListener = (event) =>{
        this.setState({input:event.target.value});
        let list = event.target.value.split("");
        let newBox = [];
        for (let i=0;i<list.length;i++){
            newBox.push({id:i,char:list[i]});
        }
        this.setState({box:newBox});
    }

    removeListener = (index) =>{
        let newBox = [...this.state.box];
        newBox.splice(index,1);
        this.setState({box:newBox});


    }


  render() {
    return (
        <div>
            <input type="text" onChange={this.changeListener} />
            <p>{this.state.input.length}</p>
            <ValidationComponent length={this.state.input.length} />
            {this.state.box.map((box,index) =>{
                return <CharComponent key={box.id} char={box.char} click={()=>this.removeListener(index)}/>

            })}
        </div>
    );
  }
}

const ValidationComponent =(props) =>{
    let word = "Too short";
    if (props.length >5){
        word = "long enough";
    }
    return (
        <div>
        <h1>{word}</h1>
        </div>
    );
};

const CharComponent = (props) =>{
    const style = {
        display:"inline-block",
        padding:"16px",
        textAlign:"center",
        margin:"16px",
        border:"1px solid black"

    }
    return <div style={style} onClick={props.click}>
        <h1>{props.char}</h1>
    </div>;
}
export default App;

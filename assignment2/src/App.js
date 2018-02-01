import React, { Component } from 'react';
import './App.css';

class App extends Component {
    state = {
        input:0
    }

    changeListener = (event) =>{
        this.setState({input:event.target.value});
    }
  render() {
    return (
        <div>
            <input type="text" onChange={this.changeListener} />
            <p>{this.state.input.length}</p>
            <ValidationComponent length={this.state.input.length} />
            <CharComponent />
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

const CharComponent = () =>{
    const style = {
        display:"inline-block",
        padding:"16px",
        textAlign:"center",
        margin:"16px",
        border:"1px solid black"

    }
    return <div style={style}><h1>hello</h1></div>;
}
export default App;

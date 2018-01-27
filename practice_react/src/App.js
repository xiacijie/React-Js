import React, { Component } from 'react';
import {UserInput,UserOutput} from './User/User';

class App extends Component {
    state = {
        username:"xiacijie"
    }

    stateManipulateHandler = (event) =>{
        this.setState({
            username:event.target.value
        })


    }
    render = () => {
        const style = {
            backgroundColor:"green",
            font:"inherit",
            border:"1x solid blue",
            padding:"8x"
        };
    return (
      <div className="App">

        <UserInput change = {this.stateManipulateHandler}/>
        <UserOutput username = {this.state.username} style={style} />
        <UserOutput style = {style}/>
        <UserOutput/>
        <UserOutput/>

      </div>
    );
  }
}



export default App;

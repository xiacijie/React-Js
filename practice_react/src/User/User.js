import React from 'react';


const UserInput = (props) =>{
    return (
        <div >
            <input type="text" onChange ={props.change}/>
        </div>
    );
}

const UserOutput = (props) =>{
    return (
        <div style={props.style}>
            <h1>{props.username}</h1>
            <p>OUTPUT</p>
            <p>ANOTHER</p>
        </div>
    );
}
export  {UserInput,UserOutput};

import React from 'react';
const person=(props:any)=>{
    const style={
        border:'1px solid gray',
        padding:'10px',
    }
    return <div style={style}>
        <p onClick={props.onDelete}>I'm {props.name}!I am {props.age} years old</p>
        <input id={props.id} value={props.name} onChange={props.onChange}/>
        </div> 
}
export default person ;
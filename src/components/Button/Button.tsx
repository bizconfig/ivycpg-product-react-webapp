import React from 'react'
import classes from './Button.module.css'

const Button=(props:any)=>
{
    return <button
    onClick={props.clicked}
    className={[classes.Button,classes[props.btnType]].join(' ')}>
    {props.children}
    </button>
}
export default Button;
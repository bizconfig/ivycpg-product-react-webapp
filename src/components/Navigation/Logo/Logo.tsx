import React from 'react'

import imgURL from '../../../assets/Images/burger-logo.png'
import classes from './Logo.module.css'

const logo=(props:any)=>{
    return(
        <div className={classes.Logo}><img src={imgURL}/></div
        >)
}

export default logo;
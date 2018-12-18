import React from 'react'


import style from './Toolbar.module.css'
import NavigationItems from '../NavigationItems/NavigationItems'
import Logo from '../Logo/Logo'

const Toolbar=(props:any)=>{
return(
    <header className={style.Toolbar}>
    <div>MENU</div>
    <div className={style.Logo}>
       <Logo/>
    </div>
    <nav>
       <NavigationItems/>
    </nav>
    </header>
)
}

export default Toolbar;
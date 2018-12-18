import React from 'react'

import NavigationItems from '../NavigationItems/NavigationItems'
import style from './SideDrawer.module.css'
import Logo from '../Logo/Logo'

const sideDrawer=(props:any)=>{
return(
    <div className={style.SideDrawer}>
    <div className={style.Logo}>
       <Logo/>
    </div>
    <NavigationItems/>
    </div>
)

}
export default sideDrawer;
import React from 'react'

import style from './Toolbar.module.css'
import NavigationItems from '../NavigationItems/NavigationItems'
import Logo from '../../Logo/Logo'
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

const Toolbar = (props : any) => {
   return (
      <header className={style.Toolbar}>
         <DrawerToggle clicked={props.opened}/>
         <div className={style.Logo}>
            <Logo/>
         </div>
         <nav className={style.DesktopOnly}>
            <NavigationItems/>
         </nav>
      </header>
   )
}

export default Toolbar;
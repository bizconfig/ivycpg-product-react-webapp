import React from 'react'

import NavigationItems from '../NavigationItems/NavigationItems'
import style from './SideDrawer.module.css'
import Logo from '../../Logo/Logo'
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/AuxContainer/AuxContainer';

const sideDrawer = (props : any) => {
    let attachedClasses=[style.SideDrawer,style.Close]
    if(props.open)
      attachedClasses=[style.SideDrawer,style.open]
    return (
        <Aux>
            <Backdrop show={props.open} clicked={props.closed}/>
            <div className={attachedClasses.join(' ')}>
                <div className={style.Logo}>
                    <Logo/>
                </div>
                <NavigationItems/>
            </div>
        </Aux>
    )

}
export default sideDrawer;
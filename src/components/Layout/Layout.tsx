import React from 'react'

import Aux from '../../hoc/RXContainer'
import Toolbar from '../Navigation/Toolbar/Toolbar'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'
import classes from './Layout.module.css'


const Layout =(props:any)=>(
<Aux>
<Toolbar/>
<SideDrawer/>
<main className={classes.Container}>{props.children}</main>
</Aux>
)
export default Layout;
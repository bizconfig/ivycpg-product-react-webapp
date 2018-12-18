import React from 'react'

import './NavigationItems.module.css'
import NavigationItem from './NavigationItem/NavigationItem'

const navigationItems=(props:any)=>{
return(<ul className="NavigationItems">
<NavigationItem link="/" active>Burger </NavigationItem>
<NavigationItem link="/">Burger Builder </NavigationItem>
</ul>)
}
export default navigationItems;
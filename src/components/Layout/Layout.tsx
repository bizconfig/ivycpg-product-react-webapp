import React, {Component} from 'react'

import Aux from '../../hoc/AuxContainer/AuxContainer'
import Toolbar from '../Navigation/Toolbar/Toolbar'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'
import classes from './Layout.module.css'

class Layout extends Component <any,any> {
    constructor(props : any) {
        super(props);
    }
    state={
        ShowSideDrawer:false
    }
    sideDrawerClosedHandler=()=>{
        this.setState({ShowSideDrawer:false});
    }
    sideDrawerOpenHandler=()=>{
        this.setState({ShowSideDrawer:true});
    }
    public render() {
        return (
            <Aux>
                <Toolbar opened={this.sideDrawerOpenHandler} />
                <SideDrawer open={this.state.ShowSideDrawer} closed={this.sideDrawerClosedHandler}/>
                <main className={classes.Container}>{this.props.children}</main>
            </Aux>
        )
    }
}
export default Layout;
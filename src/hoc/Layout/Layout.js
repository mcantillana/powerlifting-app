import React, {Component} from 'react';
import Aux from '../Aux/Aux';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
    
import clsx from 'clsx';

import classes from './Layout.module.css';

class Layout extends Component {
    constructor(props){
        super(props);
        this.state = {
            open: false
        }
    }
    handleDrawerToggle = () => {
        this.setState((prevState) => {
            return { open: !prevState.open };
        });
    };

    handleDrawerClose = () => {
        this.setState({open: false});
    };

    render(){
        return(
            <Aux>
                <Toolbar openDrawer = {this.state.open} drawerToggleClicked={this.handleDrawerToggle}/>
                <SideDrawer openDrawer = {this.state.open} drawerToggleClicked={this.handleDrawerToggle} />
                <main
                    className={clsx(classes.Content, {
                    [classes.ContentShift]: this.state.open,
                    })}
                >
                    {this.props.children}
                </main>
            </Aux>
        )
    }
}

export default Layout;
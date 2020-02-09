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
            openSideDrawer: false,
            openCollapseSaving: false
        }
    }
    
    handleDrawerToggle = () => {
        this.setState((prevState) => {
            return { openSideDrawer: !prevState.openSideDrawer };
        });
    };

    handleDrawerClose = () => {
        this.setState({open: false});
    };

    handleItemSavingToggle = () => {
        this.setState((prevState) => {
            return this.setState({openCollapseSaving: !prevState.openCollapseSaving});
        });
    };

    render(){
        return(
            <Aux>
                <Toolbar openDrawer = {this.state.openSideDrawer} 
                        drawerToggleClicked={this.handleDrawerToggle}/>
                <SideDrawer openDrawer = {this.state.openSideDrawer} 
                            drawerToggleClicked = {this.handleDrawerToggle}
                            openItemCollapse = {this.state.openCollapseSaving}
                            itemSavingToggleClicked = {this.handleItemSavingToggle}/>
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
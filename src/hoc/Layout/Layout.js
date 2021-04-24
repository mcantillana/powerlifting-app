import React, { useState } from 'react';
import Container from '@material-ui/core/Container';

import Aux from '../Aux/Aux';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import classes from './Layout.module.css';

const Layout = (props) => {
    const [sideDrawerVisible, setSideDrawerVisible] = useState(false);

    const sideDrawerClosedHandler = () => {
        setSideDrawerVisible(false);
    };

    const sideDrawerToggleHandler = () => {
        setSideDrawerVisible(true);
    };
    return (
        <Aux>
            <Toolbar clicked = {sideDrawerToggleHandler} />
            <SideDrawer open = {sideDrawerVisible}/>
            <main className={classes.Content}>
                <Container fixed>
                    {props.children}
                </Container>
            </main>
        </Aux>
    )
}

export default Layout;
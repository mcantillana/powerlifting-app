import React, { useState } from 'react';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';

const Layout = (props) => {

    const[sideDrawerIsVisible, setSideDrawerIsVisible] = useState(false);

    const sideDrawerClosedHandler = () => {
        setSideDrawerIsVisible(false);
    }

    const sideDrawerToggleHandler = () => {
        setSideDrawerIsVisible(!setSideDrawerIsVisible);
    }

    return (
        <div>
            <Toolbar/>
            <SideDrawer/>
            <main>
                {props.children}
            </main>
        </div>
    )
}

export default Layout;
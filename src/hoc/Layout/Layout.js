import React from 'react';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';

const Layout = (props) => {
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
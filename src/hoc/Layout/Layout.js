import React from 'react';
import { Switch, Route } from 'react-router-dom';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';

const Layout = (props) => {
    let routes = (
        <Switch>
            <Route path="/" render={() => <div>Home</div>}/>
            <Route path="/one" render={() => <div>Uno</div>}/>
            <Route path="/two" render={() => <div>Dos</div>}/>
        </Switch>
    );
    return (
        <div>
            <Toolbar/>
            <SideDrawer/>
            <main>
                {props.children}
            </main>
            {routes}
        </div>
    )
}

export default Layout;
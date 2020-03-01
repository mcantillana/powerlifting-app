import React, {Component} from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom';

import AhorroBuilder from './containers/AhorroBuilder/AhorroBuilder';
import Profile from './containers/Account/Profile/Profile';
import Statement from './containers/Account/Statement/Statement';
import Movimiento from './containers/Account/Movimiento/Movimiento';
import NotFound from './components/NotFound/NotFound';
import Layout from './hoc/Layout/Layout';

class App extends Component{
  render(){
    return(
      <div> 
        <Layout>
          <Switch>
            <Route component={AhorroBuilder} path="/" exact/>
            <Route component={Profile} path="/profile"/>
            <Route component={Statement} path="/statement"/>
            <Route component={Movimiento} path="/movimiento/:tipo"/>
            <Route component={NotFound}/>
          </Switch>
        </Layout>
      </div>
    )
  }
}

export default App;

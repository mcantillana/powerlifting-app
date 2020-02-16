import React, {Component} from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom';

import AhorroBuilder from './containers/AhorroBuilder/AhorroBuilder';
import Profile from './containers/Profile/Profile';
import Extracto from './components/Cuenta/Extracto/Extracto';
import Movimiento from './components/Cuenta/Movimiento/Movimiento';
import Layout from './hoc/Layout/Layout';

class App extends Component{
  render(){
    return(
      <div> 
        <Layout>
          <Switch>
            <Route component={AhorroBuilder} path="/" exact/>
            <Route component={Profile} path="/profile"/>
            <Route component={Extracto} path="/extracto"/>
            <Route component={Movimiento} path="/movimiento"/>
          </Switch>
        </Layout>
      </div>
    )
  }
}

export default App;

import React, {Component} from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom';

import AccountBuilder from './containers/AccountBuilder/AccountBuilder';
import Profile from './containers/Account/Profile/View/Profile';
import Statement from './containers/Account/Statement/Statement';
import Movement from './containers/Account/Movement/Movement';
import NotFound from './components/NotFound/NotFound';
import Layout from './hoc/Layout/Layout';

class App extends Component{
  render(){
    return(
      <div> 
        <Layout>
          <Switch>
            <Route component={AccountBuilder} path="/" exact/>
            <Route component={Profile} path="/profile"/>
            <Route component={Statement} path="/statement"/>
            <Route component={Movement} path="/movement/:type"/>
            <Route component={NotFound}/>
          </Switch>
        </Layout>
      </div>
    )
  }
}

export default App;

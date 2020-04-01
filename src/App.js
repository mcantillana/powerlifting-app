import React, {Component} from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom';

import AccountBuilder from './containers/AccountBuilder/AccountBuilder';
import Profile from './containers/Account/Profile/Profile';
import Statement from './containers/Account/Statement/Statement';
import Movement from './containers/Account/Movement/Movement';
import NotFound from './components/NotFound/NotFound';
import Layout from './hoc/Layout/Layout';
import { translate, Trans } from 'react-i18next';

class App extends Component{
  render(){
    return(
      <div> 
        <Layout>
          <Trans i18nKey='welcome.intro'>
                To get started, edit <code>src/App.js</code> and save to reload.
          </Trans>
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

export default translate('common')(App);

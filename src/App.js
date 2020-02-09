import React, {Component} from 'react';
import './App.css';

import AhorroBuilder from './containers/AhorroBuilder/AhorroBuilder';

import Layout from './hoc/Layout/Layout';
class App extends Component{
  render(){
    return(
      <div> 
        <Layout>
          <AhorroBuilder/>
        </Layout>
      </div>
    )
  }
}

export default App;

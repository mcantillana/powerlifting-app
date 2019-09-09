import React, {Component} from 'react';
import './App.css';
import Layout from './hoc/Layout/Layout';

class App extends Component{
  render(){
    return(
      <div>
        <Layout>
          <h1>Destino</h1>
        </Layout>
      </div>
    )
  }
}

export default App;

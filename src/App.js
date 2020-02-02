import React, {Component} from 'react';
import './App.css';

import Layout from './hoc/Layout/Layout';
//import axios from './axios-weather';
class App extends Component{
  render(){
    /*const API_KEY = "066b6316792b3e2fc7e8cfcadb74eb81";
    axios.get('?q=Manchester,uk&appid='+API_KEY).then(
      res=> {
          console.log(res);
      }).catch(err => {
        console.log(err);
    });*/
    return(
      <div> 
        <Layout/>
      </div>
    )
  }
}

export default App;

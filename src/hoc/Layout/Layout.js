import React, { Component } from 'react';
import Aux from '../Aux/Aux';
import Header from '../../components/Header/Header';

class Layout extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <Aux>
                <Header/>
                <main>
                    {this.props.children}
                </main>
            </Aux>
        );
    }
}

export default Layout;
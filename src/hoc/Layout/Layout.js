import React, {Component} from 'react';
import Aux from '../Aux/Aux';
import BarHeader from '../../components/BarHeader/BarHeader';
class Layout extends Component {
    render(){
        return(
            <Aux>
                <BarHeader/>
            </Aux>
        )
    }
}

export default Layout;
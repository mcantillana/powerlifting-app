import React, {Component} from 'react';
import Container from '@material-ui/core/Container';
import Aux from '../../hoc/Aux/Aux';

import PanelAhorro from '../../components/PanelAhorro/PanelAhorro';

class AhorroBuilder extends Component{
    constructor(props){
        super(props);

        this.state = {
            ahorrista: {
                nombres: "Oscar Rolando",
                apellidos: "Gamboa Acho",
                nrodocumento: "7925512",
                ahorro: {
                    monto: 0,
                    movimientos: [],
                }
            }
        };
    }
    render(){
        return(
            <Aux>
                <Container maxWidth="lg">
                    <PanelAhorro alcancia = {this.state.ahorrista}/>
                </Container>
            </Aux>
        )
    }
}

export default AhorroBuilder;
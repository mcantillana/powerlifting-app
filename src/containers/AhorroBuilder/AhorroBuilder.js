import React, {Component} from 'react';
import Container from '@material-ui/core/Container';

class AhorroBuilder extends Component{
    constructor(props){
        super(props);

        this.state = {
            ahorro: 0,
            numeroCuenta: 0
        };
    }
    render(){
        return(
            <div>
                <Container maxWidth="lg">
                    <div>
                        <p>Depositado: x Bs.</p>
                        <p>Numero de Cuenta: XXXXXXX</p>
                    </div>
                </Container>
            </div>
        )
    }
}

export default AhorroBuilder;
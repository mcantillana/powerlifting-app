import React, {Component} from 'react';
import Container from '@material-ui/core/Container';

import Aux from '../../hoc/Aux/Aux';
import axios from '../../axios';
import PanelAmount from '../../components/PanelAmount/PanelAmount';

class AccountBuilder extends Component{
    constructor(props){
        super(props);

        this.state = {
            user: {
                total: 0
            }
        };
    }
    componentDidMount(){
        axios.get('movimientos.json')
            .then(response => {
               let size = 0;
               if(response.data) {
                   size = Object.getOwnPropertyNames(response.data).length;
               }
               return [response.data, size];
            })
            .then(([response, size]) => {
                let total = 0;
                if(size > 0){
                    const data = Object.keys(response);
                    data.map(item => {
                        let amount = parseFloat(response[item].amount);
                        if(response[item].tipo === "save"){
                            total += amount;
                        }
                        if(response[item].tipo === "withdraw"){
                            total -= amount;
                        }
                        return total;
                    })
                    if( total < 0 ) total = 0;
                }
                return total;
            })
            .then(total => {
                let totalAmount = total.toFixed(2);
                this.setState({total:totalAmount});
            });
    }
    render(){
        return(
            <Aux>
                <Container maxWidth="lg">
                    <PanelAmount alcancia = {this.state.user} 
                                amountTotal = {this.state.total}/>
                </Container>
            </Aux>
        )
    }
}

export default AccountBuilder;
import React, {Component} from 'react';
import Container from '@material-ui/core/Container';

import Aux from '../../hoc/Aux/Aux';
import axios from '../../axios';
import PanelAhorro from '../../components/PanelAhorro/PanelAhorro';


class AhorroBuilder extends Component{
    constructor(props){
        super(props);

        this.state = {
            ahorrista: {
                nombres: "Oscar Rolando",
                apellidos: "Gamboa Acho",
                nrodocumento: "7925512",
                ahorroTotal: 0
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
                return total;
            })
            .then(total => {
                let totalAmount = total.toFixed(2);
                this.setState({ahorroTotal:totalAmount});
            });
    }
    render(){
        let info = (<h2>No Data</h2>);
        if(this.state.ahorroTotal > 0) {
            info = <PanelAhorro alcancia = {this.state.ahorrista} ahorroTotal = {this.state.ahorroTotal}/>
        }
        return(
            <Aux>
                <Container maxWidth="lg">
                    {info}
                </Container>
            </Aux>
        )
    }
}

export default AhorroBuilder;
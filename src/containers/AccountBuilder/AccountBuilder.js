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
                let dataStatements = response.data;
                let total = 0;
               for( let item in dataStatements){
                   let amount = parseFloat(dataStatements[item].amount);
                   if(dataStatements[item].tipo === "save"){
                       total += amount;
                   }
                   if(dataStatements[item].tipo === "withdraw"){
                       total -= amount;
                   }
               }
               total = total.toFixed(2);
               this.setState({ahorroTotal: total});
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
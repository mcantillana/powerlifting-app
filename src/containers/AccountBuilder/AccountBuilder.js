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
                   let amount = parseFloat(dataStatements[item].amount).toFixed(2);
                   if(dataStatements[item].tipo === "save"){
                       total = total + amount;
                   }
                   if(dataStatements[item].tipo === "withdraw"){
                       total = total - amount;
                   }
                   //console.log(dataStatements[item].amount+"-"+total + "--");
               }
               console.log(total);
               this.setState({ahorroTotal: total});
            });
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
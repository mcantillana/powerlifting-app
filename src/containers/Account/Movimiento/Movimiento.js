import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '../../../components/UI/Button/Button';

import axios from '../../../axios';
import classes from './Movimiento.module.css';
class Movimiento extends Component {
    constructor(props){
        super(props);
        this.state = {
            monto: 0,
            tipoDeposito: '',
            motivoRetiro:''
        }
    }

    setMoneyAmount(event, tipoDeposito){
        event.preventDefault();
        const movimiento = {
            amount: this.state.monto,
            tipo: tipoDeposito
        }
        if( tipoDeposito === "retiro" ){
            movimiento.motivo = this.state.motivoRetiro;
        }
        axios.post('movimientos.json', movimiento)
            .then(response => {
                this.props.history.push('/');
            })
            .catch(error => {
                console.log(error);
            });
    }
    
    amountHandler = (event) => {
        this.setState({monto: event.target.value});
    }

    reasonHandler = (event) => {
        this.setState({motivoRetiro: event.target.value});
    }

    render() {
        let tipoDeposito = this.props.match.params.tipo;
        let retiroMotivo = null;
        if(tipoDeposito === "retiro"){
            retiroMotivo = (
                <div className={classes.inputContainer}>
                    <TextField
                        id="standard-multiline-static"
                        className={classes.input}
                        label="Motivo del Retiro"
                        multiline
                        rows="2"
                        onChange={this.reasonHandler}
                    />
                </div>
            );
        }
        return (
            <div className={classes.Movimiento}>
                <form onSubmit={(event) => this.setMoneyAmount(event,tipoDeposito)}>
                    <div className={classes.inputContainer}>
                        <TextField
                            className={classes.input}
                            id="standard-number"
                            label="Monto"
                            type="number"
                            InputLabelProps={{
                                shrink: true
                            }}
                            onChange={this.amountHandler}
                        />
                    </div>
                    {retiroMotivo}
                    <Button btnType="submitAhorro">Depositar</Button>
                </form>
            </div>
        );
    }
}
export default Movimiento;
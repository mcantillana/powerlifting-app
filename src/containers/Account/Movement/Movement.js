import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '../../../components/UI/Button/Button';

import axios from '../../../axios';
import classes from './Movement.module.css';
class Movement extends Component {
    constructor(props){
        super(props);
        this.state = {
            monto: "",
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
    validateCharacter = (event) => {
        const charactersAllowed = ['1', '2', '3', '4', '5', '6', '7',
                                '8', '9', '0'];
        const {
            target: { name, value }
            } = event;
        console.log(charactersAllowed.includes(event.key));
        if(charactersAllowed.includes(event.key)){
            let character = event.key;
            this.setState((prevState) => {
                return {[name]:  value+character}
            });
        }
    }

    render() {
        let tipoDeposito = this.props.match.params.type;
        let reasonMovement = null;
        let action = 'Save';
        if(tipoDeposito === "withdraw"){
            action = 'Withdraw';
            reasonMovement = (
                <div className={classes.inputContainer}>
                    <TextField
                        id="standard-multiline-static"
                        className={classes.input}
                        label="Reason"
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
                            required
                            className={classes.input}
                            id="standard-number"
                            label="Amount"
                            type="number"
                            name="monto"
                            InputLabelProps={{
                                shrink: true
                            }}
                            value={this.state.monto}
                            /*onChange={this.amountHandler}*/
                            onKeyUp={this.validateCharacter}
                        />
                    </div>
                    {reasonMovement}
                    <Button btnType="submitAhorro">{action}</Button>
                </form>
            </div>
        );
    }
}
export default Movement;
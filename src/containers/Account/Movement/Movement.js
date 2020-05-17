import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '../../../components/UI/Button/Button';

import axios from '../../../axios';
import classes from './Movement.module.css';
class Movement extends Component {
    constructor(props){
        super(props);
        this.state = {
            amount: "",
            reason:''
        }
    }

    setMoneyAmount(event, type){
        event.preventDefault();
        const movimiento = {
            amount: this.state.amount,
            tipo: type
        }
        if( type === "withdraw" ){
            movimiento.motivo = this.state.reason;
        }
        axios.post('movimientos.json', movimiento)
            .then(response => {
                this.props.history.push('/statement');
            })
            .catch(error => {
                console.log(error);
        });
    }

    reasonHandler = (event) => {
        this.setState({reason: event.target.value});
    }
    validateCharacter = (event) => {
        const charactersAllowed = ['1', '2', '3', '4', '5', '6', '7',
                                '8', '9', '0','.','Backspace'];
        const {
            target: { name, value }
            } = event;
        if(charactersAllowed.includes(event.key)){
            let character = (event.keyCode !== 8)?event.key:'';
            let amountValue = value + character;
            if( value.indexOf('.') > -1 && event.key === '.'){
                amountValue = value;
            }
            if(event.keyCode === 8){
                amountValue = amountValue.slice(0, -1);
            }
            this.setState({[name]: amountValue});
        }
    }

    render() {
        let type = this.props.match.params.type;
        let reasonMovement = null;
        let action = 'Save';
        if(type === "withdraw"){
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
                <form onSubmit={(event) => this.setMoneyAmount(event,type)}>
                    <div className={classes.inputContainer}>
                        <TextField
                            required
                            className={classes.input}
                            id="standard-number"
                            label="Amount"
                            type="text"
                            name="amount"
                            InputLabelProps={{
                                shrink: true
                            }}
                            value={this.state.amount}
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
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '../../UI/Button/Button';

import classes from './Movimiento.module.css';
const movimiento = (props) =>{
    let tipoMovimiento = props.match.params.tipo;
    let retiroMotivo = null;
    if(tipoMovimiento === "retiro"){
        retiroMotivo = (
            <div className={classes.inputContainer}>
                <TextField
                    id="standard-multiline-static"
                    className={classes.input}
                    label="Motivo del Retiro"
                    multiline
                    rows="2"
                />
            </div>
        );
    }
    return(
        <div className={classes.Movimiento}>
            <form>
                <div className={classes.inputContainer}>
                    <TextField
                        className={classes.input}
                        id="standard-number"
                        label="Monto"
                        type="number"
                        InputLabelProps={{
                            shrink: true
                        }}
                    />
                </div>
                {retiroMotivo}
                <Button btnType="submitAhorro">Depositar</Button>
            </form>
        </div>
    )
}

export default movimiento;
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '../../UI/Button/Button';
const movimiento = (props) => {
    return(
        <div>
            <form>
                <TextField
                    id="filled-number"
                    label="Number"
                    type="number"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    variant="filled"
                />
                <Button>Depositar</Button>
            </form>
        </div>
    )
}

export default movimiento;
import React from 'react';
import Grid from '@material-ui/core/Grid';
import Aux from '../../hoc/Aux/Aux';

import classes from './PanelAhorro.module.css';
const panelAhorro = (props) => {
    return(
        <Aux>
            <Grid container 
                direction = "row"
                justify="center"
                alignItems="center" >
                <div className={classes.PanelAhorro}>
                    <h3>Nro. Documento: {props.alcancia.nrodocumento}</h3>
                    <p className={classes.Monto}>Monto Actual: {props.alcancia.ahorro.monto}</p>
                    <p className={classes.Duenio}><span>Ahorrista: </span>{props.alcancia.apellidos} {props.alcancia.nombres}</p>
                </div>    
            </Grid>
        </Aux>
    );
}

export default panelAhorro;
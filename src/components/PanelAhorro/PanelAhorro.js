import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';

import Aux from '../../hoc/Aux/Aux';

import classes from './PanelAhorro.module.css';
class PanelAhorro extends Component{

    render(){
        return(
            <Aux>
                <Grid container 
                    direction = "row"
                    justify="center"
                    alignItems="center" >
                    <div className={classes.PanelAhorro}>
                        <p className={classes.Monto}>Monto Actual: {this.props.ahorroTotal} Bs.</p>
                        <p className={classes.Duenio}>
                            <span>Ahorrista: </span>{this.props.alcancia.apellidos} {this.props.alcancia.nombres}
                        </p>
                    </div>    
                </Grid>
            </Aux>
        );
    }
}

export default PanelAhorro;
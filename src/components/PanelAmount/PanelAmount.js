import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';

import Aux from '../../hoc/Aux/Aux';

import classes from './PanelAmount.module.css';
class PanelAmount extends Component{

    render(){
        return(
            <Aux>
                <Grid container 
                    direction = "row"
                    justify="center"
                    alignItems="center" >
                    <div className={classes.PanelAmount}>
                        <p className={classes.Amount}>Monto Actual: {this.props.amountTotal} Bs.</p>
                    </div>    
                </Grid>
            </Aux>
        );
    }
}

export default PanelAmount;
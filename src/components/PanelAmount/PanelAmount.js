import React, {Component} from 'react';
import CountUp from 'react-countup';
import Grid from '@material-ui/core/Grid';


import classes from './PanelAmount.module.css';
class PanelAmount extends Component{
    render(){
        return(
            <Grid container 
                direction = "row"
                justify="center"
                alignItems="center" >
                <CountUp start={0} end={this.props.amountTotal} decimals={2}>
                    {({ countUpRef }) => (
                        <div className={classes.PanelAmount}>
                            <p className={classes.Amount}>Monto: <span ref={countUpRef}/> Bs.</p>
                        </div>    
                    )}
                </CountUp>
            </Grid>
        );
    }
}

export default PanelAmount;
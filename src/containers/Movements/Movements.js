import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Grid from "@material-ui/core/Grid";

import classes from './Movements.module.css';

class Movements extends Component {
    
    render() {
        return (
            <Grid container 
                direction="row"
                justify="center"
                alignItems="center">
                <Grid xs={12} md={12} className={classes.MovGrid} item={true}>
                    <Link className={classes.Movement} 
                        to= "/movements/bench-press">
                            Bench Press
                    </Link>
                </Grid>
                <Grid xs={12} md={12} className={classes.MovGrid} item={true}>
                    <Link className={classes.Movement} 
                        to="/movements/squat">
                            Squat
                    </Link>
                </Grid>
                <Grid xs={12} md={12} className={classes.MovGrid} item={true}>
                    <Link className={classes.Movement} 
                        to= "/movements/deadlift">
                            Deadlift
                    </Link>
                </Grid>
            </Grid>
        );
    };
}

export default Movements;
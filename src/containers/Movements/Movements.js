import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Container from '@material-ui/core/Container';
import Grid from "@material-ui/core/Grid";

import classes from './Movements.module.css';

class Movements extends Component {
    render() {
        return (
            <Container fixed>
                <Grid container 
                    direction="row"
                    justify="center"
                    alignItems="center">
                    <Grid xs={4} className={classes.MovGrid}>
                        <Link className={classes.Movement}>Bench Press</Link>
                    </Grid>
                    <Grid xs={4} className={classes.MovGrid}>
                        <Link className={classes.Movement}>Squat</Link>
                    </Grid>
                    <Grid xs={4} className={classes.MovGrid}>
                        <Link className={classes.Movement}>Deadlifting</Link>
                    </Grid>
                </Grid>
            </Container>
        );
    };
}

export default Movements;
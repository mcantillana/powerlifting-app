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
                    <Grid xs={12} md={4} className={classes.MovGrid}>
                        <Link className={classes.Movement} 
                            to= {
                                {
                                pathname: '/bench-press',
                                mov: 'Bench-Press'
                                }
                            }>
                                Bench Press
                        </Link>
                    </Grid>
                    <Grid xs={12} md={4} className={classes.MovGrid}>
                        <Link className={classes.Movement} 
                            to= {
                                {
                                pathname: '/squat',
                                mov: 'Squat'
                                }
                            }>
                                Squat
                        </Link>
                    </Grid>
                    <Grid xs={12} md={4} className={classes.MovGrid}>
                        <Link className={classes.Movement} 
                            to= {
                                {
                                pathname: '/deadlift',
                                mov: 'Deadlift'
                                }
                            }>
                                Deadlift
                        </Link>
                    </Grid>
                </Grid>
            </Container>
        );
    };
}

export default Movements;
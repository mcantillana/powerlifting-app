import React from 'react';
import {Link} from 'react-router-dom';
import Container from '@material-ui/core/Container';
import Grid from "@material-ui/core/Grid";

import classes from './Home.module.css';
const Home = (props) => {
    return (
      <Container fixed>
          <Grid container 
                direction="row"
                justify="center"
                alignItems="center">
                <Grid xs={12} md={4} className={classes.MovGrid} item={true}>
                    <Link className={classes.Movement} 
                        to= "/history">
                            Historial
                    </Link>
                </Grid>
                <Grid xs={12} md={4} className={classes.MovGrid} item={true}>
                    <Link className={classes.Movement} 
                        to="/movements">Movimientos
                    </Link>
                </Grid>
            </Grid>
      </Container>  
    );
}

export default Home;
import React from 'react';
import {Link} from 'react-router-dom';
import Grid from "@material-ui/core/Grid";

import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    MovGrid: {
        display: 'inherit',
    },
    Movement: {
        background: 'linear-gradient(90deg, rgba(70,24,24,1) 0%, rgba(255,6,6,1) 75%)',
        boxShadow: '0 5px 0 darkred',
        color: 'white',
        borderRadius: '35px',
        padding: '50px 0px',
        position: 'relative',
        textDecoration: 'none',
        textTransform: 'uppercase',
        cursor:'pointer',
        fontWeight: 'bold',
        fontSize:'22px',
        textAlign: 'center',
        display:"inline-block",
        [theme.breakpoints.up('md')]: {
            marginTop: '150px',
            width: '50%',
        },
        [theme.breakpoints.up('xs')]: {
            margin: '50px auto',
            width: '75%',
        },
        '&:active':{
            boxShadow: 'none',
            top: '5px'
        }
        
    },
}));

const Home = (props) => {
    const classes = useStyles();
    return (
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
    );
}

export default Home;
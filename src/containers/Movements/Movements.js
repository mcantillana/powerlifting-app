import React from 'react';
import {Link} from 'react-router-dom';
import {makeStyles} from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
    Movements: {
        marginTop: "50px"
    },
    MovGrid: {
        display: "inherit"
    },
    Movement: {
        background: "linear-gradient(90deg, rgba(70,24,24,1) 0%, rgba(255,6,6,1) 75%)",
        boxShadow: "0 5px 0 darkred",
        color: "white",
        borderRadius: "35px",
        margin: "20px auto",
        width: "20%",
        textAlign: "center",
        padding: "50px 0px",
        position: "relative",
        textDecoration: "none",
        textTransform: "uppercase",
        display:"inline-block",
        cursor:"pointer",
        [theme.breakpoints.up('md')]: {
            width: '50%',
        },
        [theme.breakpoints.up('xs')]: {
            width: '75%',
        },
        '&:active':{
            boxShadow: 'none',
            top: '5px'        
        }
    }
}));
const Movements = (props) => {
    const classes = useStyles();
    return (
        <Grid container 
            direction="row"
            justify="center"
            alignItems="center"
            className={classes.Movements}>
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
}

export default Movements;
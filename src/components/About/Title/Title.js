import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

/*import classes from './Title.module.css';*/

const useStyles = makeStyles({
    Title: {
        textAlign: 'center',
        /*background-image: url(../images/page-heading-bg.jpg);*/
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        padding: '230px 0px 150px 0px',
        color: '#000',
        '& h1': {
            textTransform: 'capitalize',
            fontSize: '36px',
            fontWeight: '700',
            letterSpacing: '2px',
            marginBottom: '18px'
        },
        '& span': {
            fontSize: '15px',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            color: '#000',
            display: 'block'
        }
    }
})
const Title = (props) => {
    const classes = useStyles();
    return (
        <div className={classes.Title}> {/* header-text */}
            <Grid container>
                <Grid item xs={12}>
                    <h1>POWERLIFTING APP</h1>
                    <span>Levantamiento de potencia</span>
                </Grid>
            </Grid>
        </div>
    );
}

export default Title;

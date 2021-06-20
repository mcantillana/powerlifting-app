import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import pageHeadingImage from '../../../assets/images/page-heading-background.jpg';

const useStyles = makeStyles({
    Title: {
        textAlign: 'center',
        backgroundImage: `url(${pageHeadingImage})`,
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        padding: '230px 0px 150px 0px',
        color: '#FFF',
        margin: '-24px',
        '& h1': {
            textTransform: 'capitalize',
            fontSize: '50px',
            fontWeight: '700',
            letterSpacing: '2px',
            marginBottom: '18px'
        },
        '& span': {
            fontSize: '25px',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            color: '#FFF',
            display: 'block'
        }
    }
})
const Header = (props) => {
    const classes = useStyles();
    return (
        <div className={classes.Title}>
            <Grid container>
                <Grid item xs={12}>
                    <h1>POWERLIFTING APP</h1>
                    <span>Levantamiento de potencia</span>
                </Grid>
            </Grid>
        </div>
    );
}

export default Header;

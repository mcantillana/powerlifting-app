import React from 'react';
import Grid from '@material-ui/core/Grid';

import classes from './Title.module.css';
const Title = (props) => {
    return (
        <div className={classes.Title}> {/* header-text */}
            <Grid container>
                <Grid item md={12}>
                    <h1>POWERLIFTING APP</h1>
                    <span>Levantamiento de potencia</span>
                </Grid>
            </Grid>
        </div>
    );
}

export default Title;

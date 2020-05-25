import React from 'react';
import Grid from '@material-ui/core/Grid';

import classes from './Data.module.css';
const data = (props) => {
    return (
        <Grid item container className={classes.Data}
                xs={12} 
                sm={6}>
                <strong>{props.subtitle}:</strong>
                <p>{props.value}</p>
        </Grid>
    );
}

export default data;
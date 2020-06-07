import React from 'react';
import Grid from '@material-ui/core/Grid';

import classes from './Data.module.css';
const data = (props) => {
    let subtitle = props.subtitle;
    let subtitleCapitalized = subtitle.charAt(0).toUpperCase() + subtitle.slice(1);
    return (
        <Grid item container className={classes.Data}
                xs={12} 
                sm={6}>
                <strong>{subtitleCapitalized}:</strong>
                <p>{props.value}</p>
        </Grid>
    );
}

export default data;
import React from 'react';
import Grid from '@material-ui/core/Grid';

import classes from './Title.module.css';
const Title = (props) => {
    return (
        <div className={classes.pageHeading}> {/* header-text */}
            <Grid container>
                <Grid item md={12}>
                    <h1>About Us</h1>
                    <span>We have over 20 years of experience</span>
                </Grid>
            </Grid>
        </div>
    );
}

export default Title;

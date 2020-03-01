import React from 'react';

import Grid from '@material-ui/core/Grid';


import Message from './Message/Message';
import ImageError from './ImageError/ImageError';

import classes from './NotFound.module.css';

const notFound = () => {
    return (
        <div className={classes.NotFound}>
            <Grid container spacing={6}>
                <Grid item xs={12} sm={12} md={5}>
                    <ImageError/>
                </Grid>
                <Grid item xs={12} sm={12} md={7}>
                    <Message />    
                </Grid>
            </Grid>
        </div>
    );
}

export default notFound;
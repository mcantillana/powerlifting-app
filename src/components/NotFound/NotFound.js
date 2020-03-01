import React from 'react';

import Grid from '@material-ui/core/Grid';


import Message from './Message/Message';
import Image from './Image/Image';

import classes from './NotFound.module.css';

const notFound = () => {
    return (
        <div className={classes.NotFound}>
            <Grid container spacing={6}>
                <Grid item xs={12} sm={12} md={6}>
                    <Message />    
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                    <Image/>
                </Grid>
            </Grid>
        </div>
    );
}

export default notFound;
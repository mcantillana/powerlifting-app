import React from 'react';
import Grid from '@material-ui/core/Grid';

import classes from './Profile.module.css';

const profile = () => {
    return (
       <div className={classes.Profile}>
           <Grid container
                spacing={0}
                direction="column"
                alignItems="center"
                justify="center">
                <div className={classes.ProfileInfo}>
                    <Grid container className={classes.ProfileData}
                            xs={12} 
                            sm={6}
                            >
                            <strong>Apellidos:</strong>
                            <p>XXXXXXXXXXXXXXXXXXX</p>
                    </Grid>
                    <Grid container className={classes.ProfileData}
                            xs={12} 
                            sm={6}>
                        <strong>Nombres:</strong>
                        <p>XXXXXXXXXXXXXXX</p>
                    </Grid>
                    <Grid container className={classes.ProfileData}
                            xs={12} 
                            sm={6}>
                        <strong>Nro. Documento:</strong>
                        <p>XXXXXXXXXXXXX</p>
                    </Grid>
                </div>
            </Grid>
       </div>
    )
}
export default profile;
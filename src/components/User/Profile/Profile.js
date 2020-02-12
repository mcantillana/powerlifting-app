import React from 'react';
import Grid from '@material-ui/core/Grid';

import Button from '../../UI/Button/Button';
import classes from './Profile.module.css';

const profile = (props) => {
    console.log(props);
    return (
       <div className={classes.Profile}>
           <Grid container
                spacing={0}
                direction="column"
                alignItems="center"
                justify="center">
                <div className={classes.ProfileInfo}>
                    <Grid item container className={classes.ProfileData}
                            xs={12} 
                            sm={6}
                            >
                            <strong>Apellidos:</strong>
                            <p>XXXXXXXXXXXXXXXXXXX</p>
                    </Grid>
                    <Grid item container className={classes.ProfileData}
                            xs={12} 
                            sm={6}>
                        <strong>Nombres:</strong>
                        <p>XXXXXXXXXXXXXXX</p>
                    </Grid>
                    <Grid item container className={classes.ProfileData}
                            xs={12} 
                            sm={6}>
                        <strong>Nro. Documento:</strong>
                        <p>XXXXXXXXXXXXX</p>
                    </Grid>
                </div>
            </Grid>
            <Grid container className={classes.Buttons}
                spacing={0}
                direction="column"
                alignItems="center"
                justify="center">
                <Button btnType="ProfileBack">Atras</Button>
            </Grid>
       </div>
    )
}
export default profile;
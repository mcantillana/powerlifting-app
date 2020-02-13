import React from 'react';
import Grid from '@material-ui/core/Grid';

import Button from '../../UI/Button/Button';
import classes from './ProfileData.module.css';

const profileData = (props) => {
    let subtitle = props.dataName;
    let subtitleCapitalized = subtitle.charAt(0).toUpperCase() + subtitle.slice(1);
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
                            <strong>{subtitleCapitalized}:</strong>
                            <p>{props.dataValue}</p>
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
export default profileData;
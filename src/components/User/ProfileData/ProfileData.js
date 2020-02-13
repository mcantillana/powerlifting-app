import React from 'react';
import Grid from '@material-ui/core/Grid';

import Aux from '../../../hoc/Aux/Aux';
import classes from './ProfileData.module.css';

const profileData = (props) => {
    let subtitle = props.dataName;
    let subtitleCapitalized = subtitle.charAt(0).toUpperCase() + subtitle.slice(1);
    return (
        <Aux>
            <div className={classes.ProfileInfo}>
                <Grid item container className={classes.ProfileData}
                        xs={12} 
                        sm={6}
                        >
                        <strong>{subtitleCapitalized}:</strong>
                        <p>{props.dataValue}</p>
                </Grid>
            </div>
        </Aux>
    )
}
export default profileData;
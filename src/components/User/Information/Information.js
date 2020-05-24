import React from 'react';

import Data from './Data/Data';
import classes from './Information.module.css';

const profileData = (props) => {
    const information = props.information;
    console.log(information);
    /*let subtitle = props.dataName;
    let subtitleCapitalized = subtitle.charAt(0).toUpperCase() + subtitle.slice(1);*/
    return (
        <div className={classes.ProfileInfo}>
            <Data/>
        </div>
    )
}
export default profileData;
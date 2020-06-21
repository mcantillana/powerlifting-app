import React from 'react';

import Data from './Data/Data';
import classes from './Information.module.css';

const profileData = (props) => {
    const information = props.info.profile;
    return (
        <div className={classes.Information}>
            <Data subtitle = "name" value = {information.name} />
            <Data subtitle = "lastname" value = {information.lastname} />
            <Data subtitle = "id" value = {information.idnumber} />
            <Data subtitle = "email" value = {information.email} />
        </div>
    )
}
export default profileData;
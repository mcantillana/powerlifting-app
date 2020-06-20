import React from 'react';

import Data from './Data/Data';
import classes from './Information.module.css';

const profileData = (props) => {
    const information = props.info.profile;
    console.log(information);
    /*let dataInformation = Object.keys(information).map(function(key) {
        return <Data key = {key} subtitle = {key} value = {information[key]} />;
      })*/
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
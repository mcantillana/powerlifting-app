import React from 'react';

import FormProfile from '../../../containers/Account/Profile/Form/Form';
import Information from './Information/Information';
import loader from '../../../assets/gif/loader.gif';

const  section = (props) => {
    let profileSection =<img src = {loader} alt="Cargando..." width="60"/>;
    let information = props.profileData;
    let isEmpty = Object.keys(information).length === 0;
    console.log("information empty:  " + isEmpty);
    profileSection = <Information info = {information} />
    if(isEmpty) {
        profileSection = <FormProfile/>;
    }
    return profileSection;
};

export default section;

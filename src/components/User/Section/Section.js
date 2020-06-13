import React from 'react';

import FormProfile from '../../../containers/Account/Profile/Form/Form';
import Information from './Information/Information';
import loader from '../../../assets/gif/loader.gif';

const  section = (props) => {
    let information = props.profileData;
    let tam = Object.keys(information).length;
    let profileSection = <Information info = {information} />;

    if(props.loader) { 
        profileSection = <img src = {loader} alt = "Cargando..." />;
    }
    if(!props.loader && !tam) {
        profileSection = <FormProfile />;
    }
    return profileSection;
};

export default section;

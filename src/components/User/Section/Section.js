import React from 'react';

import FormProfile from '../../../containers/Account/Profile/Form/Form';
import Information from './Information/Information';
import loader from '../../../assets/gif/loader.gif';

const  section = (props) => {
    let information = props.profileData;
    let exist = props.exist;
    let profileSection = [];
    if(information){
        profileSection = <Information info = {information} />;
    }
    if(props.loader) { 
        profileSection = <img src = {loader} alt = "Cargando..." />;
    }
    if(!props.loader && !exist) {
        profileSection = <FormProfile />;
    }
    return profileSection;
};

export default section;

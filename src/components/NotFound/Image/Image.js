import React from 'react';

import notfound from '../../../assets/images/notfound.png';
import classes from './Image.module.css';
const image = () => {
    return(
        <div className={classes.body}>
            <div className={classes.image}>
                <img src={notfound} alt="Not Found"/>
            </div>
        </div>
    );
}
export default image;
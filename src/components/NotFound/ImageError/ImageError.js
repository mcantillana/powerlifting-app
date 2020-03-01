import React from 'react';

import notfound from '../../../assets/images/notfound.png';
import classes from './ImageError.module.css';

const imageError = () => {
    return(
        <div className={classes.ImageError}>
            <div className={classes.Image}>
                <img src={notfound} alt="Not Found"/>
            </div>
        </div>
    );
}
export default imageError;
import React from 'react';

import notfound from '../../assets/images/notfound.png';
import classes from './NotFound.module.css';

const notFound = (props) => {
    return (
        <div className={classes.NotFound}>
            <div className={classes.Title}>
                <h1>Oops!</h1>
            </div>
            <div className={classes.body}>
                <div className={classes.message}>
                    <p>Al parecer la pagina que solicitaste no existe o no se encuentra disponible en este momento</p>
                </div>
                <div className={classes.image}>
                    <img src={notfound} alt="Not Found"/>
                </div>
            </div>
        </div>
    );
}

export default notFound;
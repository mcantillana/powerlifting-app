import React from 'react';

import classes from './Message.module.css';
const message = () => {
    return(
        <div className={classes.Message}>
            <div className={classes.Title}>
                <h1>Oops!</h1>
            </div>
            <div className={classes.Paragraph}>
                <p>Al parecer la pagina que solicitaste no existe o no se encuentra disponible en este momento</p>
            </div>
        </div>   
    );
}

export default message;
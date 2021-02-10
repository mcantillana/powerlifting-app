import React from 'react';

import classes from './DisciplineControl.module.css';

const disciplineControl = (props) => {
    return (
        <div className={classes.DisciplineControl}>
            <div className={classes.Label}>0</div>
            <button className={classes.More}>Subir</button>
            <button className={classes.Less}>Bajar</button>
        </div>
    )
}

export default disciplineControl;
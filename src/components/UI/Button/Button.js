import React from 'react';

import classes from './Button.module.css';

const button = (props) => {
    return(
        <button className={[classes.Btn, classes[props.btnType]].join(' ')}
                disabled={props.disabled}
                onClick={props.clicked}>
            {props.children}
        </button>
    );
}

export default button;
import React from 'react';

import classes from './Button.module.css';

const button = (props) => {
    return(
        <div class={classes.Button}>
            <button disabled={props.disabled} className={[classes.Button, classes[props.btnType]].join(' ')}>
                {props.children}
            </button>
        </div>
    )
}
export default button;
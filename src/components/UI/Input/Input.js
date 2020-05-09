import React from 'react';
import classes from './Input.module.css';

const input = (props) => {

    let inputElement = null;
    switch(props.elementType){
        case ('text'):
        case ('email'):
            inputElement = <input {...props.elementConfig} onChange={props.change}/>;
            break;
        default: 
            break;
    }
    return(
        <div className={classes.Input}>
            <label>{props.label}: </label>
            {inputElement}
        </div>
    );
}

export default input;
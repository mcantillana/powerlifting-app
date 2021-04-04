import React from 'react';
import TextField from '@material-ui/core/TextField';
import classes from './Input.module.css';

const input = (props) => {
    let inputElement = null;
    let errorVal = false;
    if(props.shouldValidate && props.invalid && props.touched){
        errorVal = true;
    }
    
    switch(props.elementType){
        case 'input':
            inputElement = <TextField
                            error={errorVal}
                            {...props.elementConfig}
                            value={props.value} 
                            onChange={props.changed} />;
            break;
        default:
            inputElement = <input { ...props.elementConfig} 
                            value={props.value} 
                            onChange={props.changed} />
            break;
    }
    return (
        <div className={classes.Input}>
            {inputElement}
        </div>
    );
}

export default input;
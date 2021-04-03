import React from 'react';
//import classes from './input.module.css';

const input = (props) => {
    let inputElement = null;
    switch(props.elementType){
        case 'input':
            inputElement = <input {...props.elementConfig}
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
        <div>
            <label>{props.label}</label>
            {inputElement}
        </div>
    );
}

export default input;
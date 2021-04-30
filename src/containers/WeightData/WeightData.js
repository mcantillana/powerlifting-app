import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';

import Button from '../../components/UI/Button/Button';
import Input from '../../components/UI/Input/Input';
import {updateObject, checkValidity} from '../../shared/utility';

const useStyles = makeStyles({
    WeightData: {
        margin: "20px auto",
        width: "40%",
        textAlign: "center",
        boxShadow: "0 2px 3px #CCC",
        border: "1px solid #EEE",
        padding: "10px",
        boxSizing: "border-box"
    }
});
const WeightData = (props) => {
    const classes = useStyles();
    const [weightForm, setWeightForm] = useState({
        weight: {
            elementType: 'input',
            elementConfig: {
                variant: "outlined",
                label: "Peso",
                type: 'number',
                placeholder: 'Insert Weight',
            },
            value: '0',
            validation: {
                required: 'true',
                isPositive: 'true'
            },
            valid: false,
            touched: false,
            required: true,
        }
    });
    const [ formIsValid, setFormIsValid] = useState(false);

    const inputChangeHandler = (event, inputIdentifier) => {
        const updatedFormElement = updateObject(weightForm[inputIdentifier], {
            value: event.target.value,
            valid: checkValidity(event.target.value, weightForm[inputIdentifier].validation),
            touched: true,
        });
        const updatedWeightForm = updateObject(weightForm, {
            [inputIdentifier]:  updatedFormElement
        });
        let formIsValid = true;
        for(let inputIdentifier in updatedWeightForm){
            formIsValid = updatedWeightForm[inputIdentifier].valid && formIsValid;
        };
        setWeightForm(updatedWeightForm);
        setFormIsValid(formIsValid);
    };

    const formElementsArray = [];
    for( let key  in weightForm) {
        formElementsArray.push({
            id: key,
            config: weightForm[key]
        });
    }
    let form = (
        <form>
            {formElementsArray.map(formElement => (
                <Input
                    key={formElement.id} 
                    label={formElement.config.label}
                    elementType={formElement.config.elementType} 
                    elementConfig={formElement.config.elementConfig}
                    value={formElement.config.value}
                    invalid={!formElement.config.valid}
                    shouldValidate={formElement.config.validation} 
                    touched={formElement.config.touched}
                    changed={(event) => inputChangeHandler(event, formElement.id)} 
                />
            ))}
            <Button btnType="btnSuccess" disabled={!formIsValid}>Registrar</Button>
        </form>
    );
    return (
        <div className={classes.WeightData}>
            <h4>Peso a Levantar</h4>
            {form}
        </div>
    );
}

export default WeightData;
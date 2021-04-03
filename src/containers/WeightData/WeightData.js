import React, {useState} from 'react';
import Input from '../../components/UI/Input/Input';
import {updateObject} from '../../shared/utility';

const WeightData = (props) => {
    const [weightForm, setWeightForm] = useState({
        weight: {
            elementType: 'input',
            elementConfig: {
                type: 'number',
                placeholder: 'Insert Weight'
            },
            value: '0',
            validation: {
                required: 'true',
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
            touched: true,
        });
        const updatedWeightForm = updateObject(weightForm, {
            [inputIdentifier]:  updatedFormElement
        });
        /*let formIsValid = true;
        for(let inputIdentifier in updatedWeightForm){
            formIsValid = updatedWeightForm[inputIdentifier].valid && formIsValid;
        };*/
        setWeightForm(updatedWeightForm);
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
                    elementType={formElement.config.elementType} 
                    elementConfig={formElement.config.elementConfig}
                    value={formElement.config.value}
                    invalid={!formElement.config.validation}
                    shouldValidate={formElement.config.validation} 
                    touched={formElement.config.touched} 
                />
            ))}
        </form>
    );
    return (
        <div>
            {form}
        </div>
    );
}

export default WeightData;
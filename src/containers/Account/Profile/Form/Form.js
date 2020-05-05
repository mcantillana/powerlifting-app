import React, {Component} from 'react';
import classes from './Form.module.css';

import Input from '../../../../components/UI/Input/Input';
import Button from '../../../../components/UI/Button/Button';


class Form extends Component {

    constructor(props) {
        super(props);

        this.state = {
            profileForm: {
                name: {
                    label: 'Name',
                    elementType: 'text',
                    elementConfig: {
                        name: 'name',
                        placeholder: 'Name'
                    },
                    value: '',
                    validation: {
                        required: true
                    }
                },
                lastname: {
                    label: 'Lastname',
                    elementType: 'text',
                    elementConfig: {
                        name: 'lastname',
                        placeholder: 'Lastname'
                    },
                    value: '',
                    validation: {
                        required: true
                    }
                },
                idnumber: {
                    label: 'ID Number',
                    elementType: 'text',
                    elementConfig: {
                        name: 'idnumber',
                        placeholder: 'ID Number'
                    },
                    value: '',
                    validation: {
                        required: true,
                    }
                },
                email: {
                    label: 'Email',
                    elementType: 'email',
                    elementConfig: {
                        name: 'email',
                        placeholder: 'Email'
                    },
                    value: '',
                    validation: {
                        required: true
                    }
                }
            }
        }
    }

    render() {
        let formElementsArray = [];
        Object.keys(this.state.profileForm).map(key => {
            return formElementsArray.push( {
                id: key,
                config: this.state.profileForm[key]
            });
        });
        return(
            <form className={classes.Form}>
                {formElementsArray.map( formElement => 
                    <Input key = {formElement.id} 
                        label = {formElement.config.label}
                        elementType = {formElement.config.elementType} 
                        elementConfig = {formElement.config.elementConfig}/>
                )}
                <Button btnType="submitProfile">REGISTER</Button>
            </form>
        ) 
    }
}

export default Form;
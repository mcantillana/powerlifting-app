import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import classes from './Form.module.css';

import Input from '../../../../components/UI/Input/Input';
import Button from '../../../../components/UI/Button/Button';
import axios from '../../../../axios';

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
            },
            formIsValid: false
        }
    }

    saveProfileData = (event) => {
        event.preventDefault();
        const formData = {};
        Object.keys(this.state.profileForm).map(formElementIdentifier => {
            return formData[formElementIdentifier] = this.state.profileForm[formElementIdentifier].value;
        });
        axios.post('account/profile.json', formData)
            .then(response => {
                this.props.history.push('/profile');
            })
            .catch(error => {
                console.log(error.response);
                console.log(error.request);
                console.log(error.message);
            });
    }

    inputChangeHandler = (event, inputField) => {
        const updatedProfileForm = {
            ...this.state.profileForm
        };
        const updatedInputFIeld = {
            ...updatedProfileForm[inputField]
        }
        updatedInputFIeld.value = event.target.value;
        updatedProfileForm[inputField] = updatedInputFIeld;
        this.setState({profileForm: updatedProfileForm})
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
            <form className={classes.Form} onSubmit={this.saveProfileData}>
                {formElementsArray.map( formElement => 
                    <Input key = {formElement.id} 
                        label = {formElement.config.label}
                        elementType = {formElement.config.elementType} 
                        elementConfig = {formElement.config.elementConfig}
                        value = {formElement.config.value}
                        change = {(event) => this.inputChangeHandler(event, formElement.id)}/>
                )}
                <Button btnType="submitProfile">REGISTER</Button>
            </form>
        ) 
    }
}

export default withRouter(Form);
import React, {Component} from 'react';
import classes from './Form.module.css';

import Input from '../../../../components/UI/Input/Input';

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
            formElementsArray.push( {
                id: key,
                config: this.state.profileForm[key]
            });
        });
        console.log(formElementsArray);
        return(
            <form className={classes.Form}>
                {formElementsArray.map( formElement => 
                      <Input key = {formElement.id} 
                        label = {formElement.config.label}
                        elementType = {formElement.config.elementType} 
                        elementConfig = {formElement.config.elementConfig}/>
                )}
                {/*<div className={classes.Row}>
                    <label>Name: </label>
                    <input type="text" name="name" placeholder="Name"/>
                </div>
                <div className={classes.Row}>
                    <label>Lastname: </label>
                    <input type="text" name="lastname" placeholder="Lastname"/>
                </div>
                <div className={classes.Row}>
                    <label>ID Number: </label>
                    <input type="text" name="idnumber" placeholder="ID Number"/>
                </div>
                <div className={classes.Row}>
                    <label>Email: </label>
                    <input type="email" name="email" placeholder="Email"/>
                </div>*/}
            </form>
        ) 
    }
}

export default Form;
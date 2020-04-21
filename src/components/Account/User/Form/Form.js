import React from 'react';
import classes from './Form.module.css';

const form = () => {
    return(
        <form className={classes.Form}>
            <div className={classes.Row}>
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
            </div>
        </form>
    )
}

export default form;
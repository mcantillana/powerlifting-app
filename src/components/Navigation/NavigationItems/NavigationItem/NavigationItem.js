import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {NavLink} from 'react-router-dom';

const useStyles = makeStyles({
    NavigationItem: {
        marginLeft: '20px',
        float: 'left'
    },
    Item: {
        fontSize: '20px',
        display: 'block',
        color: 'white',
        textAlign: 'center',
        padding: '14px 16px',
        textDecoration: 'none'
    }
});
const NavigationItem = (props) => {
    const classes = useStyles();
    return (
        <li className={classes.NavigationItem}>
            <NavLink 
                className={classes.Item}
                to = {props.link}
                exact = {props.exact}>
                    {props.children}
            </NavLink>
        </li>
    )
}

export default NavigationItem;
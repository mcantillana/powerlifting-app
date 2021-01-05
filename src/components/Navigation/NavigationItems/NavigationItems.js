import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import classes from './NavigationItems.module.css';
const navigationItems = (props) => {
    return (
        <ul className={classes.NavigationItems}>
            <NavigationItem exact link="/">Home</NavigationItem>
            <NavigationItem link="/one">One</NavigationItem>
            <NavigationItem link="/two">Two</NavigationItem>
        </ul>
    )
}
export default navigationItems;
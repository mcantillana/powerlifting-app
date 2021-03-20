import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import classes from './NavigationItems.module.css';
const navigationItems = (props) => {
    return (
        <ul className={classes.NavigationItems}>
            <NavigationItem exact link="/">Home</NavigationItem>
            <NavigationItem link="/history">Historial</NavigationItem>
            <NavigationItem link="/movements">Movimientos</NavigationItem>
        </ul>
    )
}
export default navigationItems;
import React from 'react';
import {makeStyles} from '@material-ui/core/styles';

import NavigationItem from './NavigationItem/NavigationItem';

const useStyles = makeStyles({
    NavigationItems: {
        listStyleType: 'none',
        margin: 0,
        padding: 0,
        overflow: 'hidden',
    }
});
const NavigationItems = (props) => {
    const classes = useStyles();
    return (
        <ul className={classes.NavigationItems}>
            <NavigationItem exact link="/">Home</NavigationItem>
            <NavigationItem link="/history">Historial</NavigationItem>
            <NavigationItem link="/movements">Movimientos</NavigationItem>
        </ul>
    )
}
export default NavigationItems;
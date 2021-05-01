import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import { useTheme, useMediaQuery } from '@material-ui/core';

import Aux from '../../../hoc/Aux/Aux';
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
    const theme = useTheme();
    const showLinks = useMediaQuery(theme.breakpoints.up('sm'));
    
    let nItems = null;
    if(showLinks){
        nItems = (
            <ul className={classes.NavigationItems}>
                <NavigationItem exact link="/">Home</NavigationItem>
                <NavigationItem link="/history">Historial</NavigationItem>
                <NavigationItem link="/movements">Movimientos</NavigationItem>
            </ul>
        );
    }
    return (
        <Aux>
            {nItems}
        </Aux>
    )
}
export default NavigationItems;
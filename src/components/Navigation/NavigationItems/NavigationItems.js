import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
const NavigationItems = (props) => {
    return (
        <div>
            <NavigationItem exact link="/">Home</NavigationItem>
            <NavigationItem link="/one">One</NavigationItem>
            <NavigationItem link="/two">Two</NavigationItem>
        </div>
    )
}
export default NavigationItems;
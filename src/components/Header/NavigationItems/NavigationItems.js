import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => (
    <ul id="nav-mobile" class="left hide-on-med-and-down">
        <NavigationItem link="Sass"/>
        <NavigationItem link="Components"/>
        <NavigationItem link="JavaScript"/>
    </ul>
);

export default navigationItems;
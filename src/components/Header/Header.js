import React from 'react';
import Logo from './Logo/Logo';
import NavigationItems from './NavigationItems/NavigationItems';

const header = (props) => (
    <nav>
        <div class="nav-wrapper">
            <Logo/>
            <NavigationItems/>
        </div>
    </nav>
);
export default header;
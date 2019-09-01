import React from 'react';
import Logo from './Logo/Logo';
import NavigationItems from './NavigationItems/NavigationItems';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import classes from './Header.module.css';
const header = (props) => (
    <AppBar position="static">
        <Toolbar className = {classes.Header} variant="dense">
            <IconButton edge="start"  color="inherit" aria-label="menu">
            <MenuIcon />
            </IconButton>
            <ul>
                <li><a href="#">Link 1</a></li>
                <li><a href="#">Link 2</a></li>
                <li><a href="#">Link 3</a></li>
            </ul>
        </Toolbar>
    </AppBar>
);
export default header;
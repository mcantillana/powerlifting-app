import React from 'react';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './Toolbar.module.css';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const toolbar = (props) => {
    return (
        <div className={classes.Toolbar}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="menu" onClick={props.clicked}>
                        <MenuIcon />
                    </IconButton>
                    <section className={classes.rightToolbar}>
                        <NavigationItems/>
                    </section>
                </Toolbar>
            </AppBar>
        </div>
    );
};
export default toolbar;
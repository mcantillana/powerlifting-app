import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import classes from './Toolbar.module.css';

import clsx from 'clsx';
const toolbar = (props) => {

    return(
        <div className={classes.Toolbar}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" 
                        className={clsx(classes.MenuButton, props.openDrawer && classes.hide)} 
                        color="inherit" 
                        aria-label="menu"
                        onClick={props.drawerToggleClicked}  >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.Title}>
                        05K4R1N
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default toolbar;
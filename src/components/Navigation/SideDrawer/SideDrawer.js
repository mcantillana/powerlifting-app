import React from 'react';

import IconButton from '@material-ui/core/IconButton';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Drawer from '@material-ui/core/Drawer';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';

import classes from './SideDrawer.module.css';

const sideDrawer = (props) => {
    return(
        <Drawer
            className={classes.Drawer}
            variant="persistent"
            anchor="left"
            open={props.openDrawer}
            classes={{
            paper: classes.drawerPaper,
            }}
        >
            <div className={classes.DrawerHeader}>
                <IconButton onClick={props.drawerToggleClicked}>
                    <ChevronLeftIcon className={classes.LeftIcon} />
                </IconButton>
            </div>
            <Divider />
            <List>
                <ListItem button key="Perfil">
                    <ListItemIcon><AccountCircleIcon/></ListItemIcon>
                    <ListItemText primary="Mi Perfil"/>
                </ListItem>
                <ListItem button key="Efectivo">
                    <ListItemIcon><MonetizationOnIcon/></ListItemIcon>
                    <ListItemText primary="Movimientos"/>
                </ListItem>
            </List>
        </Drawer>
    );
}

export default sideDrawer;
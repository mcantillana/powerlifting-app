import React from 'react';

import Aux from '../../../hoc/Aux/Aux';

import IconButton from '@material-ui/core/IconButton';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Drawer from '@material-ui/core/Drawer';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import HomeIcon from '@material-ui/icons/Home';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
import FormatListNumberedIcon from '@material-ui/icons/FormatListNumbered';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

import {Link} from 'react-router-dom';

import classes from './SideDrawer.module.css';

const sideDrawer = (props) => {
    return(
        <Aux>
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
                    <ListItem button key="Inicio" component={Link} to="/">
                        <ListItemIcon><HomeIcon/></ListItemIcon>
                        <ListItemText primary="Inicio"/>
                    </ListItem>
                    <ListItem button key="Perfil" component={Link} to="/profile">
                        <ListItemIcon><AccountCircleIcon/></ListItemIcon>
                        <ListItemText primary="Profile"/>
                    </ListItem>
                    <ListItem button onClick={props.itemSavingToggleClicked}>
                        <ListItemIcon>
                            <MonetizationOnIcon />
                        </ListItemIcon>
                        <ListItemText primary="Cuenta" />
                        {props.openItemCollapse ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    <Collapse in={props.openItemCollapse} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItem button className={classes.collapseSaving} component={Link} to="/movement/save">
                                <ListItemIcon>
                                    <AddCircleOutlineIcon />
                                </ListItemIcon>
                                <ListItemText primary="Depositar"/>
                            </ListItem>
                            <ListItem button className={classes.collapseSaving} component={Link} to="/movement/withdraw">
                                <ListItemIcon>
                                    <RemoveCircleOutlineIcon />
                                </ListItemIcon>
                                <ListItemText primary="Retirar" />
                            </ListItem>
                            <ListItem button className={classes.collapseSaving} component={Link} to="/statement">
                                <ListItemIcon>
                                    <FormatListNumberedIcon />
                                </ListItemIcon>
                                <ListItemText primary="Ver Extracto" />
                            </ListItem>
                        </List>
                    </Collapse>
                </List>
            </Drawer>
        </Aux>
    );
}

export default sideDrawer;

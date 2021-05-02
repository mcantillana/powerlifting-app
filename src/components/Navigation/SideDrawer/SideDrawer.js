import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import ReceiptIcon from '@material-ui/icons/Receipt';
import AccessibilityNewIcon from '@material-ui/icons/AccessibilityNew';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import Drawer from '@material-ui/core/Drawer';

const drawerWidth = 200;

const useStyles = makeStyles( (theme) => ({
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
        background: '#FF0000',
        color: '#FFFFFF'
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
    drawerIcon: {
        color:'#FFFFFF'
    },
}));
const SideDrawer = (props) => {
    const classes = useStyles();
    const theme = useTheme();

    return (
        <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={props.openDrawer}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
            <div className={classes.drawerHeader}>
                <IconButton onClick={props.drawerClose}>
                    {theme.direction === 'ltr' ? <ChevronLeftIcon className={classes.drawerIcon} /> : <ChevronRightIcon className={classes.drawerIcon} />}
                </IconButton>
            </div>
            <Divider />
            <List>
                <ListItem button component={Link} to="/history">
                    <ListItemIcon><ReceiptIcon className={classes.drawerIcon}/></ListItemIcon>
                    <ListItemText primary="Historial" />
                </ListItem>
                <ListItem button component={Link} to="/movements">
                    <ListItemIcon><AccessibilityNewIcon className={classes.drawerIcon}/></ListItemIcon>
                    <ListItemText primary="Movimientos" />
                </ListItem>
            </List>
        </Drawer>
    );
}
export default SideDrawer;

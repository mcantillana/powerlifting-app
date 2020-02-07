import React from 'react';

import IconButton from '@material-ui/core/IconButton';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Drawer from '@material-ui/core/Drawer';

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
            {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                <ListItem button key={text}>
                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                <ListItemText primary={text} />
                </ListItem>
            ))}
            </List>
            <Divider />
            <List>
            {['All mail', 'Trash', 'Spam'].map((text, index) => (
                <ListItem button key={text}>
                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                <ListItemText primary={text} />
                </ListItem>
            ))}
            </List>
        </Drawer>
    );
}

export default sideDrawer;
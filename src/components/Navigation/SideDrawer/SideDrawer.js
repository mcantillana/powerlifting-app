import React,{ useState } from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ReceiptIcon from '@material-ui/icons/Receipt';
import AccessibilityNewIcon from '@material-ui/icons/AccessibilityNew';
import { makeStyles } from '@material-ui/core/styles';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles({
    paper: {
      background: 'red',
      color: 'black'
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
    }
  });

const SideDrawer = (props) => {
    console.log(props.open);
    const styles = useStyles();
    const [open, setOpen] = useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    }
    return (
        <Drawer classes={{ paper: styles.paper }} anchor={"left"} open={props.open}>
            <div className={{ drawerHeader: styles.drawerHeader }}>
                <IconButton onClick={handleDrawerClose}>
                    <ChevronLeftIcon/>
                </IconButton>
            </div>
            <List>
                <ListItem button>
                    <ListItemIcon><ReceiptIcon/></ListItemIcon>
                    <ListItemText primary="Historial" />
                </ListItem>
                <ListItem button>
                    <ListItemIcon><AccessibilityNewIcon/></ListItemIcon>
                    <ListItemText primary="Movimientos" />
                </ListItem>
            </List>
            <Divider />
        </Drawer>
    );
};

export default SideDrawer;

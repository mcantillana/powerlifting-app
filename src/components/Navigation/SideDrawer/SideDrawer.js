import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ReceiptIcon from '@material-ui/icons/Receipt';
import AccessibilityNewIcon from '@material-ui/icons/AccessibilityNew';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    paper: {
      background: 'red',
      color: 'black'
    }
  });
const SideDrawer = (props) => {
    const styles = useStyles();
    return (
        <Drawer classes={{ paper: styles.paper }} anchor={"left"} open={props.closed}>
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
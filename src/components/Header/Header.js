import React, {Component} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import classes from './Header.module.css';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

class Header extends Component {
    constructor(props){
        super(props);
        this.state = {
            left: false
        }
    }
    toggleDrawer = (side, open) => event => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
    
        this.setState({ ...this.state, [side]: open });
    }
    sideList = side => {
        return (<div
            className={classes.list}
            role="presentation"
            onClick={this.toggleDrawer(side, false)}
            onKeyDown={this.toggleDrawer(side, false)}
            >
            <List>
                {['Link 1', 'Link 2', 'Link 3'].map((text, index) => (
                <ListItem button key={text}>
                    <ListItemText primary={text} />
                </ListItem>
                ))}
            </List>
            </div>
        );
    };
    render(){
        return (
            <AppBar position="static">
                <Drawer open={this.state.left} onClose={this.toggleDrawer('left', false)}>
                    {this.sideList('left')}
                </Drawer>
                <Toolbar className = {classes.Header} variant="dense">
                    <IconButton edge="start"  color="inherit" aria-label="menu">
                    <MenuIcon onClick={this.toggleDrawer('left', true)} />
                    </IconButton>
                    <ul className = {classes.itemLinks}>
                        <li><a href="#">Link 1</a></li>
                        <li><a href="#">Link 2</a></li>
                        <li><a href="#">Link 3</a></li>
                    </ul>
                </Toolbar>
            </AppBar>
        )
    }
}
export default Header;
import React, {Component} from 'react';
import Aux from '../Aux/Aux';
import BarHeader from '../../components/BarHeader/BarHeader';
import Toolbar from '../../components/Toolbar/Toolbar';
import SideDrawer from '../../components/SideDrawer/SideDrawer';
class Layout extends Component {
    constructor(props){
        super(props);
        this.state = {
            open: false
        }
    }
    handleDrawerToggle = () => {
        this.setState((prevState) => {
            return { open: !prevState.open };
        });
    };
    handleDrawerClose = () => {
        this.setState({open: false});
      };
    render(){
        return(
            <Aux>
                <Toolbar openDrawer = {this.state.open} drawerToggleClicked={this.handleDrawerToggle}/>
                <SideDrawer openDrawer = {this.state.open} drawerToggleClicked={this.handleDrawerToggle} />
                <main>
                    {this.props.children}
                </main>
                {/*<BarHeader/>*/}
            </Aux>
        )
    }
}

export default Layout;
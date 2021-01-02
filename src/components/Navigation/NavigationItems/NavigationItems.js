import NavigationItem from './NavigationItem/NavigationItem';
import classes from './NavigationItems.module.css';

const navigationItems = (props) => {
    return (
        <ul className = {classes.NavigationItems}>
            <NavigationItem link="/">Link 1</NavigationItem>
            <NavigationItem link="/one">Link 2</NavigationItem>
            <NavigationItem link="/two">Link 3</NavigationItem>
        </ul>
    );
};

export default navigationItems;
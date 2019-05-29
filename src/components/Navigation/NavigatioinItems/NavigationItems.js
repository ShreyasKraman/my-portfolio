import React from 'react';

import classes from './NavigationItems.css';

import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/" active>About Me</NavigationItem>
        <NavigationItem>Datacenter</NavigationItem>
        <NavigationItem>Feat</NavigationItem>
        <NavigationItem>Timeline</NavigationItem>
        <NavigationItem>Contact</NavigationItem>
    </ul>
);

export default navigationItems;
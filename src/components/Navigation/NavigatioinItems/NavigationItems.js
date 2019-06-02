import React from 'react';

import classes from './NavigationItems.css';

import NavigationItem from './NavigationItem/NavigationItem';

import AboutMe from '../../Sections/Aboutme/Aboutme';
import Timeline from '../../Sections/Timeline/Events';
import Project from '../../Sections/Feats/Feats';
import Contact from '../../Sections/Contact/Contact';

const navigationItems = () => (
        <ul className={classes.NavigationItems}>
            <NavigationItem link="AboutMe" active component={AboutMe}>About Me</NavigationItem>
            <NavigationItem link="Timeline" component={Timeline}>Timeline</NavigationItem>
            <NavigationItem link="Projects" component={Project}>Projects</NavigationItem>
            <NavigationItem link="Contact" component={Contact}>Contact</NavigationItem>
        </ul>
);

export default navigationItems;
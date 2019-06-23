import React from 'react';

import classes from './NavigationItems.css';

import NavigationItem from './NavigationItem/NavigationItem';

import AboutMe from '../../Sections/Aboutme/Aboutme';
import Timeline from '../../Sections/Timeline/Events';
import Project from '../../Sections/Feats/Feats';
import Contact from '../../Sections/Contact/Contact';

import {faUserCircle} from '@fortawesome/free-solid-svg-icons';
import {faFolder} from '@fortawesome/free-solid-svg-icons';
import {faCalendarAlt} from '@fortawesome/free-solid-svg-icons';
import {faPhone} from '@fortawesome/free-solid-svg-icons';

const navigationItems = (props) =>{
    
    const links = [
        {
            link:"AboutMe",
            desc:"About Me",
            component:AboutMe,
            icon:faUserCircle,
            active:true,
        },
        {
            link:"Timeline",
            desc:"My Timeline",
            component:Timeline,
            icon:faCalendarAlt,
            active:false,
        },
        {
            link:"Projects",
            desc:"Projects",
            component:Project,
            icon:faFolder,
            active:false,
        },
        {
            link:"Contact",
            desc:"Contact",
            component:Contact,
            icon: faPhone,
            active:false,
        }
    ];

    const navigationitems = links.map((value,idx) => {
        if(props.close){
            let navigation = value.active ? <NavigationItem 
                                                key={idx} 
                                                link={value.link} 
                                                active
                                                close={props.close} 
                                                icon={value.icon}
                                                component={value.component}>
                                                {value.desc}</NavigationItem>
                                        :
                                        <NavigationItem 
                                                key={idx} 
                                                link={value.link} 
                                                close={props.close}
                                                icon={value.icon}
                                                component={value.component}>
                                                {value.desc}</NavigationItem>
            
            return navigation
    
        }

        let navigation = value.active ? <NavigationItem 
                                                key={idx} 
                                                link={value.link} 
                                                active 
                                                icon={value.icon}
                                                component={value.component}>
                                                {value.desc}</NavigationItem>
                                        :
                                        <NavigationItem 
                                                key={idx} 
                                                link={value.link} 
                                                active 
                                                icon={value.icon}
                                                component={value.component}>
                                                {value.desc}</NavigationItem>
        return navigation
        
    }); 

    return (
        <ul className={classes.NavigationItems}>
            {navigationitems}
        </ul>
    );
};

export default navigationItems;
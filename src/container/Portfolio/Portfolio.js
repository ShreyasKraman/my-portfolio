import React from 'react';

import Aboutme from '../../components/Sections/Aboutme/Aboutme';
import Datacenter from '../../components/Sections/Datacenter/Datacenter';
import Feats from '../../components/Sections/Feats/Feats';
import Timeline from '../../components/Sections/Timeline/Events';
import Contact from '../../components/Sections/Contact/Contact';

import classes from './Portfolio.css';

const Portfolio = () => {
    return(
        <div className={classes.Portfolio}>
            <Aboutme/>
            <Datacenter/>
            <Feats/>
            <Timeline/>
            <Contact/>
        </div>
    );
}

export default Portfolio;
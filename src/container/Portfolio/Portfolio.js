import React from 'react';

import Aboutme from '../../components/Sections/Aboutme/Aboutme';
import Datacenter from '../../components/Sections/Datacenter/Datacenter';

import './Portfolio.css';

const Portfolio = () => {
    return(
        <div className="Portfolio">
            <Aboutme/>
            <Datacenter/>
        </div>
    );
}

export default Portfolio;
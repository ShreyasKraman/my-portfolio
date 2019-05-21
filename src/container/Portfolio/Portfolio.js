import React from 'react';

import classes from './Portfolio.css';

import Mypic from '../../assets/cartoon.jpg';

const Portfolio = () => {
    return(
        <div className={classes.Portfolio}>
            <img src={Mypic} alt="Shreyas Kalyanaraman"></img>
        </div>
    );
}

export default Portfolio;
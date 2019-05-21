import React from 'react';

import classes from './Portfolio.css';

import Profilepic from '../../assets/cartoon.jpg';

const Portfolio = () => {
    return(
        <div className={classes.Portfolio}>
            <img src={Profilepic} alt="Shreyas Kalyanaraman"></img>
        </div>
    );
}

export default Portfolio;
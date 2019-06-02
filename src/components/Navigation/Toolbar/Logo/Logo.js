import React from 'react';

import image from '../../../../assets/Logo.png';

import classes from './Logo.css';

const Logo = () => (

    <div className={classes.Logo}>
        <img src={image} alt="Shreyas Kalyanaraman"/>
    </div>

);

export default Logo;
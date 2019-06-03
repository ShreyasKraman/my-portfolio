import React from 'react';

import image from '../../../../assets/Logo.png';

import classes from './Logo.css';

const Logo = () => (

    <div className={classes.Logo}>
        <a href=""><img src={image} alt="Shreyas Kalyanaraman"/></a>
    </div>

);

export default Logo;
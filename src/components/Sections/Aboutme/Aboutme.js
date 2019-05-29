import React from 'react';

import ProfilePic from './Profilepic/Profilepic';
import Summary from './Summary/Summary';

import classes from './Aboutme.css';


const Aboutme = () => {
    return(
        <div className={classes.Aboutme}>
            <Summary/>
            <ProfilePic/>
        </div>
    );
}

export default Aboutme;